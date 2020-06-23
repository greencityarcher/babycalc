
<template>

  <div class="lunar-solar-convertor">
    <div class="mb-3">
      <h3 class="text-primary mb-3" v-text="$ml.with('VueJS').get('lunarSolar1')"/>

      <div class="text-center">
        <h4 class="mb-3" v-text="$ml.with('VueJS').get('lunarSolar2')"/>
        <div class="datepicker-wrap mb-3">
          <Datepicker
            v-model="bDate"
            initial-view="year"
            :open-date="dPickerStartDate"
            :monday-first = "true"
          ></Datepicker>
        </div>
        <transition name="fade">
          <div class="text" v-if="lunarAge&&lunarAge>=0">
           <h4 class="mb-3" v-text="$ml.with('VueJS').get('lunarSolar3')" />
             <div v-text="lunarAge" class="lunar-age"/>
         </div>
         <div class="alert alert-primary" v-if="lunarAge<0" v-text="$ml.with('VueJS').get('converterError')"/>
       </transition>
      </div>
    </div>
    <slot>

    </slot>
      <!--MONTH CONVERTOR-->
      <div class="mb-3">
        <h3 class="text-primary mb-3" v-text="$ml.with('VueJS').get('lunarSolar6')"/>

        <div class="text-center">
          <h4 class="mb-3" v-text="$ml.with('VueJS').get('lunarSolar4')"/>
          <div class="datepicker-wrap mb-3">
            <Datepicker
              v-model="cDate"
              :open-date="today"
              :monday-first = "true"
            ></Datepicker>
          </div>
          <transition name="fade">
            <div class="text" v-if="lunarMonth">
             <h4 class="mb-3" v-text="$ml.with('VueJS').get('lunarSolar5')" />
               <div v-text="lunarMonth" class="lunar-age"/>
           </div>
         </transition>
        </div>
      </div>
</div>
</template>

<script>
import Datepicker from './../../node_modules/vuejs-datepicker';
//import * as dpLangs from './../../node_modules/vuejs-datepicker/dist/locale';

import LunarSolar from './../components/utils/lunar-solar-converter.js'

export default {
  components: {
    Datepicker
  },
  data: function () {
    return {
      bDate: null,
      cDate: null,
      dPickerStartDate: new Date(1990, 0, 1),
      today: new Date()
    }
  },
  computed:{
      lunarAge: function() {
        if (this.bDate != null){
          var lunarDate = this.solarToLunar(this.bDate);
          var age = new Date().getFullYear() -  lunarDate.lunarYear +1;
          return age;
          }
          else{
            return null;
          }
        },
        lunarMonth: function(){
          if (this.cDate != null){
            var lunarConcDate = this.solarToLunar(this.cDate);
            var lunarConceptionMonth = lunarConcDate.lunarMonth;

            if (lunarConcDate.isLeap){
              if (lunarConcDate.lunarDay<=15){
                lunarConceptionMonth=lunarConceptionMonth-1;
              }
              else{
                lunarConceptionMonth=lunarConceptionMonth+1;
              }
            }
            return lunarConceptionMonth;
          }
          else{
            return null;
          }
  }
},
methods:{
  solarToLunar(date){
    var solar = new LunarSolar.Solar();
    solar.solarYear = date.getFullYear();
    solar.solarMonth = date.getMonth()+1;
    solar.solarDay = date.getDate();

    var converter = new LunarSolar.LunarSolarConverter();

    return converter.SolarToLunar(solar);
  },
}
}
</script>
<style>
.lunar-age{
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-color: #5e72e4;
  color: white;
  font-size: 3.5rem;
  line-height: 6rem;
  text-align: center;
  margin: 0 auto;
}

</style>
