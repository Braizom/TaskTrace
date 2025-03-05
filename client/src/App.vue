<template>
  <MainHeader :connected="connected" @update-connected="updateConnected"/>
  <router-view :connected="connected" @update-connected="updateConnected" :themes="contents" />
  <MainFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import contents from '@/contents.json'

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data () {
    return {
      connected: false,
      contents: contents
    }
  },
  methods: {
    updateConnected (status) {
      console.log('update of "connected" :', status)
      this.connected = status
    }
  }
}
</script>
