<template>
  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <SfDrawer
      :model-value="isOpen"
      placement="left"
      class="flex h-screen min-w-80 flex-col items-start gap-3 bg-white-main px-4 py-2"
      ref="menuRef"
    >
      <div class="flex w-full items-center justify-end">
        <SfButton class="custom-button-secondary !border-none !p-0 !text-gray-main !shadow-none" @click="emit('close')">
          <template #prefix>
            <IconClose />
          </template>
        </SfButton>
      </div>
      <NuxtLink to="/" aria-label="Vinfast Homepage">
        <img src="/images/header/header-logo.png" alt="logo" width="200" height="50" />
      </NuxtLink>
      <nav class="flex w-full flex-nowrap items-center justify-center gap-x-1">
        <ul class="flex w-full flex-col py-1">
          <li
            v-for="({ path, labelKey, submenu }, index) in tabs"
            :key="labelKey"
            :class="[
              'relative flex w-full cursor-pointer flex-col items-start justify-start gap-1 border border-x-0 border-t-0 p-[10px] py-4 text-sm font-normal !text-gray-main hover:!text-blue-attr',
              index !== tabs.length - 1 ? 'border-b-gray-attr' : 'border-b-0'
            ]"
            @click="submenu?.length ? toggleSubmenu(labelKey) : emit('close')"
          >
            <!-- Normal link -->
            <NuxtLink v-if="!submenu.length" :to="path">
              <SfListItem class="z-50 !bg-white-main !p-0">
                {{ $t(labelKey) }}
              </SfListItem>
            </NuxtLink>

            <!-- Dropdown -->
            <span v-else>
              <SfListItem class="z-50 !bg-white-main !p-0">
                {{ $t(labelKey) }}
              </SfListItem>
            </span>
            <ul v-if="submenu && activeSubmenu === labelKey" class="w-full">
              <li v-for="subItem in submenu" :key="subItem.labelKey" class="w-full py-2 text-sm" @click="emit('close')">
                <NuxtLink :to="subItem.path" class="block w-full">
                  {{ $t(subItem.labelKey) }}
                </NuxtLink>
              </li>
            </ul>

            <IconArrow
              v-if="submenu.length"
              class="absolute right-0"
              :class="activeSubmenu === labelKey ? 'rotate-180' : ''"
            />
          </li>
        </ul>
      </nav>
    </SfDrawer>
  </transition>
</template>

<script lang="ts" setup>
import { SfButton, SfDrawer } from '@storefront-ui/vue'
const menuRef = ref<HTMLElement | null>(null)
const emit = defineEmits(['close'])
const activeSubmenu = ref(null)
const toggleSubmenu = (labelKey: any) => {
  activeSubmenu.value = activeSubmenu.value === labelKey ? null : labelKey
}
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
const { cars } = useCars()
onClickOutside(menuRef, () => {
  emit('close')
})

const car_list = computed(() =>
  cars?.value.map(car => ({
    path: `/san-pham/${car.slug}`,
    labelKey: car.name
  }))
)

const tabs = [
  {
    path: '/',
    labelKey: 'header.home_page',
    submenu: []
  },
  {
    path: '/',
    labelKey: 'header.vinfast_car',
    submenu: car_list.value
  },
  {
    path: '/',
    labelKey: 'header.battery_and_charging_station',
    submenu: []
  },
  {
    path: '/',
    labelKey: 'header.news',
    submenu: []
  },
  {
    path: '/lien-he',
    labelKey: 'header.contact',
    submenu: []
  }
]
</script>

<style></style>
