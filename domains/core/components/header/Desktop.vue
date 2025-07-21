<template>
  <div>
    <header
      class="text-white z-50 flex w-full flex-col flex-wrap border-0 border-neutral-200 bg-white-main md:z-10 md:flex-nowrap md:shadow-md"
    >
      <div class="narrow-container flex h-full w-full items-center justify-between gap-[50px] py-[10px]">
        <NuxtLink to="/" aria-label="Vinfast Homepage">
          <img src="/images/header/header-logo.png" alt="logo" width="200" height="50" />
        </NuxtLink>

        <!-- Menu -->
        <nav class="flex flex-nowrap items-center justify-end gap-x-1">
          <ul class="flex py-1">
            <li
              v-for="({ path, labelKey, dropdown }, index) in tabs"
              :key="labelKey"
              class="relative flex !cursor-pointer items-center justify-start gap-1 rounded-md px-[10px] py-1 text-sm font-normal !text-gray-main hover:!text-blue-attr"
              :class="index === tabs.length - 1 ? 'rounded-none border border-y-0 border-l-0 border-r-gray-attr' : ''"
            >
              <NuxtLink :to="path">
                <!-- Dropdown menu -->
                <SfDropdown v-if="dropdown" v-model="isOpen">
                  <template #trigger>
                    <SfListItem @click="toggle()" class="z-50 !bg-white-main !p-0">
                      {{ $t(labelKey) }}
                    </SfListItem>
                  </template>

                  <ul class="border-gray-secondary mt-3 rounded border bg-white-main py-2 !text-gray-main shadow-md min-w-[200px]">
                    <li
                      v-for="car in cars"
                      :key="car.slug"
                      class="px-5 py-2 hover:!text-blue-attr hover:!underline"
                      @click="() => toggle()"
                    >
                      <NuxtLink :to="`/san-pham/${car.slug}`">
                        <SfListItem class="z-50 !bg-white-main !p-0">
                          {{ car.name }}
                        </SfListItem>
                      </NuxtLink>
                    </li>
                  </ul>
                </SfDropdown>

                <!-- other menu -->
                <SfListItem v-else class="z-50 !bg-white-main !p-0">
                  {{ $t(labelKey) }}
                </SfListItem>
              </NuxtLink>
            </li>
          </ul>
          <SfButton @click="open" class="custom-button-main mx-2">{{ $t('header.sign_up') }}</SfButton>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { SfButton, SfDropdown, SfListItem, useDisclosure } from '@storefront-ui/vue'
const { isOpen, toggle } = useDisclosure()
const { cars } = useCars()
const { open } = useRegister()



const tabs = [
  {
    path: '/',
    labelKey: 'header.home_page',
    dropdown: false
  },
  {
    path: '/',
    labelKey: 'header.vinfast_car',
    dropdown: true
  },
  {
    path: '/',
    labelKey: 'header.battery_and_charging_station',
    dropdown: false
  },
  {
    path: '/',
    labelKey: 'header.news',
    dropdown: false
  },
  {
    path: '/lien-he',
    labelKey: 'header.contact',
    dropdown: false
  }
]

</script>
