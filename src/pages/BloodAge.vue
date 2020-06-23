<template>
  <text-layout pagename="blood1" subtitle="blood2">
    <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('blood4')"/>
    <ol>
      <li v-text="$ml.with('VueJS').get('blood5_1')"/>
      <li v-text="$ml.with('VueJS').get('blood5_2')"/>
      <li v-text="$ml.with('VueJS').get('blood5_3')"/>
    </ol>
    <p class="alert alert-secondary" v-text="$ml.with('VueJS').get('blood3')">
    <p v-text="$ml.with('VueJS').get('blood6')">
    <p class="alert alert-secondary" v-text="$ml.with('VueJS').get('blood7')">
    <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('blood8')"/>
    <p class="alert alert-primary mb-3" v-text="$ml.with('VueJS').get('blood11')"/>
    <p v-text="$ml.with('VueJS').get('blood9')"/>
    <p class="mb-5" v-text="$ml.with('VueJS').get('blood10')"/>
    <div class="text-center">
      <VLink href="/" class="btn btn-primary mb-5 align-center"><span v-text="$ml.with('VueJS').get('goToCalc')"></span></VLink>
    </div>

  </text-layout>
</template>

<script>
  import TextLayout from '../layouts/Textpage.vue'
  export default {
    components: {
      TextLayout
    }
  }
</script>
