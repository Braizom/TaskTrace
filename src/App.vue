<template>
  <Header/>
  <router-view/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  components: {
    Header: MainHeader
  }
}
</script>
