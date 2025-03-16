<template>
  <div class="my-10">
    <InformationPofil :user = "user" @update-user="$emit('update-user', $event)" />
    <AccountInformation :user = "user" @update-user="$emit('update-user', $event)" :wipeData="wipeData"/>
  </div>

</template>

<script>
import InformationPofil from '@/components/InformationPofil.vue'
import AccountInformation from '@/components/AccountInformationProfile.vue'

export default {
  props: ['user', 'connected', 'wipeData'],
  components: {
    InformationPofil,
    AccountInformation
  }
}
</script>
