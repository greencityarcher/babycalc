
<template>
  <text-layout pagename="p404_title" subtitle="p404_subtitle">
    <div class="text-center">
      <VLink href="/" class="btn btn-primary mb-5 align-center"><span v-text="$ml.with('VueJS').get('goToCalc')"></span></VLink>
    </div>
  </text-layout>
</template>

<script>
  import TextLayout from '../layouts/Textpage.vue'
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      TextLayout,
      VLink
    }
  }
</script>
