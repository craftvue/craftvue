<template>
  <div>
    <!-- TRIGGER SLOT -->
    <template v-if="slots.trigger">
      <div ref="triggerRef" class="c-popup__trigger">
        <slot name="trigger" :is-open="showState" :open="openPopup" :close="closePopup" />
      </div>
    </template>

    <!-- POPUP -->
    <Teleport :to="teleportTarget" :disabled="teleportDisabled">
      <Transition :css="false" @enter="onEnter" @leave="onLeave">
        <div v-if="showState" ref="popupRef" :style="mergedStyle" :class="popupClasses">
          <div v-if="props.arrow" class="c-popup__arrow" :style="arrowStyle" />
          <div class="c-popup-container">
            <div class="c-popup__header">
              <slot name="header" />
            </div>
            <div class="c-popup__body">
              <slot />
            </div>
            <div class="c-popup__footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  CSSProperties,
  HTMLAttributes,
  nextTick,
  onUnmounted,
  ref,
  StyleValue,
  useAttrs,
  useTemplateRef,
  watch,
} from 'vue'
import {
  PopupProps,
  PopupSlots,
  PopupPosition,
  PopupEmits,
  ElementSize,
  PopupClasses,
} from './CPopup.types'
import { addUnit } from '@/utils'
import {
  useIntersectionObserver,
  useResizeObserver,
  type ResizeObserverReturn,
  type IntersectionObserverReturn,
} from '@/composables'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs() as HTMLAttributes
const slots = defineSlots<PopupSlots>()
const emits = defineEmits<PopupEmits>()

const props = withDefaults(defineProps<PopupProps>(), {
  show: undefined,
  placement: 'right',
  sameWidth: false,
  align: 'start',
  offset: 5,
  boundaryPadding: 5,
  zIndex: 2000,
  teleportTo: 'body',
  restoreFocus: false,
  trigger: 'click',
  animation: 'opacity',
  arrow: false,
  showDelay: 0,
  hideDelay: 0,
  durationEnter: 300,
  durationLeave: 300,
  autoHide: false,
})

const popupRef = useTemplateRef('popupRef')
const triggerRef = ref<HTMLElement | null>(null)
const internalShow = ref(false)
const ANIMATION_EASING = 'ease'
const ARROW_SIZE = 8

let showTimer: ReturnType<typeof setTimeout> | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null
let enterAnimation: Animation | null = null
let leaveAnimation: Animation | null = null
const elsWithScroll: (HTMLElement | Window)[] = []
const resizeObserverRootEl = ref<ResizeObserverReturn | null>(null)
const resizeObserverPopup = ref<ResizeObserverReturn | null>(null)
const intersectionObserver = ref<IntersectionObserverReturn | null>(null)
const currentPlacement = ref<'top' | 'bottom' | 'left' | 'right'>(props.placement)
const currentAlign = ref<'start' | 'center' | 'end'>(props.align)

const positionPopup = ref<PopupPosition>({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
})

const sizeRootEl = ref<ElementSize>({
  height: 0,
  width: 0,
})

const popupStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    left: addUnit(positionPopup.value.left),
    top: addUnit(positionPopup.value.top),
    zIndex: props.zIndex,
  }
  if (props.sameWidth) style.width = addUnit(positionPopup.value.width)
  if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
  if (props.maxWidth) style.maxWidth = addUnit(props.maxWidth)
  return style
})

const mergedStyle = computed<StyleValue>(() => {
  if (attrs.style) {
    return [attrs.style, popupStyle.value]
  }
  return popupStyle.value
})

const popupClasses = computed<PopupClasses>(() => [
  'c-popup',
  `c-popup--${currentPlacement.value}`,
  attrs.class,
])

const showState = computed<boolean>(() => (isControlled.value ? props.show! : internalShow.value))
const isControlled = computed<boolean>(() => props.show !== undefined)
const teleportTarget = computed<HTMLElement | string>(() => props.teleportTo || 'body')
const teleportDisabled = computed<boolean>(() => props.teleportTo === false)
const effectiveOffset = computed<number>(() =>
  props.arrow ? props.offset + ARROW_SIZE : props.offset,
)
const arrowStyle = computed<CSSProperties>(() => calculateArrowPosition())
const hideDelayFinal = computed(() => props.hideDelay || (props.autoHide ? 0 : 150))
const rootElRef = computed<HTMLElement | null>(() => {
  const rootEl = props.rootEl || triggerRef.value
  if (!rootEl) return null

  if ('$el' in rootEl && rootEl.$el instanceof HTMLElement) {
    return rootEl.$el
  }

  if (rootEl instanceof HTMLElement) {
    return rootEl
  }

  return null
})

const openPopup = () => {
  if (isControlled.value) {
    emits('show')
  } else {
    internalShow.value = true
    emits('show')
  }
}

const closePopup = () => {
  if (isControlled.value) {
    emits('hide')
  } else {
    internalShow.value = false
    emits('hide')
  }
}

const calculateArrowPosition = (): CSSProperties => {
  if (!rootElRef.value || !popupRef.value || !props.arrow) return {}

  const popupWidth = popupRef.value.offsetWidth
  const popupHeight = popupRef.value.offsetHeight
  const pos = rootElRef.value.getBoundingClientRect()

  const styles: CSSProperties = {}

  if (currentPlacement.value === 'top' || currentPlacement.value === 'bottom') {
    // вычисление позиции стрелки относительно центра триггера
    const rootCenterX = pos.left + pos.width / 2 + window.scrollX
    const popupLeft = positionPopup.value.left

    let left = rootCenterX - popupLeft - ARROW_SIZE / 2

    // ограничиваем позицию стрелки границами popup
    const minLeft = ARROW_SIZE * 1.5
    const maxLeft = popupWidth - ARROW_SIZE * 2.5
    left = Math.max(minLeft, Math.min(maxLeft, left))

    styles.left = addUnit(left)
  } else if (currentPlacement.value === 'left' || currentPlacement.value === 'right') {
    // вычисление позиции стрелки относительно центра триггера
    const rootCenterY = pos.top + pos.height / 2 + window.scrollY
    const popupTop = positionPopup.value.top

    let top = rootCenterY - popupTop - ARROW_SIZE / 2

    // ограничение позиции стрелкиграницами popup
    const minTop = ARROW_SIZE * 1.5
    const maxTop = popupHeight - ARROW_SIZE * 2.5
    top = Math.max(minTop, Math.min(maxTop, top))

    styles.top = addUnit(top)
  }

  return styles
}

const handleDocumentClick = (event: MouseEvent) => {
  if (props.trigger !== 'click' || !showState.value) return

  const target = event.target as Node | null
  if (!target) return

  // проверяем что клик был не по триггеру и не в popup
  const isClickOnRootEl =
    rootElRef.value && (rootElRef.value === target || rootElRef.value.contains(target))
  const isClickInsidePopup =
    popupRef.value && (popupRef.value === target || popupRef.value.contains(target))

  // закрываем, если клик не по триггеру и (autoHide включен или клик не внутри popup)
  if (!isClickOnRootEl && (props.autoHide || !isClickInsidePopup)) {
    closePopup()
  }
}

const handleClick = (event: MouseEvent) => {
  if (props.trigger === 'click') {
    event.stopPropagation()

    if (showState.value) {
      closePopup()
    } else {
      openPopup()
    }
  }
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    // отменяем закрытие попапа при наведении
    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }

    // если попап уже открыт
    if (showState.value) return

    // задержка перед откытием
    if (props.showDelay > 0) {
      showTimer = setTimeout(() => {
        openPopup()
        showTimer = null
      }, props.showDelay)
    } else {
      openPopup()
    }
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    // отменяем открытие попапа при уходе
    if (showTimer) {
      clearTimeout(showTimer)
      showTimer = null
    }

    // если попап уже закрыт
    if (!showState.value) return

    // задержка перед скрытием
    hideTimer = setTimeout(() => {
      closePopup()
      hideTimer = null
    }, hideDelayFinal.value)
  }
}

const setupTriggerListeners = () => {
  if (!rootElRef.value) return

  if (props.trigger === 'click') {
    rootElRef.value.addEventListener('click', handleClick)
  } else if (props.trigger === 'hover') {
    rootElRef.value.addEventListener('mouseenter', handleMouseEnter)
    rootElRef.value.addEventListener('mouseleave', handleMouseLeave)
  }
}

const setupPopupHoverListeners = () => {
  if (!popupRef.value || props.trigger !== 'hover' || props.autoHide) return

  popupRef.value.addEventListener('mouseenter', handleMouseEnter)
  popupRef.value.addEventListener('mouseleave', handleMouseLeave)
}

const removeTriggerListeners = () => {
  if (!rootElRef.value) return

  if (props.trigger === 'click') {
    rootElRef.value.removeEventListener('click', handleClick)
  } else if (props.trigger === 'hover') {
    rootElRef.value.removeEventListener('mouseenter', handleMouseEnter)
    rootElRef.value.removeEventListener('mouseleave', handleMouseLeave)
  }
}

const removePopupHoverListeners = (element?: HTMLElement | null) => {
  const targetElement = element ?? popupRef.value
  if (!targetElement || props.trigger !== 'hover' || props.autoHide) return

  targetElement.removeEventListener('mouseenter', handleMouseEnter)
  targetElement.removeEventListener('mouseleave', handleMouseLeave)
}

const setPositionPopup = async () => {
  if (!rootElRef.value || !popupRef.value) {
    closePopup()
    return
  }

  const pos = rootElRef.value.getBoundingClientRect()

  // установка ширины нужно до вызова nextTick(),
  // чтобы корректно была вычислена фактическая высота
  positionPopup.value.width = props.sameWidth ? pos.width : positionPopup.value.width

  await nextTick()

  if (props.placement === 'top' || props.placement === 'bottom') {
    setVerticalPosition(popupRef.value, pos, effectiveOffset.value, props.boundaryPadding)
  }

  if (props.placement === 'left' || props.placement === 'right') {
    setHorizontalPosition(popupRef.value, pos, effectiveOffset.value, props.boundaryPadding)
  }
}

const calculateVerticalAlign = (
  align: 'start' | 'center' | 'end',
  popup: HTMLElement,
  pos: DOMRect,
): number => {
  const heightDifference = pos.height - popup.offsetHeight
  const baseTop = pos.top + window.scrollY

  if (align === 'center') return baseTop + heightDifference / 2
  if (align === 'end') return baseTop + heightDifference

  return baseTop
}

const calculateHorizontalAlign = (
  align: 'start' | 'center' | 'end',
  popup: HTMLElement,
  pos: DOMRect,
): number => {
  const widthDifference = pos.width - popup.offsetWidth
  const baseLeft = pos.left + window.scrollX

  if (align === 'center') return baseLeft + widthDifference / 2
  if (align === 'end') return baseLeft + widthDifference

  return baseLeft
}

const setVerticalPosition = (
  popup: HTMLElement,
  pos: DOMRect,
  offsetPopup: number,
  offsetWindow: number,
) => {
  // Вертикальное позиционирование
  const popupHeight = popup.offsetHeight + offsetPopup
  const popupHeightWithPadding = popupHeight + offsetWindow
  const availableSpaceBottom = window.innerHeight - pos.bottom
  const availableSpaceTop = pos.top
  const positionTopUp = pos.top + window.scrollY - popupHeight
  const positionTopDown = pos.bottom + window.scrollY + offsetPopup

  let positionTop = 0

  if (props.placement === 'bottom') {
    // Если снизу недостаточно места и сверху достаточно - размещаем сверху
    if (
      availableSpaceBottom < popupHeightWithPadding &&
      availableSpaceTop > popupHeightWithPadding
    ) {
      positionTop = positionTopUp
      currentPlacement.value = 'top'
    } else {
      positionTop = positionTopDown
      currentPlacement.value = 'bottom'
    }
  } else if (props.placement === 'top') {
    // Если сверху недостаточно места и снизу достаточно - размещаем снизу
    if (
      availableSpaceTop < popupHeightWithPadding &&
      availableSpaceBottom > popupHeightWithPadding
    ) {
      positionTop = positionTopDown
      currentPlacement.value = 'bottom'
    } else {
      positionTop = positionTopUp
      currentPlacement.value = 'top'
    }
  }

  positionPopup.value.top = positionTop

  // Горизонтальное выравнивание
  let finalAlign: 'start' | 'center' | 'end' = props.align

  // для popup с превышающей шириной
  if (popup.offsetWidth > pos.width) {
    const availableSpaceRight = window.innerWidth - pos.right
    const availableSpaceLeft = pos.left
    const widthDifference = Math.abs(pos.width - popup.offsetWidth)
    const widthDifferenceWithPadding = widthDifference + offsetWindow
    const halfWidthDifferenceWithPadding = widthDifference / 2 + offsetWindow
    const popupWidthWithPadding = popup.offsetWidth + offsetWindow
    const spaceFromLeft = window.innerWidth - pos.left

    if (props.align === 'start') {
      if (
        availableSpaceRight < halfWidthDifferenceWithPadding &&
        availableSpaceLeft > widthDifferenceWithPadding
      ) {
        finalAlign = 'end'
      } else if (
        spaceFromLeft < popupWidthWithPadding &&
        availableSpaceLeft > halfWidthDifferenceWithPadding
      ) {
        finalAlign = 'center'
      }
    } else if (props.align === 'end') {
      if (
        pos.right < popupWidthWithPadding &&
        availableSpaceLeft > halfWidthDifferenceWithPadding
      ) {
        finalAlign = 'center'
      } else if (availableSpaceLeft < halfWidthDifferenceWithPadding) {
        finalAlign = 'start'
      }
    } else if (props.align === 'center') {
      if (
        availableSpaceRight < halfWidthDifferenceWithPadding &&
        availableSpaceLeft > widthDifferenceWithPadding
      ) {
        finalAlign = 'end'
      } else if (availableSpaceLeft < halfWidthDifferenceWithPadding) {
        finalAlign = 'start'
      }
    }
  }

  /**
   * Вычисление горизонтальной позициии popup относительно элемента
   * на основе типа выравнивания (start/center/end)
   */
  currentAlign.value = finalAlign
  positionPopup.value.left = calculateHorizontalAlign(finalAlign, popup, pos)
}

const setHorizontalPosition = (
  popup: HTMLElement,
  pos: DOMRect,
  offsetPopup: number,
  offsetWindow: number,
) => {
  // Горизонтальное позиционирование
  const popupWidth = popup.offsetWidth + offsetPopup
  const popupWidthWithPadding = popupWidth + offsetWindow
  const availableSpaceRight = window.innerWidth - pos.right
  const availableSpaceLeft = pos.left
  const positionLeftStart = pos.left + window.scrollX - popupWidth
  const positionLeftEnd = pos.right + window.scrollX + offsetPopup

  let positionLeft = 0

  if (props.placement === 'right') {
    // Если справа недостаточно места и слева достаточно - размещаем слева
    if (availableSpaceRight < popupWidthWithPadding && availableSpaceLeft > popupWidthWithPadding) {
      positionLeft = positionLeftStart
      currentPlacement.value = 'left'
    } else {
      positionLeft = positionLeftEnd
      currentPlacement.value = 'right'
    }
  } else if (props.placement === 'left') {
    // Если слева недостаточно места и справа достаточно - размещаем справа
    if (availableSpaceLeft < popupWidthWithPadding && availableSpaceRight > popupWidthWithPadding) {
      positionLeft = positionLeftEnd
      currentPlacement.value = 'right'
    } else {
      positionLeft = positionLeftStart
      currentPlacement.value = 'left'
    }
  }

  positionPopup.value.left = positionLeft

  // Вертикальное выравнивание
  let finalAlign: 'start' | 'center' | 'end' = props.align

  // для popup с превышающей высотой
  if (popup.offsetHeight > pos.height) {
    const availableSpaceBottom = window.innerHeight - pos.bottom
    const availableSpaceTop = pos.top
    const heightDifference = Math.abs(pos.height - popup.offsetHeight)
    const heightDifferenceWithPadding = heightDifference + offsetWindow
    const halfHeightDifferenceWithPadding = heightDifference / 2 + offsetWindow
    const popupHeightWithPadding = popup.offsetHeight + offsetWindow
    const spaceFromTop = window.innerHeight - pos.top

    if (props.align === 'start') {
      if (
        availableSpaceBottom < halfHeightDifferenceWithPadding &&
        availableSpaceTop > heightDifferenceWithPadding
      ) {
        finalAlign = 'end'
      } else if (
        spaceFromTop < popupHeightWithPadding &&
        availableSpaceTop > halfHeightDifferenceWithPadding
      ) {
        finalAlign = 'center'
      }
    } else if (props.align === 'end') {
      if (
        pos.bottom < popupHeightWithPadding &&
        availableSpaceTop > halfHeightDifferenceWithPadding
      ) {
        finalAlign = 'center'
      } else if (availableSpaceTop < halfHeightDifferenceWithPadding) {
        finalAlign = 'start'
      }
    } else if (props.align === 'center') {
      if (
        availableSpaceBottom < halfHeightDifferenceWithPadding &&
        availableSpaceTop > heightDifferenceWithPadding
      ) {
        finalAlign = 'end'
      } else if (availableSpaceTop < halfHeightDifferenceWithPadding) {
        finalAlign = 'start'
      }
    }
  }

  /**
   * Вычисление вертикальной позиции popup отеносительно элемента
   * на основе типа выравнивания (start/center/end)
   */
  currentAlign.value = finalAlign
  positionPopup.value.top = calculateVerticalAlign(finalAlign, popup, pos)
}

const getZoomAnimationStyles = (
  placement: 'left' | 'right' | 'top' | 'bottom',
  scale?: number,
): { transform: string; transformOrigin: string } => {
  const transform =
    placement === 'bottom' || placement === 'top' ? `scaleY(${scale})` : `scaleX(${scale})`

  const originMap: Record<typeof placement, string> = {
    top: 'bottom center',
    bottom: 'top center',
    left: 'right center',
    right: 'left center',
  }
  const transformOrigin = originMap[placement]

  return {
    transform,
    transformOrigin,
  }
}

const onEnter = async (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return
  await setPositionPopup()
  await nextTick()

  // отмена предыдущей анимации
  if (leaveAnimation) {
    leaveAnimation.cancel()
    leaveAnimation = null
  }

  if (props.animation === 'zoom') {
    const start = getZoomAnimationStyles(currentPlacement.value, 0.5)
    const end = getZoomAnimationStyles(currentPlacement.value, 1)
    el.style.opacity = '0'
    el.style.transform = start.transform
    el.style.transformOrigin = end.transformOrigin

    enterAnimation = el.animate(
      { opacity: 1, transform: end.transform },
      { duration: props.durationEnter, easing: ANIMATION_EASING },
    )
    enterAnimation.finished
      .then(() => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.transformOrigin = ''
        enterAnimation = null
        done()
      })
      .catch(() => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.transformOrigin = ''
        enterAnimation = null
        done()
      })

    return
  }
  if (props.animation === 'opacity' || !props.animation) {
    el.style.opacity = '0'

    enterAnimation = el.animate(
      { opacity: 1 },
      { duration: props.durationEnter, easing: ANIMATION_EASING },
    )
    enterAnimation.finished
      .then(() => {
        el.style.opacity = ''
        enterAnimation = null
        done()
      })
      .catch(() => {
        el.style.opacity = ''
        enterAnimation = null
        done()
      })

    return
  }

  // в случае если передано неизвестное значение анимации
  done()
}

const onLeave = (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return

  // отмена предыдущей анимации
  if (enterAnimation) {
    enterAnimation.cancel()
    enterAnimation = null
  }

  if (props.animation === 'zoom') {
    const styles = getZoomAnimationStyles(currentPlacement.value, 0.5)
    el.style.transformOrigin = styles.transformOrigin

    leaveAnimation = el.animate(
      { opacity: 0, transform: styles.transform },
      { duration: props.durationLeave, easing: ANIMATION_EASING },
    )
    leaveAnimation.finished
      .then(() => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.transformOrigin = ''
        leaveAnimation = null
        done()
      })
      .catch(() => {
        el.style.opacity = ''
        el.style.transform = ''
        el.style.transformOrigin = ''
        leaveAnimation = null
        done()
      })

    return
  }
  if (props.animation === 'opacity' || !props.animation) {
    leaveAnimation = el.animate(
      { opacity: 0 },
      { duration: props.durationLeave, easing: ANIMATION_EASING },
    )
    leaveAnimation.finished
      .then(() => {
        el.style.opacity = ''
        leaveAnimation = null
        done()
      })
      .catch(() => {
        el.style.opacity = ''
        leaveAnimation = null
        done()
      })

    return
  }

  // fallback для неизвестной анимации
  done()
}

const getScrollableParents = () => {
  if (!rootElRef.value) return

  let currentEl = rootElRef.value.parentElement

  while (currentEl && currentEl !== document.body) {
    const overflowY = window.getComputedStyle(currentEl).overflowY
    if (overflowY === 'auto' || overflowY === 'scroll') {
      elsWithScroll.push(currentEl)
    }
    currentEl = currentEl.parentElement
  }

  elsWithScroll.push(window)
}

const handleResizeRootEl: ResizeObserverCallback = (entries) => {
  const { height, width } = entries[0].contentRect

  // предотвращение лишних вызовов (открытие меню и если размеры  не изменились)
  if (
    (sizeRootEl.value.width || sizeRootEl.value.height) &&
    (width !== sizeRootEl.value.width || height !== sizeRootEl.value.height)
  ) {
    setPositionPopup()
  }

  sizeRootEl.value = {
    height,
    width,
  }
}

const handleIntersectionRootEl: IntersectionObserverCallback = ([entry]) => {
  if (!entry) return

  const visible = entry.isIntersecting
  if (!visible && showState.value) {
    // скрывать если это не viewport
    if (
      !(entry.boundingClientRect.bottom < 0 || entry.boundingClientRect.top > window.innerHeight)
    ) {
      closePopup()
    }
  }
}

const handleResizeHeight: ResizeObserverCallback = async (entries) => {
  const { height } = entries[0].contentRect
  if (positionPopup.value.height && height !== positionPopup.value.height) {
    await setPositionPopup()
  }
  positionPopup.value.height = height
}

const toggleListeners = (action: 'add' | 'remove') => {
  if (action === 'add') {
    elsWithScroll.forEach((el) => {
      el.addEventListener('scroll', setPositionPopup, { passive: true })
    })

    resizeObserverRootEl.value = useResizeObserver(rootElRef.value, handleResizeRootEl)
    intersectionObserver.value = useIntersectionObserver(rootElRef.value, handleIntersectionRootEl)
    resizeObserverPopup.value = useResizeObserver(popupRef.value, handleResizeHeight)

    window.addEventListener('resize', setPositionPopup, { passive: true })
  } else {
    elsWithScroll.forEach((el) => {
      el.removeEventListener('scroll', setPositionPopup)
    })

    if (resizeObserverRootEl.value) {
      resizeObserverRootEl.value.stop()
      resizeObserverRootEl.value = null
      // сброс при скрытии меню, так как первичный вызов
      // setPositionPopup устанавливает актуальные размеры
      sizeRootEl.value = {
        width: 0,
        height: 0,
      }
    }

    if (resizeObserverPopup.value) {
      resizeObserverPopup.value.stop()
      resizeObserverPopup.value = null
    }

    if (intersectionObserver.value) {
      intersectionObserver.value.stop()
      intersectionObserver.value = null
    }

    window.removeEventListener('resize', setPositionPopup)
  }
}

watch(
  () => showState.value,
  (isOpen) => {
    if (props.trigger === 'click') {
      if (isOpen) {
        // при открытии popup
        document.addEventListener('click', handleDocumentClick, true)
      } else {
        // при скрытии popup
        document.removeEventListener('click', handleDocumentClick, true)
      }
    }
  },
)

watch(
  () => popupRef.value,
  (newValue, oldValue) => {
    if (newValue) {
      setPositionPopup()
      getScrollableParents()

      toggleListeners('add')
      setupPopupHoverListeners()
    } else {
      toggleListeners('remove')

      // при скрытии popup
      if (oldValue) {
        removePopupHoverListeners(oldValue)
      }

      // передача фокуса якорю при закрытии
      if (props.restoreFocus) rootElRef.value?.focus?.()
    }
  },
)

watch(
  () => rootElRef.value,
  (newValue, oldValue) => {
    // удаление обработчиков со старого элемента (не unmounted)
    if (oldValue) {
      removeTriggerListeners()
    }

    // добавление обработчиков
    if (newValue) {
      setupTriggerListeners()
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  toggleListeners('remove')
  removeTriggerListeners()
  removePopupHoverListeners()

  if (props.trigger === 'click') {
    document.removeEventListener('click', handleDocumentClick, true)
  }

  // Очищаем таймер при размонтировании
  if (props.trigger === 'hover') {
    if (showTimer) {
      clearTimeout(showTimer)
      showTimer = null
    }
    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
  }
})

defineExpose({
  close: closePopup,
  open: openPopup,
  isOpen: showState,
})
</script>
