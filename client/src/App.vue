<template>
  <div :class="style">
    <div class="bg-white dark:bg-gray-900 flex flex-col min-h-screen">
      <MainHeader :connected="connected" @update-connected="updateConnected"  :user = "user" @update-user="updateUser"/>
      <router-view class="mb-20" :connected="connected" @update-connected="updateConnected" :user = "user" @update-user="updateUser" :themes="themes" :addTheme="addTheme" :removeTheme="removeTheme" :toggleStyle="toggleStyle" :wipeData="wipeData"/>
      <MainFooter/>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import UserDataService from '@/services/UserDataService'
import ThemeDataService from '@/services/ThemeDataService'
import ListDataService from '@/services/ListDataService'
import ElementDataService from '@/services/ElementDataService'
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
        this.showContents(response.data.id)
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
      themes: [],
      style: ''
    }
  },
  methods: {
    updateUser (updatedUser) {
      console.log('dans updateUser : ', updatedUser)
      this.user = updatedUser.user ? updatedUser.user : updatedUser
      UserDataService.updateUser(this.user.id, this.user)
        .then(response => {
          console.log('User updated successfully:', response.data)
          this.showContents(response.data.id)
        })
        .catch(error => {
          console.error('Error updating user:', error)
        })
    },
    updateConnected (status) {
      console.log('update of "connected" :', status)
      this.connected = status
    },
    showContents (id) {
      ThemeDataService.findAll(id)
        .then(data => {
          this.themes = data.data
          this.themes.forEach(theme => {
            ListDataService.findAll(theme.id)
              .then(data => {
                theme.lists = data.data
                theme.lists.forEach(list => {
                  ElementDataService.findAll(list.id)
                    .then(data => {
                      list.elems = data.data
                      list.elems = list.elems.reverse()
                    })
                    .catch(error => {
                      console.log(error)
                    })
                })
                theme.lists = theme.lists.reverse()
              })
              .catch(error => {
                console.log(error)
              })
          })
          this.themes = this.themes.reverse()
          console.log(this.themes)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTheme (theme, toggleThemeCreation) {
      this.themes.unshift(theme)
      toggleThemeCreation()
    },
    removeTheme (index) {
      this.themes.splice(index, 1)
    },
    wipeData () {
      this.themes.splice(0, this.themes.length)
    },
    toggleStyle (style) {
      this.style = style
    }
  }
}
</script>
