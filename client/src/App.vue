<template>
  <MainHeader :connected="connected" @update-connected="updateConnected"  :user = "user" @update-user="updateUser" :themes="contents"/>
  <router-view :connected="connected" @update-connected="updateConnected" :user = "user" @update-user="updateUser" :themes="contents" />
  <MainFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import contents from '@/contents.json'
import UserDataService from '@/services/UserDataService'
// import { mapGetters } from 'vuex'
export default {
  components: {
    MainHeader,
    MainFooter
  },
  mounted () {
    UserDataService.auth()
      .then(response => {
        console.log('User authentic :', response.data)
        this.user = response.data
        this.connected = true
        console.log('this.data dans App.vue : ', this.user)
        console.log(response.data)
      })
      .catch(() => {
        console.log('User non authenticated')
        this.connected = false
        this.user = {}
        this.$router.push('/')
      })
  },
  data () {
    return {
      user: {},
      connected: false,
      contents: contents
    }
  },
  methods: {
    updateUser (updatedUser) {
      console.log('dans updateUser : ', updatedUser)
      this.user = updatedUser.user ? updatedUser.user : updatedUser
    },
    updateConnected (status) {
      console.log('update of "connected" :', status)
      this.connected = status
    }
  }
}
</script>
