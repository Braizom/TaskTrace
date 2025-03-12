<template>
  <div class="mx-40">
    <HomeMain :toggleThemeCreation="toggleThemeCreation"/>
    <HomeThemes :themes="themes" :createTheme="createTheme" :toggleThemeCreation="toggleThemeCreation"/>
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
  props: ['themes'],
  data () {
    return {
      createTheme: false
    }
  },
  methods: {
    toggleThemeCreation () {
      this.createTheme = !this.createTheme
    }
  }
}
</script>
