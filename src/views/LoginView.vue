<template>
  <LoginForm :connected="connected" @update-connected="$emit('update-connected', $event)" />
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  props: {
    connected: Boolean
  },
  components: {
    LoginForm
  }
}
</script>
