<template>
  <div class="my-10">
    <InformationPofil/>
    <AccountInformation/>
  </div>

</template>

<script>
import InformationPofil from '@/components/InformationPofil.vue'
import AccountInformation from '@/components/AccountInformationProfile.vue'

export default {
  components: {
    InformationPofil,
    AccountInformation
  }
}
</script>
