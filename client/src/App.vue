<template>
  <div :class="style">
    <div class="bg-white dark:bg-gray-900 flex flex-col min-h-screen">
      <MainHeader :connected="connected" @update-connected="updateConnected"  :user = "user" @update-user="updateUser" :setStyle="setStyle"/>
      <router-view class="mb-20" :connected="connected" @update-connected="updateConnected" :user = "user" @update-user="updateUser" :themes="themes" :addTheme="addTheme" :removeTheme="removeTheme" :toggleStyle="toggleStyle" :wipeData="wipeData" :setStyle="setStyle"/>
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
export default {
  components: {
    MainHeader,
    MainFooter
  },
  mounted () {
    UserDataService.auth()
      .then(response => {
        this.user = response.data
        this.connected = true
        this.showContents(response.data.id)
        this.style = response.data.theme
        this.toggleStyle(this.style)
      })
      .catch(() => {
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
      this.user = updatedUser.user ? updatedUser.user : updatedUser
      UserDataService.updateUser(this.user.id, this.user)
        .then(response => {
          this.showContents(response.data.user.id)
          this.style = response.data.user.theme
        })
        .catch(error => {
          console.error('Error updating user:', error)
        })
    },
    updateConnected (status) {
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
      this.showContents(this.user.id)
    },
    toggleStyle (style) {
      this.style = style
      this.user.theme = style
      this.updateUser(this.user)
    },
    setStyle (style) {
      this.style = style
    }
  }
}
</script>
