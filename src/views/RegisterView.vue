<template>
  <RegisterForm :connected="connected" @update-connected="$emit('update-connected', $event)" />
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  props: {
    connected: Boolean
  },
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
</style>
