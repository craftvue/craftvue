<template>
  <Teleport :to="teleportTarget" :disabled="teleportDisabled">
    <Transition :css="false" @enter="onEnter" @leave="onLeave">
      <div v-if="showState" :class="overlayClasses" @click="onOverlayClick">
        <div ref="dialogRef" :class="dialogClasses" :style="mergedStyle" @click.stop>
          <!-- HEADER -->
          <div v-if="hasHeader" class="c-dialog__header">
            <slot
              name="header"
              :close="closeDialog"
              :toggle-fullscreen="toggleFullscreen"
              :is-fullscreen="isFullscreenActive"
              :fullscreen-icon="fullscreenIcon"
            >
              <h3 v-if="props.title" class="c-dialog__title">{{ props.title }}</h3>

              <div class="c-dialog__actions">
                <CButton
                  v-if="props.fullscreen"
                  class="c-dialog__actions__btn"
                  variant="text"
                  severity="secondary"
                  rounded
                  @click="toggleFullscreen"
                >
                  <template #iconSlot>
                    <CIcon class="c-dialog__actions__btn-icon">
                      <component :is="fullscreenIcon" />
                    </CIcon>
                  </template>
                </CButton>
                <CButton
                  v-if="props.showClose"
                  class="c-dialog__actions__btn"
                  variant="text"
                  severity="secondary"
                  rounded
                  @click="closeDialog"
                >
                  <template #iconSlot>
                    <CIcon class="c-dialog__actions__btn-icon">
                      <component :is="props.closeIcon" />
                    </CIcon>
                  </template>
                </CButton>
              </div>
            </slot>
          </div>

          <!-- BODY -->
          <div class="c-dialog__body">
            <slot />
          </div>

          <!-- FOOTER -->
          <div v-if="hasFooter" class="c-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  type Component,
  computed,
  CSSProperties,
  HTMLAttributes,
  onMounted,
  onUnmounted,
  ref,
  StyleValue,
  useAttrs,
  watch,
} from 'vue'
import { DialogClasses, DialogEmits, DialogProps, DialogSlots } from './CDialog.types'
import { CButton, CIcon } from '@/components'
import { CloseIcon, MaximizeIcon, MinimizeIcon } from '@craftvue/icons'
import { addUnit, findSingle } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs() as HTMLAttributes
const slots = defineSlots<DialogSlots>()
const emits = defineEmits<DialogEmits>()
const props = withDefaults(defineProps<DialogProps>(), {
  show: undefined,
  width: '500px',
  maxWidth: '90vw',
  maxHeight: '90vh',
  fullscreen: false,
  modal: true,
  closeOnOverlayClick: true,
  closeOnEscape: true,
  lockScroll: true,
  teleportTo: 'body',
  zIndex: 3000,
  showClose: true,
  durationEnter: 300,
  durationLeave: 300,
  animation: 'fade',
  closeIcon: () => CloseIcon,
  maximizeIcon: () => MaximizeIcon,
  minimizeIcon: () => MinimizeIcon,
})

const dialogRef = ref<HTMLElement | null>(null)
const internalShow = ref<boolean>(false)
const isFullscreen = ref<boolean>(false)
const ANIMATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

const isControlled = computed<boolean>(() => props.show !== undefined)
const showState = computed<boolean>(() => (isControlled.value ? props.show! : internalShow.value))
const teleportTarget = computed<HTMLElement | string>(() => props.teleportTo || 'body')
const teleportDisabled = computed<boolean>(() => props.teleportTo === false)
const hasHeader = computed<boolean>(() => !!(slots.header || props.title || props.showClose))
const hasFooter = computed<boolean>(() => !!slots.footer)
const fullscreenIcon = computed<Component>(() =>
  isFullscreen.value ? props.minimizeIcon : props.maximizeIcon,
)
const isFullscreenActive = computed<boolean>(() => props.fullscreen && isFullscreen.value)

const overlayClasses = computed<DialogClasses>(() => [
  'c-dialog__overlay',
  {
    'c-dialog__overlay--fullscreen': isFullscreenActive.value,
    'c-dialog__overlay--non-modal': !props.modal,
  },
])

const dialogClasses = computed<DialogClasses>(() => [
  'c-dialog',
  {
    'c-dialog--fullscreen': isFullscreenActive.value,
  },
  attrs.class,
])

const dialogStyle = computed<CSSProperties>(() => {
  if (isFullscreenActive.value) {
    return {
      width: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      maxWidth: '100vw',
      zIndex: props.zIndex,
    }
  }
  return {
    width: addUnit(props.width),
    maxHeight: addUnit(props.maxHeight),
    maxWidth: addUnit(props.maxWidth),
    zIndex: props.zIndex,
  }
})

const mergedStyle = computed<StyleValue>(() => {
  return [attrs.style, dialogStyle.value]
})

const openDialog = () => {
  if (isControlled.value) {
    emits('update:show', true)
    emits('show')
  } else {
    internalShow.value = true
    emits('show')
  }
}

const closeDialog = () => {
  if (isControlled.value) {
    emits('update:show', false)
    emits('hide')
  } else {
    internalShow.value = false
    emits('hide')
  }
}

const lockBodyScroll = () => {
  if (props.lockScroll && props.modal) {
    document.body.style.overflow = 'hidden'
  }
}

const unlockBodyScroll = () => {
  if (props.lockScroll) {
    document.body.style.overflow = ''
  }
}

const onEscapeKey = (e: KeyboardEvent) => {
  if (props.closeOnEscape && e.code === 'Escape') {
    emits('escape', e)
    closeDialog()
  }
}

const setupEscapeListener = () => {
  if (props.closeOnEscape) {
    document.addEventListener('keydown', onEscapeKey)
  }
}

const removeEscapeListener = () => {
  document.removeEventListener('keydown', onEscapeKey)
}

const getAnimationStyles = (animation: typeof props.animation, isEntering: boolean) => {
  const baseStyles: { opacity?: string; transform?: string } = {}

  if (animation === 'fade') {
    baseStyles.opacity = isEntering ? '0' : '1'
  } else if (animation === 'zoom') {
    baseStyles.opacity = isEntering ? '0' : '1'
    baseStyles.transform = isEntering ? 'scale(0)' : 'scale(1)'
  } else if (animation === 'slide') {
    baseStyles.opacity = isEntering ? '0' : '1'
    baseStyles.transform = isEntering ? 'translateY(-50px)' : 'translateY(0)'
  }

  return baseStyles
}

const onEnter = async (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return

  const wrapper = findSingle(el, '.c-dialog') as HTMLElement
  if (!wrapper) return

  // Установка начальных стилей
  const startStyles = getAnimationStyles(props.animation, true)
  Object.assign(wrapper.style, startStyles)

  const overlay = el
  overlay.style.opacity = '0'

  // Анимация диалога
  const animation = wrapper.animate(
    {
      opacity: [startStyles.opacity || '0', '1'],
      transform: [startStyles.transform || 'none', 'none'],
    },
    {
      duration: props.durationEnter,
      easing: ANIMATION_EASING,
    },
  )

  // Анимация overlay
  const overlayAnimation = overlay.animate(
    { opacity: [0, 1] },
    { duration: props.durationEnter, easing: ANIMATION_EASING },
  )

  // Сброс стилей после завершения анимации
  Promise.all([animation.finished, overlayAnimation.finished]).finally(() => {
    wrapper.style.opacity = ''
    wrapper.style.transform = ''
    overlay.style.opacity = ''
    done()
  })
}

const onLeave = (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return

  const wrapper = findSingle(el, '.c-dialog') as HTMLElement
  if (!wrapper) return

  // Начальные и конечные стили
  const startStyles = getAnimationStyles(props.animation, false)
  const endStyles = getAnimationStyles(props.animation, true)
  Object.assign(wrapper.style, startStyles)

  const overlay = el
  overlay.style.opacity = '1'

  // Анимация диалога
  const animation = wrapper.animate(
    {
      opacity: [startStyles.opacity || '1', endStyles.opacity || '0'],
      transform: [startStyles.transform || 'none', endStyles.transform || 'none'],
    },
    {
      duration: props.durationLeave,
      easing: ANIMATION_EASING,
    },
  )

  // Анимация overlay
  const overlayAnimation = overlay.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: props.durationLeave,
      easing: ANIMATION_EASING,
    },
  )

  // Сброс стилей после завершения анимации
  Promise.all([animation.finished, overlayAnimation.finished]).finally(() => {
    wrapper.style.opacity = ''
    wrapper.style.transform = ''
    overlay.style.opacity = ''
    done()
  })
}

const onOverlayClick = (event: MouseEvent) => {
  if (!props.modal) return

  if (props.closeOnOverlayClick && event.target === event.currentTarget) {
    emits('overlayClick', event)
    closeDialog()
  }
}

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  isFullscreen.value ? emits('maximize') : emits('minimize')
}

watch(
  () => showState.value,
  (isOpen) => {
    if (isOpen) {
      lockBodyScroll()
      setupEscapeListener()
    } else {
      removeEscapeListener()
      unlockBodyScroll()

      // Сбрасываем состояние fullscreen при закрытии диалога
      isFullscreen.value = false
    }
  },
)

onMounted(() => {
  if (showState.value) {
    lockBodyScroll()
    setupEscapeListener()
  }
})

onUnmounted(() => {
  removeEscapeListener()
  unlockBodyScroll()
})

defineExpose({
  open: openDialog,
  close: closeDialog,
  toggleFullscreen,
  isFullscreen: isFullscreenActive,
  isOpen: showState,
})
</script>
