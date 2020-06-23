<template>
  <text-layout pagename="ContentH2" subtitle="aboutPart2">
    <div class="container">
      <h3 class="mb-4 text-primary" v-text="$ml.with('VueJS').get('ContentH3_3')"/>

      <h4 class="mb-3 text-primary"><v-link href="/blood-age" v-text="$ml.with('VueJS').get('ContentH4_1')"></v-link></h4>
      <p v-text="$ml.with('VueJS').get('ContentP6')"/>
      <p v-text="$ml.with('VueJS').get('ContentP7')"/>
      <p v-text="$ml.with('VueJS').get('ContentP8')"/>
      <p v-text="$ml.with('VueJS').get('ContentP9')"/>
      <p v-text="$ml.with('VueJS').get('ContentP10')"/>
      <h4 class="mb-3 text-primary"><v-link href="/chinese-baby-chart" v-text="$ml.with('VueJS').get('ContentH4_2')"></v-link></h4>
      <p v-text="$ml.with('VueJS').get('ContentP11')"/>
      <p v-text="$ml.with('VueJS').get('ContentP12')"/>
      <p v-text="$ml.with('VueJS').get('ContentP13')"/>
      <p v-text="$ml.with('VueJS').get('ContentP14')"/>
      <h4 class="mb-3 text-primary"><v-link href="/japanese-baby-chart" v-text="$ml.with('VueJS').get('ContentH4_3')"></v-link></h4>
      <p v-text="$ml.with('VueJS').get('ContentP15')"/>
      <p v-text="$ml.with('VueJS').get('ContentP16')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('ContentP17')"/>
      <div class="text-center">
        <VLink href="/" class="btn btn-primary mb-5 align-center"><span v-text="$ml.with('VueJS').get('goToCalc')"></span></VLink>
      </div>
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
