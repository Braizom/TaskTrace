<template>
  <div class="my-10">
    <SettingsParameters :user = "user" @update-user="$emit('update-user', $event)" :toggleStyle="toggleStyle" :setStyle="setStyle"/>
  </div>

</template>

<script>
import SettingsParameters from '@/components/SettingsParameters.vue'

export default {
  props: ['user', 'toggleStyle', 'setStyle'],
  components: {
    SettingsParameters
  }
}
</script>
