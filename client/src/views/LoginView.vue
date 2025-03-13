<template>
  <LoginForm :connected="connected" @update-connected="$emit('update-connected', $event)" :user = "user" @update-user="$emit('update-user', $event)" />
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  props: ['user', 'connected'],
  components: {
    LoginForm
  }
}
</script>
