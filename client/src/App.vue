<template>
  <MainHeader :connected="connected" @update-connected="updateConnected"  :user = "user" @update-user="updateUser"/>
  <router-view :connected="connected" @update-connected="updateConnected" :user = "user" @update-user="updateUser" :themes="themes" :addTheme="addTheme" :removeTheme="removeTheme"/>
  <MainFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import UserDataService from '@/services/UserDataService'
import ThemeDataService from '@/services/ThemeDataService'
// import { mapGetters } from 'vuex'
export default {
  components: {
    MainHeader,
    MainFooter
  },
  mounted () {
    let check = true
    UserDataService.auth()
      .then(response => {
        console.log('User authentic :', response.data)
        this.user = response.data
        this.connected = true
        console.log('this.data dans App.vue : ', this.user)
        console.log(response.data)
        check = false

        ThemeDataService.findAll(this.user.id)
          .then(response => {
            this.themes = response.data
            console.log('themes found :', this.themes)
            console.log('other stuff :', this.themes.length)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(() => {
        console.log('User non authenticated')
        this.connected = false
        this.user = {}
        this.$router.push('/')
      })
    if (check) {
      ThemeDataService.findAll(this.user.id)
        .then(response => {
          this.themes = response.data
          console.log('themes found :', this.themes)
          console.log('other stuff :', this.themes.length)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  data () {
    return {
      user: {},
      connected: false,
      themes: []
    }
  },
  methods: {
    updateUser (updatedUser) {
      console.log('dans updateUser : ', updatedUser)
      this.user = updatedUser.user ? updatedUser.user : updatedUser
      UserDataService.updateUser(this.user.id, this.user)
        .then(response => {
          console.log('User updated successfully:', response.data)
        })
        .catch(error => {
          console.error('Error updating user:', error)
        })
    },
    updateConnected (status) {
      console.log('update of "connected" :', status)
      this.connected = status
    },
    addTheme (theme, toggleThemeCreation) {
      console.log('create theme ', theme)
      this.themes.unshift(theme)
      toggleThemeCreation()
    },
    removeTheme (index) {
      this.themes.splice(index, 1)
    }
  }
}
</script>
