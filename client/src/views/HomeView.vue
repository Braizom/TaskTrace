<template>
  <div class="mx-40">
    <HomeMain/>
    <HomeThemes :themes="themes"/>
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
  props: ['themes']
}
</script>
