<template>
  <text-layout pagename="japaneseMethodName" subtitle="japanese1">
    <div class="mb-5">
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('japanese2')"/>
      <p v-text="$ml.with('VueJS').get('japanese3')"/>


      <div id="table">
        <japaneseTable>

        </japaneseTable>
      </div>
      <p v-text="$ml.with('VueJS').get('japanese4')"/>
      <ol class="mb-5">
        <li v-text="$ml.with('VueJS').get('japanese4_1')"/>
        <li v-text="$ml.with('VueJS').get('japanese4_2')"/>
        <li v-text="$ml.with('VueJS').get('japanese4_3')"/>
      </ol>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('japanese5')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('japanese6')"/>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('japanese7')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('japanese8')"/>
      <div class="text-center">
        <VLink href="/" class="btn btn-primary mb-5 align-center"><span v-text="$ml.with('VueJS').get('goToCalc')"></span></VLink>
      </div>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('japanese9')"/>
      <p v-text="$ml.with('VueJS').get('japanese10')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('japanese11')"/>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('japanese12')"/>
      <p v-text="$ml.with('VueJS').get('japanese13')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('japanese14')"/>
      <div class="alert alert-primary mb-5">
        <p v-text="$ml.with('VueJS').get('japanese15')"/>
        <p v-text="$ml.with('VueJS').get('japanese16')"/>
      </div>
    </div>
  </text-layout>
</template>

<script>
  import TextLayout from '../layouts/Textpage.vue'
  import JapaneseTable from '../components/JapaneseTables.vue'
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      TextLayout,
      JapaneseTable,
      VLink
    }
  }
</script>
