<template>
  <div>
    <ui-heading-content :title="$t('home_page.vinfast_car_models')" />

    <!-- Car section -->
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="car in cars">
        <ui-car-card :key="car.slug" :car="car" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Car } from '~/types'

defineProps<{ cars: Car[] }>()
</script>

<style></style>
