<template>
  <div>
    <Header :pagetitle="pagename" :subtitle="subtitle">

      <template v-slot:description>
        <div class="row">
          <div class="col col-md-10 col-no-margin-up">
            <p class="lead  text-white" v-text="$ml.with('VueJS').get('aboutPart1')"/>
            <p class="lead  text-white" v-text="$ml.with('VueJS').get('aboutPart2')"/>
            <!--<p class="lead mb-5  text-white" v-text="$ml.with('VueJS').get('aboutPart3')"/>-->
            <p class="alert alert-secondary" role="alert"  v-text="$ml.with('VueJS').get('disclaimer')"/>
          </div>
        </div>
      </template>
    </Header>
    <slot></slot>
    <div class="mb-5">
      <Sharebar></Sharebar>
    </div>
    <!--TEXT CONTENT-->
    <section class="mb-5">
      <div class="text-content">
        <div class="container">
          <h2 class="mb-5 text-primary" v-text="$ml.with('VueJS').get('ContentH2')"/>
          <p>
            <span v-text="$ml.with('VueJS').get('ContentP1_1')"></span>
            <VLink href="/methods" v-text="$ml.with('VueJS').get('ContentP1_2')"></VLink>
            <span v-text="$ml.with('VueJS').get('ContentP1_3')"></span>
          </p>
          <p />
          <p v-text="$ml.with('VueJS').get('ContentP2')"/>
          <ul class="text-list">
            <li><VLink href="/blood-age" v-text="$ml.with('VueJS').get('ContentL1')"></VLink></li>
            <li><VLink href="/chinese-baby-chart" v-text="$ml.with('VueJS').get('ContentL2')"></VLink></li>
            <li><VLink href="/japanese-baby-chart" v-text="$ml.with('VueJS').get('ContentL3')"></VLink></li>
          </ul>
          <h3 class="mb-4 text-primary" v-text="$ml.with('VueJS').get('ContentH3_1')"/>
          <p v-text="$ml.with('VueJS').get('ContentP3')"/>
          <p v-text="$ml.with('VueJS').get('ContentP4')"/>
          <p v-text="$ml.with('VueJS').get('ContentP5')"/>
          <h3 class="mb-4 text-primary" v-text="$ml.with('VueJS').get('ContentH3_2')"/>
          <p v-text="$ml.with('VueJS').get('ContentP6')"/>
          <h3 class="mb-4 text-primary" v-text="$ml.with('VueJS').get('ContentH3_4')"/>
          <p v-text="$ml.with('VueJS').get('ContentP18')"/>
          <p v-text="$ml.with('VueJS').get('ContentP19')"/>
          <p>
            <strong v-text="$ml.with('VueJS').get('ContentP20')"/>
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>

  </div>


</template>

<script>

  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Sharebar from '../components/Sharebar.vue'
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      Header,
      Sharebar,
      Footer,
      VLink
    },
    props: ['pagename', 'subtitle']
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

  .outline{
    outline: 1px solid red;
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

  .langList{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  //  max-width: 70%;
    margin-left: auto;
    &__item{
      list-style-type: none;
      margin-right: 20px;
      margin-bottom: 20px;
      &:last-child{
        margin-right: 0;
        margin-bottom: 20px;
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
  .mode{
    display: flex;
    flex-wrap: nowrap;
    vertical-align: middle;
    align-items: center;
    font-size: 1.2rem;

    &__switch{
      display: flex;
      vertical-align: middle;
      justify-content: center;
    }
    &__header{
      color: #ced4da!important;
      cursor: pointer;
    }
  }
  .modeInput{
    display: flex;
    margin: auto;
    width: 60%;
  }
  .modeSwitch{
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 40px;
    margin-right: 40px;
    &__checkbox{
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .modeSwitch__slider {
        background-color: #5e72e4;
      }
      &:focus + .modeSwitch__slider {
        box-shadow: 0 0 1px #5e72e4;
      }
      &:checked + .modeSwitch__slider::before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
  }
    }
    &__slider{
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
      &:before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }
  }
  .active{
    color: #5e72e4!important;
    cursor: default;
  }
  .data-input-wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .datepicker-wrap{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .vdp-datepicker input{
    border: 1px solid #ced4da;
  }
  .progress-wrap .progress-label{
    display: none;
  }
  .progress-wrap .progress-wrapper{
    padding-top: 0;
  }
  .method-card{
    height: 100%;
  }
  .method-card-body{
    padding: 0.5rem 1rem!important;
  }

  .scale-x1-5{
    transform: scale(1.5);
    transform-origin: center;
  }

  .boy{
    background-color: rgba(200,232,252,1)!important;
    border-color: #E9F5FB;
    color: #63708C;
  }
  .girl{
    background-color: rgba(255,222,228,1)!important;
    border-color: #E9F5FB;
    color: #63708C;
  }
  .boyorgirl{
    background-color: #FEFFD9;
    background: linear-gradient(90deg, rgba(255,222,228,1) 0%, rgba(200,232,252,1) 100%) !important;
    border-color: #E9F5FB;
    color: #63708C;
  }
  .svg-bcg{
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

  }


  .empty{
    background-color: transparent;
    border: none;
    color: #63708C;

  }
  .overall{
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    background-color: transparent !important;
    background-image: none !important;
  }
  .sharebar{
    &__header{

    }

    &__link-list{
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      li{
        text-align: center;
        flex-basis: 100%;
      }
    }
  }
  .btn-sharebar{
    line-height: 3rem!important;
    width: 3rem!important;
    height: 3rem!important;
    font-size: 1.3rem!important;
  }
  .footer{
    border-top: 1px solid #FDF6F9;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
  .vdp-datepicker input{
    width: 300px;
    height: 40px;
    text-align: center;
    font-size: 1.2em
  }
  //some classes for improve argon design
  .no-margin-up{
    margin-top: 0!important;
  }
  .shape-paddings{
    padding-top: 10rem!important;
    padding-bottom: 6rem!important;
  }
  .text-content{
    padding-bottom: 5rem;
  }
  .navbar-padding-top{
    padding-top: 2.5rem!important;
  }
  .col-no-margin-up{
    margin-top: 0!important;
  }
  .calendar-mode-header{
    cursor: pointer;
  }

  //events classes
  .event{
    padding-left: 46%;
    position: relative;
    border: none;
    font-size: 0.7rem;
    line-height: 1.2rem;
    &::before, &::after{
      content:"";
      position: absolute;
      width: 23%;
      height: 100%;
      top:0;
      left:23%;
      background-repeat: no-repeat;
      background-size: 80% auto;
    }
    &::before{
      left:0;
      background-position: left;
    }
    &::after{
      left:23%;
      background-position: center;
    }

  }

  //custom modal styles
  .modal-backdrop{
    background-color: rgba(0,0,0,.3)!important;
  }
////checkbox styles/////
.form-check, .form-check .form-check-label {
    padding-left: 0;
}
.form-check label{
  font-size: 1rem;
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}
.form-check .form-check-label {
    cursor: pointer;
    padding-left: 30px;
    position: relative;
}
.form-check .form-check-input {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
}
.form-check .form-check-label span {
    display: block;
    position: absolute;
    left: -1px;
    top: -1pxpx;
    transition-duration: .2s;
}
.form-check .form-check-sign {
    vertical-align: middle;
    position: relative;
    top: -2px;
    float: left;
    padding-right: 10px;
    display: inline-block;
}
.form-check .form-check-input:checked~.form-check-sign:before {
    animation: c .5s;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: c;
}
.form-check .form-check-sign:before {
    display: block;
    position: absolute;
    left: 0;
    content: "";
    background-color: rgba(0,0,0,.84);
    height: 20px;
    width: 20px;
    border-radius: 100%;
    z-index: 1;
    opacity: 0;
    margin: 0;
    top: 0;
    transform: scale3d(2.3,2.3,1);
}
.form-check .form-check-input:checked~.form-check-sign .check {
    background: #5e72e4;
}
.form-check .form-check-sign .check {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #5e72e4;
    overflow: hidden;
    z-index: 1;
    border-radius: 3px;
}
.form-check .form-check-label span {
    display: block;
    position: absolute;
    left: -1px;
    top: -1px;
    transition-duration: .2s;
}
.form-check .form-check-input:checked~.form-check-sign .check:before {
    color: #fff;
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
    animation: b .3s forwards;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: b;
}
.form-check .form-check-sign .check:before {
    position: absolute;
    content: "";
    transform: rotate(45deg);
    display: block;
    margin-top: -3px;
    margin-left: 7px;
    width: 0;
    color: #fff;
    height: 0;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, inset 0 0 0 0;
    animation: checkboxOff .3s forwards;
}

@keyframes b{
  0%{
    box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px
  }
  50%{
    box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px
  }
  to{
    box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px
  }
}

</style>
