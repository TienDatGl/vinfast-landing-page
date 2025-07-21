<template>
  <div>
    <ui-modal :model-value="visible" :modal-class="'bg-white-main'" ref="menuRef">
      <div class="relative">
        <!-- Nút đóng -->
        <SfButton
          class="custom-button-secondary absolute -right-5 -top-8 !border-none !p-0 !text-gray-main !shadow-none lg:-right-8"
          @click="emit('close')"
        >
          <template #prefix>
            <IconClose />
          </template>
        </SfButton>

        <!-- Ảnh banner -->
        <img src="/images/vinfast_1.jpg" alt="logo" width="600" height="100" />

        <!-- Nội dung -->
        <div class="flex flex-col items-center justify-center gap-3">
          <!-- Tiêu đề -->
          <div class="flex flex-col items-center justify-center">
            <span class="text-xl uppercase text-black-main">
              {{ $t('register_drawer.car_test_drive_and_price_title') }}
            </span>
            <span class="text-base text-gray-main">
              {{ $t('register_drawer.vinfast_get_price_and_test_drive') }}
            </span>
          </div>

          <!-- Radio phương thức thanh toán -->
          <div class="flex w-full items-center justify-center">
            <label
              v-for="{ label, name, value } in radioOptions"
              :key="`${value}-${name}`"
              class="mr-6 flex cursor-pointer items-center rounded"
            >
              <SfRadio
                v-model="userData.paymentMethod"
                required
                :value="value"
                :name="name"
                class="custom-input-radio"
              />
              <span class="ml-2 text-sm font-semibold">{{ label }}</span>
            </label>
          </div>

          <!-- Form nhập liệu -->
          <div class="flex w-full flex-col gap-5 px-6">
            <SfInput v-model="userData.name" :placeholder="$t('form.full_name')" required />
            <SfInput v-model="userData.phone" :placeholder="$t('form.phone')" required />
            <SfSelect v-model="userData.car" :placeholder="$t('form.car_selected')">
              <option v-for="{ value, label } in carOptions" :key="value" :value="value">
                {{ label }}
              </option>
            </SfSelect>
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
    </ui-modal>
  </div>
</template>

<script lang="ts" setup>
import { SfButton, SfInput, SfLoaderCircular, SfRadio, SfSelect } from '@storefront-ui/vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const { t } = useI18n()
const menuRef = ref<HTMLElement | null>(null)
const loading = ref<boolean>(false)
const { cars } = useCars()
const toast = useToast()

onClickOutside(menuRef, () => {
  emit('close')
})

export interface OverlayProps {
  visible?: boolean
}

const emit = defineEmits(['close'])
defineProps<OverlayProps>()

const userData = ref({
  paymentMethod: t('register_drawer.installment'),
  name: '',
  phone: '',
  car: ''
})

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

const carOptions = computed(() =>
  cars?.value.map(car => ({
    value: car.name,
    label: car.name
  }))
)

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
    setTimeout(() => emit('close'), 200)
  }
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
