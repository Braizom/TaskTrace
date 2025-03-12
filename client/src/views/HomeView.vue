<template>
  <div class="mx-40">
    <HomeMain :toggleThemeCreation="toggleThemeCreation"/>
    <HomeThemes :themes="themes" :themeCreation="themeCreation" :toggleThemeCreation="toggleThemeCreation" :createTheme="createTheme"/>
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
  props: ['themes', 'createTheme', 'createList', 'createElement'],
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
