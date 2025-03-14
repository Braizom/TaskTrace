<template>
  <div class="my-10">
    <SettingsParameters :user = "user" @update-user="$emit('update-user', $event)"/>
  </div>

</template>

<script>
import SettingsParameters from '@/components/SettingsParameters.vue'

export default {
  props: ['user'],
  components: {
    SettingsParameters
  }
}
</script>
