<template>
  <text-layout pagename="chinese1" subtitle="chinese2" >
    <div class="mb-5">
      <p class="mb-5" v-text="$ml.with('VueJS').get('chinese3')"/>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('chinese4')"/>
      <p v-text="$ml.with('VueJS').get('chinese5')"/>
      <p class="mb-3" v-text="$ml.with('VueJS').get('chinese6')"/>
      <div id="convertor">
        <LSConvertor>
          <p v-text="$ml.with('VueJS').get('chinese7')"/>
        </LSConvertor>
      </div>
      <p class="mb-5" v-text="$ml.with('VueJS').get('chinese8')"/>
      <div id="table" class="mb-5">
        <chineseTable></chineseTable>
      </div>
      <p class="mb-5" v-text="$ml.with('VueJS').get('chinese9')"/>
      <div class="text-center mb-5">
        <VLink href="/" class="btn btn-primary mb-5 align-center"><span v-text="$ml.with('VueJS').get('goToCalc')"></span></VLink>
      </div>
      <h2 class="text-primary mb-5" v-text="$ml.with('VueJS').get('chinese10')"/>
      <p v-text="$ml.with('VueJS').get('chinese11')"/>
      <p class="mb-5" v-text="$ml.with('VueJS').get('chinese12')"/>
      <div class="alert alert-primary" v-text="$ml.with('VueJS').get('chinese13')"/>
    </div>
  </text-layout>
</template>

<script>
  import TextLayout from '../layouts/Textpage.vue'
  import LSConvertor from '../components/LSConvertor.vue'
  import ChineseTable from '../components/ChineseTable.vue'
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      TextLayout,
      LSConvertor,
      ChineseTable,
      VLink
    }
  }
</script>
<style lang="scss">
.datepicker-wrap {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    input {
      width: 300px;
      height: 40px;
      text-align: center
    }
}
</style>
