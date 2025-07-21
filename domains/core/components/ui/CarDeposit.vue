<template>
  <div
    class="items- flex w-full flex-col justify-center rounded-md p-5  md:flex-row"
  >
    <!-- Image -->
    <NuxtImg :alt="carName" :src="carImage" width="500" height="500" />
    <!-- Content -->
    <div class="flex flex-1 flex-col items-center justify-center gap-3">
      <!-- Tiêu đề -->
      <div class="flex flex-col items-center justify-center">
        <span class="uppercase text-black-main typography-display-3">
          {{ $t('detail.purchase_deposit') }} {{ carName }}
        </span>
          <span class="  font-medium text-blue-main typography-headline-3" data-testid="price">
            {{ $t('detail.price_from') }}: {{ formatterVND.format(carPrice) }}
          </span>
      </div>

      <!-- Radio phương thức thanh toán -->
      <div class="flex w-full items-center justify-center">
        <label
          v-for="{ label, name, value } in radioOptions"
          :key="`${value}-${name}`"
          class="mr-6 flex cursor-pointer items-center rounded"
        >
          <SfRadio v-model="userData.paymentMethod" required :value="value" :name="name" class="custom-input-radio" />
          <span class="ml-2 text-sm font-semibold">{{ label }}</span>
        </label>
      </div>

      <!-- Form nhập liệu -->
      <div class="flex w-full flex-col gap-5 px-6">
        <SfInput v-model="userData.name" :placeholder="$t('form.full_name')" required />
        <SfInput v-model="userData.phone" :placeholder="$t('form.phone')" required />
        <SfButton class="custom-button-main !rounded-lg !py-3 !uppercase" @click="submitForm" :disabled="loading">
          {{ $t('form.send_request_now') }}

          <template #prefix>
            <SfLoaderCircular v-if="loading" :spin="true" />
          </template>
        </SfButton>
        <span v-if="successMessage" class="text-green-600 text-center">{{ successMessage }}</span>
        <span v-if="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton, SfInput, SfLoaderCircular, SfRadio } from '@storefront-ui/vue'

const props = defineProps<{
  carImage: string
  carName: string
  carPrice: number
}>()

const { t } = useI18n()
const loading = ref<boolean>(false)
const toast = useToast()
const radioOptions = [
  {
    label: t('register_drawer.installment'),
    value: t('register_drawer.installment'),
    name: 'payment_method'
  },
  {
    label: t('register_drawer.pay_all'),
    value: t('register_drawer.pay_all'),
    name: 'payment_method'
  }
]

const userData = ref({
  paymentMethod: t('register_drawer.installment'),
  name: '',
  phone: '',
  car: props.carName
})

const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  loading.value = true

  if (!userData.value.name || !userData.value.phone) {
    errorMessage.value = 'Vui lòng điền đầy đủ thông tin.'
    return
  }

  try {
    const res = await $fetch('/api/sendMail', {
      method: 'POST',
      body: {
        name: userData.value.name,
        phone: userData.value.phone,
        carModel: userData.value.car,
        paymentMethod: userData.value.paymentMethod
      }
    })

    if (res.success) {
      toast.success({
        message: t('register_drawer.send_email_success'),
        timeout: 4000,
        position: 'topRight'
      })
    }
  } catch (err) {
    toast.error({
      message: t('register_drawer.send_email_fail'),
      timeout: 4000,
      position: 'topRight'
    })
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style></style>
