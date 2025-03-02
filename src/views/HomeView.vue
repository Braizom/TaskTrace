<template>
  <div class="mx-40">
    <HomeMain/>
    <HomeThemes/>
    <HomeOthers/>
  </div>
</template>

<script>
import HomeMain from '@/components/HomeMain.vue'
import HomeThemes from '@/components/HomeThemes.vue'
import HomeOthers from '@/components/HomeOthers.vue'

export default {
  components: {
    HomeMain,
    HomeThemes,
    HomeOthers
  }
}
</script>
