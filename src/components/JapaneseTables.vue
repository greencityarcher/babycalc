<template>
<div>
  <table class="b-table mb-5">
    <caption v-text="$ml.with('VueJS').get('japTableHeader1')"/>

    <tr>
      <th rowspan="2" v-text="$ml.with('VueJS').get('japTable1')"/>
      <th colspan="12" v-text="$ml.with('VueJS').get('japTable2')"/>
    </tr>
    <tr>

      <td>
        1
      </td>
      <td>
        2
      </td>
      <td>
        3
      </td>
      <td>
        4
      </td>
      <td>
        5
      </td>
      <td>
        6
      </td>
      <td>
        7
      </td>
      <td>
        8
      </td>
      <td>
        9
      </td>
      <td>
        10
      </td>
      <td>
        11
      </td>
      <td>
        12
      </td>
    </tr>
    <tr v-for="(item,index) in firstTableData" :key="index">
      <td v-for="(el, ind) in item" :key="ind">
        {{el}}
      </td>
    </tr>
  </table>
  <slot>

  </slot>
  <table class="b-table mb-5">
    <caption v-text="$ml.with('VueJS').get('japTableHeader2')"/>
    <tr>
      <th rowspan="2" v-text="$ml.with('VueJS').get('japTable3')"/>
      <th colspan="12" v-text="$ml.with('VueJS').get('japTable4')"/>
    </tr>
    <tr>
      <td>
        1
      </td>
      <td>
        2
      </td>
      <td>
        3
      </td>
      <td>
        4
      </td>
      <td>
        5
      </td>
      <td>
        6
      </td>
      <td>
        7
      </td>
      <td>
        8
      </td>
      <td>
        9
      </td>
      <td>
        10
      </td>
      <td>
        11
      </td>
      <td>
        12
      </td>
    </tr>
    <tr v-for="(item,index) in secondTableData" :key="index">
      <td v-for="(el, ind) in item" :key="ind" :class="['baby-'+el.gender, el.gender, 'jtable']">
        <span class="hidden">{{el.gender}}</span>
        <div class="probability">{{el.probability}}</div>
      </td>
    </tr>
  </table>

</div>
</template>
<script>


import japaneseDataTables from './../components/datatables/japanesetable.js'

export default {

  data: function () {
    return {
      firstTable: japaneseDataTables.numberTable,
      secondTable: japaneseDataTables.genderTable
    }
  },
  computed:{
      firstTableData: function () {
        var data = this.firstTable;
        var table = [];
        var row = [];
        for (var i = 0; i<12; i++){
          row.push(data[i].momBDayMonth+1);
          for(var k=0; k<12; k++){
            row.push(data[k+i*12].num)
          }
          table.push(row);
          row = [];
        }
        return table;
        },
        secondTableData: function () {
          var data = this.secondTable;
          var table = [];
          var row = [];
          for (var i = 0; i<12; i++){
            row.push(data[i].concMonth+1);
            for(var k=0; k<12; k++){
              var res={};
              if(data[k+i*12].boyProbability>data[k+i*12].girlProbability){
                res.gender = 'boy'
                res.probability = data[k+i*12].boyProbability+":"+data[k+i*12].girlProbability;
              }
              else if (data[k+i*12].boyProbability<data[k+i*12].girlProbability){
                res.gender = 'girl'
                res.probability = data[k+i*12].girlProbability+":"+data[k+i*12].boyProbability;
              }
              else{
                res.gender='boyorgirl'
                res.probability= "1:1"
              }

              row.push(res)
            }
            table.push(row);
            row = [];
          }
          return table;
          },
  }
}
</script>
<style lang="scss">
@import './common-css/tables.scss';
@import './common-css/genders.scss';

.jtable{
  background-size: auto 50%!important;
  background-position: top center!important;
}
.baby-boyorgirl{
  background-position: right top, left top!important;
  background-image: url(./../assets/baby-boy.svg), url(./../assets/baby-girl.svg);
  background-color: #ddd2fc;
  background-size: 50% auto, 50% auto!important;
  color: transparent;
}
</style>
