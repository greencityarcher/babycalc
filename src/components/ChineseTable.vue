<template>
  <table class="b-table">
    <caption v-text="$ml.with('VueJS').get('chinaTable1')"/>
    <tr>
      <th rowspan="2" v-text="$ml.with('VueJS').get('chinaTable2')"/>
      <th colspan="12" v-text="$ml.with('VueJS').get('chinaTable3')"/>
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
    <tr v-for="(item, index) in dataForTable" :key="index">

      <td v-for="(el, ind) in item" :key="ind" :class="['baby-'+el, el]">
        <span class="hidden">{{el}}</span>
      </td>
    </tr>
  </table>

</template>
<script>
import CTable from './../components/datatables/chinesetable.js'

export default {
  data: function() {
    return{
      tableData: CTable
    }
  },
  computed:{

    dataForTable: function () {
      var data = this.tableData;
      var table = [];
      var row = [];
      for (var i = 0; i<28; i++){
        row.push(data[i*12].age);
        for(var k=0; k<12; k++){
          row.push(data[k+i*12].gender)
        }
        table.push(row);
        row = [];
      }
      return table;
      }
}
}
</script>
<style lang="scss">
@import './common-css/tables.scss';
@import './common-css/genders.scss';

</style>
