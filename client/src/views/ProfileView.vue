<template>
  <div class="my-10">
    <InformationPofil :user = "user" />
    <AccountInformation :user = "user" @update-user="$emit('update-user', $event)"/>
  </div>

</template>

<script>
import InformationPofil from '@/components/InformationPofil.vue'
import AccountInformation from '@/components/AccountInformationProfile.vue'

export default {
  props: ['user', 'connected'],
  components: {
    InformationPofil,
    AccountInformation
  }
}
</script>
