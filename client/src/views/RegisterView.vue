<template>
  <RegisterForm :user="user" :connected="connected" @update-connected="$emit('update-connected', $event)" @update-user="$emit('update-user', $event)" />
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  props: ['user', 'connected'],
  components: {
    RegisterForm
  }
}
</script>
