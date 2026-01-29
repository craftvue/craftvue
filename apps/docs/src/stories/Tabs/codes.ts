import type { TabsStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const generateTabs = "Array.from({ length: 50 }, (_, i) => ({title: `Tab ${i}`,content: `Content ${i}`,value: `${i}`,}))"

const tabsCodeTexts: CodeTexts<TabsStoryName> = {
  basic: {
    simple: `
      <CTabs value="1">
        <CTabList>
          <CTab value="1">Header 1</CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CTabPanel>
          <CTabPanel value="2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </CTabPanel>
          <CTabPanel value="3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="1">
          <CTabList>
            <CTab value="1">Header 1</CTab>
            <CTab value="2">Header 2</CTab>
            <CTab value="3">Header 3</CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel value="1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CTabPanel>
            <CTabPanel value="2">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </CTabPanel>
            <CTabPanel value="3">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup></script>
    `,
  },
  vertical: {
    simple: `
      <CTabs value="1" orientation="vertical">
        <CTabList>
          <CTab value="1">Header 1</CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CTabPanel>
          <CTabPanel value="2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </CTabPanel>
          <CTabPanel value="3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="1" orientation="vertical">
          <CTabList>
            <CTab value="1">Header 1</CTab>
            <CTab value="2">Header 2</CTab>
            <CTab value="3">Header 3</CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel value="1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CTabPanel>
            <CTabPanel value="2">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </CTabPanel>
            <CTabPanel value="3">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup></script>
    `,
  },
  dynamic: {
    simple: `
      <CTabs value="0">
        <CTabList>
          <CTab
            v-for="tab in tabs"
            :key="tab.title"
            :value="tab.value"
          >
            {{ tab.title }}
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            v-for="tab in tabs"
            :key="tab.content"
            :value="tab.value"
          >
            {{ tab.content }}
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="0">
          <CTabList>
            <CTab
              v-for="tab in tabs"
              :key="tab.title"
              :value="tab.value"
            >
              {{ tab.title }}
            </CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel
              v-for="tab in tabs"
              :key="tab.content"
              :value="tab.value"
            >
              {{ tab.content }}
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup>
        import { ref } from 'vue'

        const tabs = ref([
          { title: 'Tab 1', content: 'Content 1', value: '0' },
          { title: 'Tab 2', content: 'Content 2', value: '1' },
          { title: 'Tab 3', content: 'Content 3', value: '2' },
        ])
      </script>
    `,
  },
  template: {
    simple: `
      <CTabs value="1">
        <CTabList>
          <CTab value="1" as="div">
            <CIcon name="home" :size="20" />
            <p>Home</p>
          </CTab>
          <CTab value="2" as="div">
            <CIcon name="envelope" :size="20" />
            <p>Email</p>
          </CTab>
          <CTab
            value="3"
            asChild
            v-slot="{tabClasses, onClick, a11yAttrs}"
          >
            <div :class="tabClasses" @click="onClick" v-bind="a11yAttrs">
              <CIcon name="save" :size="20" />
              <p>Downloads</p>
            </div>
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1" as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CTabPanel>
          <CTabPanel value="2" as="p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </CTabPanel>
          <CTabPanel value="3" asChild v-slot="{ active, a11yAttrs, tabpanelClasses }">
            <div v-show="active" v-bind="a11yAttrs" :class="tabpanelClasses">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </div>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="1">
          <CTabList>
            <CTab
              value="1"
              style="display: flex; align-items: center; gap: 7px;"
              as="div"
            >
              <CIcon name="home" :size="20" />
              <p>Home</p>
            </CTab>
            <CTab
              value="2"
              style="display: flex; align-items: center; gap: 7px;"
              as="div"
            >
              <CIcon name="envelope" :size="20" />
              <p>Email</p>
            </CTab>
            <CTab
              value="3"
              style="display: flex; align-items: center; gap: 7px;"
              asChild
              v-slot="{tabClasses, onClick, a11yAttrs}"
            >
              <div :class="tabClasses" @click="onClick" v-bind="a11yAttrs" style="display: flex; align-items: center; gap: 7px;">
                <CIcon name="save" :size="20" />
                <p>Downloads</p>
              </div>
            </CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel value="1" as="p">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CTabPanel>
            <CTabPanel value="2" as="p">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </CTabPanel>
            <CTabPanel value="3" asChild v-slot="{ active, a11yAttrs, tabpanelClasses }">
              <div v-show="active" v-bind="a11yAttrs" :class="tabpanelClasses">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
              </div>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup></script>
    `,
  },
  controlled: {
    simple: `
      <div>
        <CButton @click="value = '1'" label="1" rounded :severity="value === '1' ? 'primary' : 'secondary'" />
        <CButton @click="value = '2'" label="2" rounded :severity="value === '2' ? 'primary' : 'secondary'" />
        <CButton @click="value = '3'" label="3" rounded :severity="value === '3' ? 'primary' : 'secondary'" />
      </div>

      <CTabs v-model:value="value">
        <CTabList>
          <CTab value="1">Header 1</CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CTabPanel>
          <CTabPanel value="2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </CTabPanel>
          <CTabPanel value="3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 7px; justify-content: end;">
          <CButton @click="value = '1'" label="1" rounded style="width: 40px; height: 40px;" :severity="value === '1' ? 'primary' : 'secondary'" />
          <CButton @click="value = '2'" label="2" rounded style="width: 40px; height: 40px;" :severity="value === '2' ? 'primary' : 'secondary'" />
          <CButton @click="value = '3'" label="3" rounded style="width: 40px; height: 40px;" :severity="value === '3' ? 'primary' : 'secondary'" />
        </div>

        <CTabs v-model:value="value">
          <CTabList>
            <CTab value="1">Header 1</CTab>
            <CTab value="2">Header 2</CTab>
            <CTab value="3">Header 3</CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel value="1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CTabPanel>
            <CTabPanel value="2">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </CTabPanel>
            <CTabPanel value="3">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup>
        import { ref } from 'vue'

        const value = ref('1')
      </script>
    `,
  },
  scrollable: {
    simple: `
      <CTabs value="0">
        <CTabList>
          <CTab
            v-for="tab in tabs"
            :key="tab.title"
            :value="tab.value"
          >
            {{ tab.title }}
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            v-for="tab in tabs"
            :key="tab.content"
            :value="tab.value"
          >
            <p>{{ tab.content }}</p>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="0">
          <CTabList>
            <CTab
              v-for="tab in tabs"
              :key="tab.title"
              :value="tab.value"
            >
              {{ tab.title }}
            </CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel
              v-for="tab in tabs"
              :key="tab.content"
              :value="tab.value"
            >
              <p>{{ tab.content }}</p>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup>
        import { ref } from "vue"

        const tabs = ref(${generateTabs})
      </script>
    `,
  },
  disabled: {
    simple: `
      <CTabs value="2">
        <CTabList>
          <CTab value="1" disabled>Header 1</CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CTabPanel>
          <CTabPanel value="2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </CTabPanel>
          <CTabPanel value="3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs value="1">
          <CTabList>
            <CTab value="1" disabled>Header 1</CTab>
            <CTab value="2">Header 2</CTab>
            <CTab value="3">Header 3</CTab>
          </CTabList>
          <CTabPanels>
            <CTabPanel value="1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CTabPanel>
            <CTabPanel value="2">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </CTabPanel>
            <CTabPanel value="3">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </CTabPanel>
          </CTabPanels>
        </CTabs>
      </template>
      <script setup></script>
    `,
  },
  navigation: {
    simple: `
      <CTabs :value="activeRoute">
        <CTabList>
          <CTab
            v-for="tab in menuItems"
            v-slot="{ tabClasses, a11yAttrs, onClick }"
            :key="tab.label"
            :value="tab.route"
          >
            <a
              v-bind="a11yAttrs"
              :class="tabClasses"
              @click="onClick"
            >
              <CIcon :name="tab.icon" :size="20" />
              {{ tab.label }}
            </a>
          </CTab>
        </CTabList>
      </CTabs>
    `,
    full: `
      <template>
        <CTabs :value="activeRoute">
          <CTabList>
            <CTab
              v-for="tab in menuItems"
              v-slot="{ tabClasses, a11yAttrs, onClick }"
              :key="tab.label"
              :value="tab.route"
            >
              <a
                v-bind="a11yAttrs"
                :class="tabClasses"
                @click="onClick"
                style="display: flex; align-items: center; gap: 7px;"
              >
                <CIcon :name="tab.icon" :size="20" />
                {{ tab.label }}
              </a>
            </CTab>
          </CTabList>
        </CTabs>
      </template>
      <script setup>
        import { ref } from "vue"

        const activeRoute = ref('HomePage')

        interface MenuItem {
          label: string
          icon: string
          route: string
        }

        const menuItems = ref<MenuItem[]>([
          { label: 'Home', icon: 'home', route: 'HomePage' },
          { label: 'Catalog', icon: 'search', route: 'CatalogPage' },
          { label: 'Contacts', icon: 'envelope', route: 'ContactsPage' },
          { label: 'Delivery', icon: 'check', route: 'DeliveryPage' },
          { label: 'Payment', icon: 'save', route: 'PaymentPage' },
        ])
      </script>
    `,
  },
}

export default tabsCodeTexts
