<template>
  <div class="mx-40">
    <HomeMain :toggleThemeCreation="toggleThemeCreation"/>
    <HomeThemes :themes="themes" :themeCreation="themeCreation" :toggleThemeCreation="toggleThemeCreation" :user="user" :addTheme="addTheme" :removeTheme="removeTheme"/>
  </div>
</template>

<script>
import HomeMain from '@/components/HomeMain.vue'
import HomeThemes from '@/components/HomeThemes.vue'

export default {
  components: {
    HomeMain,
    HomeThemes
  },
  props: ['themes', 'user', 'addTheme', 'removeTheme'],
  data () {
    return {
      themeCreation: false
    }
  },
  methods: {
    toggleThemeCreation () {
      this.themeCreation = !this.themeCreation
    }
  }
}
</script>
