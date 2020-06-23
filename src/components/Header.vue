<template>
  <div>
    <header class="header-global">
      <nav class="navbar navbar-main navbar-expand-lg navbar-light navbar-transparent navbar-padding-top">
        <div class="container">
          <div class="navigation-wrap">
            <base-dropdown>
               <base-button slot="title" type="secondary" class="dropdown-toggle" size="sm" v-text="$ml.with('VueJS').get('menu')">
               </base-button>
               <v-link href="/" class="dropdown-item" v-text="$ml.with('VueJS').get('menuMain')"></v-link>
               <v-link href="/methods" class="dropdown-item" v-text="$ml.with('VueJS').get('menuMethods')"></v-link>
               <v-link href="/blood-age" class="dropdown-item" v-text="$ml.with('VueJS').get('menuBlood')"></v-link>
               <v-link href="/chinese-baby-chart" class="dropdown-item" v-text="$ml.with('VueJS').get('menuChina')"></v-link>
               <v-link href="/japanese-baby-chart" class="dropdown-item" v-text="$ml.with('VueJS').get('menuJapan')"></v-link>
               <!--<div class="dropdown-divider"></div>
               <v-link href="/about" class="dropdown-item" v-text="$ml.with('VueJS').get('menuAbout')"></v-link>
               <v-link href="/built-in-babycalc" class="dropdown-item" v-text="$ml.with('VueJS').get('menuSell')"></v-link>-->
            </base-dropdown>
            <ul class="langList">
              <li class="langList__item" v-for="lang in $ml.list" v-bind:key="lang">
                <base-button type="secondary" size="sm" @click="changeLanguage(lang)" v-text="lang">Info</base-button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section class="mb-5">
      <div style="transform-origin: center center;">
        <div class="position-relative">
          <section class="section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew header-bcg">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="shape-container container shape-paddings">
              <div class="row">
                <div class="col no-margin-up">
                  <div class="display-2  text-white mb-3">BabyCalc</div>
                  <h1 v-text="$ml.with('VueJS').get(pagetitle)"/>

                </div>
              </div>
              <slot name="description"></slot>
              <p v-text="$ml.with('VueJS').get(subtitle)"/>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
import VLink from '../components/VLink.vue'
import BaseDropdown from '../components/design/vue-argon-design-system/src/components/BaseDropdown.vue'
import './../ml'
export default {
  props: ['pagetitle','subtitle'],
  components: {
    VLink,
    BaseDropdown
  },
  
  methods:{
    changeLanguage(lang){
    this.$ml.change(lang);
    this.dataPickerLanguage = lang;
    this.calendarLanguage = lang;

    if (this.complexResult){
      this.translateResults(this.complexResult);
    }
  },
  translateResults(results){
    for (var i = 0; i < results.length; i++){
      if(results[i].gender != null){
        results[i].genderMl = this.$ml.get(results[i].gender);
      }
    }
  },
}
}
</script>
<style lang="scss">
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #525f7f;
  }
  h1{
    color: white;
  }
  ol{
    font-weight: 300;
  }
  .header-bcg{
    background: linear-gradient(150deg,#67A3D9 15%,#F6D2E0 70%,#F8B7CD 94%)!important;
  }

  .flexContainer{
    display: flex;
    flex-wrap: wrap;
    &--nowrap{
      flex-wrap: nowrap;
    }
    &--centered{
      justify-content: center;
    }
  }
  .flexColumn{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-width: 320px;
    flex-basis: 40%;
    flex-grow: 1;
    margin: 20px;
    &--30{
      flex-basis: 30%;
    }
    &--70{
      flex-basis: 63%;
    }
  }
  .step-section{
    background-color: white;
    position: relative;
    padding: 20px;
  }
  .navigation-wrap{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .langList{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  //  max-width: 70%;
    margin-left: auto;
    margin-bottom: 0;
    padding-left: 30px;
    &__item{
      list-style-type: none;
      margin-right: 20px;
    //  margin-bottom: 20px;
      &:last-child{
        margin-right: 0;
        //margin-bottom: 20px;
      }
    }
    &__button{
      width: 65px;
      display: block;
      background-color: transparent;
      border:none;
      color: #7492AD;
      padding: 7px;
      cursor: pointer;
      &:focus{
        outline: none;
        border-bottom: 2px solid #7492AD;
      }
    }
  }

  .footer{
    border-top: 1px solid #FDF6F9;
  }
  .modal-backdrop{
    background-color: rgba(0,0,0,.3)!important;
  }
  .datepicker-wrap{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .vdp-datepicker input{
    border: 1px solid #ced4da;
  }

</style>
