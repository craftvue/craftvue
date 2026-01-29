<template>
  <div class="overview">
    <CInput
      v-model="search"
      :placeholder="t('overview.searchPlaceholder')"
      size="lg"
      :prefix-icon="SearchIcon"
      class="overview-input"
      @update:model-value="searchByTitle"
    />

    <div
      v-for="group in filteredComponents"
      :key="group.name"
      class="overview__group"
    >
      <div class="overview__group-head">
        <h1 class="overview__group-title">
          {{ t(`overview.categories.${group.name}`) }}
        </h1>
        <CBadge :value="group.items.length" size="lg" />
      </div>
      <ul class="group__list">
        <li
          v-for="component in group.items"
          :key="component.title"
          class="group__item"
        >
          <a :href="`${BASE_PATH}${component.path}`" class="group__link">
            <h1 class="group__item-title">
              {{ component.title }}
            </h1>
            <div class="group__item-content">
              <img
                :src="getImageUrl('components', component.image)"
                :alt="t('overview.componentAlt')"
                class="group__item-img"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CBadge, CInput } from 'craftvue'
import SearchIcon from '@craftvue/icons/search'
import { getImageUrl } from 'docs/utils'
import { ref } from 'vue'
import { BASE_PATH } from 'docs/constants'
import { useI18n } from 'docs/composables/useI18n'

interface Component {
  title: string
  image: string
  path: string
}

interface ComponentCategory {
  name: string
  items: Component[]
}

const { t } = useI18n()

const search = ref<string>('')
const components = ref<ComponentCategory[]>([
  {
    name: 'basic',
    items: [
      {
        title: 'Button',
        image: 'button.png',
        path: '/?path=/docs/basic-button--docs',
      },
      {
        title: 'Icon',
        image: 'icon.png',
        path: '/?path=/docs/basic-icon--docs',
      },
    ],
  },
  {
    name: 'form',
    items: [
      {
        title: 'Input',
        image: 'input.png',
        path: '/?path=/docs/form-input--docs',
      },
      {
        title: 'FormItem',
        image: 'formitem.png',
        path: '/?path=/docs/form-formitem--docs',
      },
      {
        title: 'Select',
        image: 'select.png',
        path: '/?path=/docs/form-select--docs',
      },
      {
        title: 'Checkbox',
        image: 'checkbox.png',
        path: '/?path=/docs/form-checkbox--docs',
      },
      {
        title: 'Radio',
        image: 'radio.png',
        path: '/?path=/docs/form-radio--docs',
      },
      {
        title: 'Switch',
        image: 'switch.png',
        path: '/?path=/docs/form-switch--docs',
      },
    ],
  },
  {
    name: 'data',
    items: [
      {
        title: 'Badge',
        image: 'badge.png',
        path: '/?path=/docs/data-badge--docs',
      },
      { title: 'Tag', image: 'tag.png', path: '/?path=/docs/data-tag--docs' },
    ],
  },
  {
    name: 'navigation',
    items: [
      {
        title: 'Tabs',
        image: 'tabs.png',
        path: '/?path=/docs/navigation-tabs--docs',
      },
      {
        title: 'Dropdown',
        image: 'dropdown.png',
        path: '/?path=/docs/navigation-dropdown--docs',
      },
    ],
  },
  {
    name: 'feedback',
    items: [
      {
        title: 'Tooltip',
        image: 'tooltip.png',
        path: '/?path=/docs/feedback-tooltip--docs',
      },
      {
        title: 'ConfirmDialog',
        image: 'confirmdialog.png',
        path: '/?path=/docs/feedback-confirmdialog--docs',
      },
      {
        title: 'ConfirmPopup',
        image: 'confirmpopup.png',
        path: '/?path=/docs/feedback-confirmpopup--docs',
      },
      {
        title: 'Dialog',
        image: 'dialog.png',
        path: '/?path=/docs/feedback-dialog--docs',
      },
      {
        title: 'Popover',
        image: 'popover.png',
        path: '/?path=/docs/feedback-popover--docs',
      },
    ],
  },
])
const filteredComponents = ref<ComponentCategory[]>([...components.value])

const searchByTitle = (value: string) => {
  filteredComponents.value = []
  components.value.forEach((group) => {
    const filteredItems = group.items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    )

    if (filteredItems.length) {
      filteredComponents.value.push({
        name: group.name,
        items: [...filteredItems],
      })
    }
  })
}
</script>

<style scoped lang="scss">
.overview-input {
  width: 100%;
  margin-bottom: 30px;
}

.overview {
  &__group {
    margin-bottom: 30px;
  }

  &__group-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__group-title {
    font-size: 28px;
    font-weight: 500;
  }
}
.group {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 240px;
    gap: 20px;
  }

  &__item {
    overflow: hidden;
    border: 1px solid #414141;
    border-radius: 8px;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;

    &:hover {
      border-color: var(--prime-color);
      box-shadow: 0 0 10px #525252;
    }
  }

  &__link {
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    border-bottom: 1px solid #414141;
    padding: 10px;
    background-color: #262626;
  }

  &__item-content {
    flex-grow: 1;
    position: relative;
  }

  &__item-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
