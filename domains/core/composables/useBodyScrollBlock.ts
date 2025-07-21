export const useBodyScrollLock = () => {
  const lock = () => {
    document.body.classList.add('overflow-hidden', 'fixed', 'w-full')
  }

  const unlock = () => {
    document.body.classList.remove('overflow-hidden', 'fixed', 'w-full')
  }

  const isLocked = computed(() => document.body.classList.contains('overflow-hidden'))

  return { lock, unlock, isLocked }
}