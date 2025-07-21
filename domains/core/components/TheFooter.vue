<template>
  <footer class="bg-black-secondary pt-10">
    <div class="narrow-container grid grid-cols-1 justify-center gap-y-4 md:grid-cols-3">
      <!-- Logo section -->
      <NuxtLink to="/" aria-label="Sf Homepage" class="flex justify-center md:justify-start">
        <img src="/images/vinfast-logo-vertical.png" alt="logo" width="200" height="150" />
      </NuxtLink>

      <!-- Category list -->
      <ul v-for="{ label, subcategories } in categories" :key="label" class="grid grid-cols-1">
        <li class="mb-3 ml-4 font-body text-xl font-semibold uppercase leading-7 text-white-main">
          {{ label }}
        </li>
        <SfListItem
          v-for="{ subcategoryLabel, link } in subcategories"
          :key="subcategoryLabel"
          class="typography-text-sm !cursor-text !bg-transparent !py-0 font-body font-normal text-white-main"
        >
          {{ subcategoryLabel }}
        </SfListItem>
      </ul>
    </div>
    <hr />

    <div class="narrow-container justify-end bg-black-secondary px-4 py-10 md:flex md:py-6">
      <div class="flex justify-center gap-x-4 py-2 md:self-start">
        <SfButton
          v-for="{ label, link, icon } in socialMedia"
          :key="label"
          tag="a"
          square
          variant="tertiary"
          class="hover:text-white hover:!bg-neutral-500 active:!bg-transparent active:text-white-main"
          :href="link"
          :aria-label="`Go to ${label} page`"
        >
          <component :is="icon" class="fill-white-main" />
        </SfButton>
      </div>
      <div class="my-4 flex items-center justify-center gap-6 py-2 md:my-0 md:ml-auto">
        <SfLink
          v-for="{ label, link } in bottomLinks"
          :key="label"
          variant="secondary"
          class="typography-text-sm active:text-white hover:text-white text-white-main no-underline hover:underline active:underline"
          :href="link"
        >
          {{ label }}
        </SfLink>
      </div>
      <p
        class="typography-text-sm flex items-center justify-center py-2 text-center font-body leading-5 text-white-main/50 md:ml-6"
      >
        @{{ currentYear }} {{ $t('common.vinfast_danang') }}
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import {
  SfIconFacebook,
  SfIconYoutube,
  SfButton,
  SfLink,
  SfListItem
} from '@storefront-ui/vue'
const { t } = useI18n()

const currentYear = new Date().getFullYear()

const categories = [
  {
    label: t('footer.vinfast_vietnam'),
    subcategories: [
      {
        subcategoryLabel: t('footer.vinfast_showroom'),
        link: ''
      },
      {
        subcategoryLabel: t('footer.showroom_address'),
        link: ''
      }
    ]
  },
  {
    label: t('footer.customer_support'),
    subcategories: [
      {
        subcategoryLabel: `${t('common.hotline')}: ${t('common.phone_number')}`,
        link: ''
      },
      {
        subcategoryLabel: `${t('common.email')}: ${t('common.phone_number')}`,
        link: ''
      }
    ]
  }
]
const socialMedia = [
  {
    label: 'Facebook',
    link: '#',
    icon: SfIconFacebook
  },
  {
    label: 'Youtube',
    link: '#',
    icon: SfIconYoutube
  }
]

const bottomLinks = [
  {
    label: 'Terms',
    link: '#'
  },
  {
    label: 'Privacy policy',
    link: '#'
  }
]

</script>
