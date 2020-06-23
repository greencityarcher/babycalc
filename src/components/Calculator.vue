<template>
  <div>
    <main>
      <!-- MODE -->
      <section class="mb-5">
        <div class="container">

          <div class="row align-items-center">
            <div class="col-xl-5 text-center">
              <h3 v-bind:class="{active:!mode}"
               v-text="$ml.with('VueJS').get('datemodeTitle')"
               class="mode__header"
               @click="setModeDate()"/>
            </div>
            <div class="col-xl-2 text-center">
              <div class="mode__switch">
                <label class="modeSwitch">
                <input class="modeSwitch__checkbox" type="checkbox" id="mode" v-model="mode" @change="dispatchDataEnter"/>
                <span class="modeSwitch__slider"></span>
                </label>
              </div>
            </div>
            <div class="col-xl-5 text-center">
              <h3 v-bind:class="{ active:mode}"
              v-text="$ml.with('VueJS').get('calendarmodeTitle')"
               class="mode__header"
               @click="setModeCalendar()"/>
            </div>
          </div>
        </div>
      </section>
      <!-- DATA ENTER -->
      <section class="mb-5">
        <div class="container">
          <div class="row">
            <div class="data-input-wrap col col-md-6 text-center mb-5">
              <h3 v-text="$ml.with('VueJS').get('mbdayTitle')" class="mb-4"/>
              <div class="datepicker-wrap">
                <datepicker
                v-model="motherBday"
                initial-view="year"
                :open-date="datapickerStartDate"
                :monday-first = "true"
                @closed="dispatchDataEnter"
                :language="dataPickerLanguages[dataPickerLanguage]"></datepicker>
              </div>

            </div>
            <div class="data-input-wrap col col-md-6 text-center mb-5">
              <h3 v-text="$ml.with('VueJS').get('fbdayTitle')" class="mb-4"/>
              <div class="datepicker-wrap">
                <datepicker
                v-model="fatherBday"
                initial-view="year"
                :open-date="datapickerStartDate"
                @closed="dispatchDataEnter"
                :language="dataPickerLanguages[dataPickerLanguage]"
                :monday-first = "true"
                ></datepicker>
              </div>

            </div>
          </div>
          <div class="row justify-content-md-center">

            <div class="data-input-wrap col col-md-6 text-center mb-5" v-if="mode==false">

                <h3 v-text="$ml.with('VueJS').get('concdayTitle')" class="mb-4"/>
                <div class="datepicker-wrap">
                  <datepicker v-model="conceptionDay"
                   @closed="dispatchDataEnter"
                   :language="dataPickerLanguages[dataPickerLanguage]"
                   :monday-first = "true">
                  </datepicker>
                </div>


            </div>
          </div>
          <transition name="fade">
            <div role="alert" class="alert alert-primary" v-if="(this.mode&&!motherBday)||(this.mode&&!fatherBday)" v-text="$ml.with('VueJS').get('datesWarn')"/>
          </transition>
          <transition name="fade">
            <div role="alert" class="alert alert-primary" v-if="this.motherBDayError" v-text="$ml.with('VueJS').get('motherBDayError')"/>
          </transition>
          <transition name="fade">
            <div role="alert" class="alert alert-primary" v-if="this.fatherBDayError" v-text="$ml.with('VueJS').get('fatherBDayError')"/>
          </transition>


        </div>

      </section>
      <!-- DATA WARNINGS -->
      <section class="mb-5">
        <div class="container">

        </div>
      </section>
      <!-- METHODS -->
      <section class="mb-5">
        <div class="container">
          <h3 v-text="$ml.with('VueJS').get('methodslistTitle')" class="text-center mb-5"/>
          <div class="row">
            <div class="col-lg col-xl-4 mb-3" v-for="meth in methods" :key="meth.id">
              <div class="card border-0 shadow method-card">
                <div class="card-header">
                  <h5 class="text-center text-primary">
                    <v-link :href="meth.link" v-text="$ml.with('VueJS').get(meth.name)"></v-link>
                  </h5>

                </div>
                <div class="card-body method-card-body">
                  <div class="svg-bcg" :class="meth.symbol">
                    <div class="description" v-text="$ml.with('VueJS').get(meth.description)"/>
                  </div>

                </div>
                <div class="card-footer result-card-footer" :class="getSimpleResultClass(meth.id)">
                  <div class="methodList__results" v-if="meth.used&&!mode&&complexResult">
                    <h6 class="text-center mb-1">
                       {{complexResult.find(res => res.method === meth.id).genderMl}}
                    </h6>
                    <div class="result-pic mb-5" :class="getSimpleResultBcgPic(complexResult.find(res => res.method === meth.id).gender)">
                    </div>
                    <div v-if="meth.id!=1">
                      <div class="progress-label">
                        <div class="progress-label-inner">
                          <span :id="'method'+meth.id" v-text="$ml.with('VueJS').get('precision')"/>
                          <b-popover :target="'method'+meth.id" triggers="hover" placement="top">
                            <span v-text="$ml.with('VueJS').get(meth.confidence)"/>
                          </b-popover>
                        </div>

                      </div>

                      <div class="progress-wrap">
                        <base-progress type="primary" :value="complexResult.find(res => res.method === meth.id).probability" label="1"></base-progress>
                      </div>
                    </div>

                    <div v-if="meth.id==1 && !chineseAgeError">
                      <p class="alert alert-primary" v-text="$ml.with('VueJS').get('confidenceChinese')"/>
                    </div>
                    <div v-if="meth.id==1&&chineseAgeError">
                      <div role="alert" class="alert alert-primary" v-text="$ml.with('VueJS').get('chineseAgeWarn')" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div class="container">
            <transition name="fade">
                <role="alert" class="alert alert-primary" v-if="(this.mode&&!motherBday)||(this.mode&&!fatherBday)" v-text="$ml.with('VueJS').get('datesWarn')"/>
          </transition>

          </div>
        </section>
        <!-- RESULTS -->
        <!--CALENDAR-->
      <section class="mb-5" v-if="this.mode&&motherBday&&fatherBday">
        <div class="container">
          <div class="card shadow ">
            <div class="card-header bg-gradient-secondary">
              <h5 v-text="$ml.with('VueJS').get('calendarHeader')" class="text-center text-primary"/>
            </div>
            <div class="card-body">
              <div class="row">
                <!--FULLCALENDAR CONTROLS-->
                <div class="col-lg col-xl-5">
                  <div class="row">
                    <div class="col">
                      <div class="viewMode">
                        <div class="flexContainer flexContainer--nowrap mode">
                          <p v-bind:class="{active:!displayByMethods}" class="calendar-mode-header" v-text="$ml.with('VueJS').get('displayOverallTitle')" @click="setViewOverall"/>
                          <div class="mode__switch">
                            <label class="modeSwitch">
                            <input class="modeSwitch__checkbox" type="checkbox" id="displayMmode" v-model="displayByMethods" @change="dispatchDataEnter"/>
                            <span class="modeSwitch__slider"></span>
                            </label>
                          </div>
                          <p v-bind:class="{ active:displayByMethods}" class="calendar-mode-header" v-text="$ml.with('VueJS').get('displaySeparatedTitle')" @click="setViewByMethods"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 class="text-primary text-center mb-3" v-text="$ml.with('VueJS').get('methodsListPanelTitle')"/>
                  <div class="mb-5">
                    <div class="form-check mb-2" v-for="meth in methods" :key="meth.id">
                        <label class="form-check-label">
                          <input class="form-check-input"
                          type="checkbox"
                          :name="meth.name"
                          :id="meth.id"
                          :value="meth.id"
                          v-model="meth.used"
                          @change="dispatchDataEnter">
                            <span class="form-check-sign">
                              <span class="check">
                              </span>
                            </span>
                            <div v-text="$ml.with('VueJS').get(meth.name)"></div>
                        </label>
                    </div>
                  </div>
                  <transition name="fade">
                    <div v-if="noSelectedMethodsError" role="alert" class="alert alert-primary mt-3" v-text="$ml.with('VueJS').get('methodsWarn')"/>
                  </transition>
                  <transition name="fade">
                    <div v-if="chineseAgeCalendarError" role="alert" class="alert alert-primary mt-3" v-text="$ml.with('VueJS').get('chineseAgeCalendarError')"/>
                  </transition>
                  <transition name="fade">
                    <div v-if="motherBDayCalendarError" role="alert" class="alert alert-primary mt-3" v-text="$ml.with('VueJS').get('motherBDayCalendarError')"/>
                  </transition>
                  <transition name="fade">
                    <div v-if="fatherBDayCalendarError" role="alert" class="alert alert-primary mt-3" v-text="$ml.with('VueJS').get('fatherBDayCalendarError')"/>
                  </transition>

                </div>
                <!--FULLCALENDAR-->
                <div class="col-lg col-xl-7">
                  <FullCalendar
                  ref="calendar"
                  defaultView="dayGridMonth"
                  :plugins="calendarPlugins"
                  :weekends="true"
                  contentHeight="auto"
                  :header="{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                  }"
                  :events="calendarEvents"
                  :displayEventTime='false'
                  :firstDay = 1
                  :locale="calendarLanguages[calendarLanguage]"
                  :eventOrder = "eventsSorting"
                  @datesRender="handleMonthChange"
                   />
                </div>
              </div>
            </div>
            <div class="card-footer">
              <h5 v-text="$ml.with('VueJS').get('calendarFooter')" class="text-center text-primary mb-4"/>
              <div class="row mb-4">
                <div class="col col-md-6">
                  <div class="demo">
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--boy icon icon-shape rounded-circle boy"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('boy')"/>
                    </div>
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--girl icon icon-shape rounded-circle girl"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('girl')"/>
                    </div>
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--boyorgirl icon icon-shape rounded-circle boyorgirl"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('boyorgirl')"/>
                    </div>
                  </div>
                </div>
                <div class="col col-md-6" v-if="displayByMethods">
                  <div class="demo">
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--blood icon icon-shape icon-shape-primary rounded-circle"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('bloodMethodFullName')"/>
                    </div>
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--moon icon icon-shape icon-shape-primary rounded-circle"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('chineseMethodFullName')"/>
                    </div>
                    <div class="demo__item">
                      <div class="demo__icon demo__icon--japanese icon icon-shape icon-shape-primary rounded-circle"></div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('japaneseMethodFullName')"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-if="displayByMethods">
                <div class="col">
                  <div class="demo">
                    <div class="demo__item demo__item--nowrap">
                      <div class="demo__icon icon icon-shape icon-shape-primary rounded-circle">12%</div>
                      <div class="demo__description" v-text="$ml.with('VueJS').get('powerindex')"/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>

      </section>
    </main>
  </div>
</template>
<script>
import Datepicker from './../../node_modules/vuejs-datepicker';
import * as dpLangs from './../../node_modules/vuejs-datepicker/dist/locale';

import FullCalendar from './../../node_modules/@fullcalendar/vue';

import dayGridPlugin from './../../node_modules/@fullcalendar/daygrid';

import ru from './../../node_modules/@fullcalendar/core/locales/ru';
//import enLocale from './../node_modules/@fullcalendar/core/locales/en';
import es from './../../node_modules/@fullcalendar/core/locales/es';

import { MLBuilder } from './../../node_modules/vue-multilanguage';

import LunarSolar from './../components/utils/lunar-solar-converter.js'
import chineseDataTable from './../components/datatables/chinesetable.js'
import japaneseDataTable from './../components/datatables/japanesetable.js'

import VLink from './../components/VLink.vue'

//import routes from '../routes'

export default {
  components: {
    Datepicker,
    FullCalendar,
    VLink
  },

  data: function () {
    return {
      calendarPlugins: [ dayGridPlugin],
      methods:[
        {name: "bloodMethodName",
        id: "0",
        used: true,
        symbol: "blood",
        func: this.calcBlood,
        description: "bloodMethodDescription",
        descriptionDetailed: "bloodDescDeailed",
        confidence: "confidenceBlood",
        link: "/blood-age"
        },
        {name: "chineseMethodName",
        id: "1",
        used: true,
        symbol: "moon",
        func: this.calcChinese,
        description: "chineseMethodDescription",
        descriptionDetailed: "chineseDescDeailed",
        link: "/chinese-baby-chart"
        },
        {name: "japaneseMethodName",
        id: "2",
        used: true,
        symbol: "japan",
        func:this.calcJapanese,
        description: "japaneseMethodDescription",
        descriptionDetailed: "japaneseDescDeailed",
        confidence: "confidenceJapanese",
        link: "/japanese-baby-chart"
        }
      ],
      mode: false,
      displayByMethods: false,
      conceptionDay: null,
      motherBday: null,
      fatherBday: null,
      datapickerStartDate: new Date(1990, 0, 1),
      chineseTable: chineseDataTable,
      japaneseNum: japaneseDataTable.numberTable,
      japaneseTable: japaneseDataTable.genderTable,
      complexResult: null,
      prognoseStart: new Date(),
      prognoseEnd: new Date(),
      calendarEvents: [],
      dataPickerLanguages: dpLangs,
      dataPickerLanguage: 'en',
      calendarLanguages: {ru: ru, es: es},
      calendarLanguage: 'en',
      eventsSorting: ['methodid'],
      modalHeaderBcg: 'secondary',
      modalHeaderText: 'primary',
      chineseAgeCalendarError: false,
      motherBDayCalendarError: false,
      fatherBDayCalendarError: false
  }
},
computed:{

  chineseAgeError: function () {
    var momChineseAge = this.calcChineseAge(this.motherBday, this.conceptionDay);
      if (momChineseAge<18 || momChineseAge > 45){
        return true;
      }
      else{
        return false;
      }
    },
    noSelectedMethodsError: function() {
      if(!this.methods.some(elem => elem.used)){
        return true;
      }
      else{
        return false;
      }
    },
    motherBDayError: function(){
      if (this.motherBday && this.conceptionDay && !this.mode && this.motherBday>this.conceptionDay){
        return true;
      }
      else{
        return false;
      }
    },
    fatherBDayError: function(){
      if (this.fatherBday && this.conceptionDay && !this.mode && this.fatherBday>this.conceptionDay){
        return true;
      }
      else{
        return false;
      }
    }
},
created: function () {
    var userLang = navigator.language || navigator.userLanguage;
    var l = userLang.substring(0,2);
    if ((l == 'ru')||(l == 'Ru')||(l =='RU')){
      this.changeLanguage('ru');
    }
    else if ((l == 'es')||(l=='Es')||(l =='ES')){
      this.changeLanguage('es');
    }
  },
methods: {
  setModeDate(){
    this.mode=false;
  },
  setModeCalendar(){
    this.mode=true;
  },
  setViewOverall(){
    this.displayByMethods=false;
    this.dispatchDataEnter();
  },
  setViewByMethods(){
    this.displayByMethods=true;
    this.dispatchDataEnter();
  },

  convertSolarToLunar(date){
    var solar = new LunarSolar.Solar();
    solar.solarYear = date.getFullYear();
    solar.solarMonth = date.getMonth()+1;
    solar.solarDay = date.getDate();

    var converter = new LunarSolar.LunarSolarConverter();

    return converter.SolarToLunar(solar);
  },

  getBloodName(){
    return new MLBuilder('bloodMethodName');
  },


  getBloodAge(bDay,concDay,yearsInCycle){

    const oneDay = 24 * 60 * 60 * 1000;
    var bloodCyclesCount=null;
    var bloodAge = null;
    var ageInDays = (concDay.getTime() - bDay.getTime())/oneDay;
    bloodCyclesCount = ageInDays/(365*yearsInCycle);
    bloodAge = bloodCyclesCount - Math.trunc(bloodCyclesCount);
    return bloodAge;
 },

  calcBlood(momBday, dadBday,conceptionDay){
    var result={
      gender: null,
      probability: null
    };
    var motherBloodAge = this.getBloodAge(momBday,conceptionDay, 3);
    var fatherBloodAge = this.getBloodAge(dadBday,conceptionDay, 4);
    result.probability = Math.abs(Math.round((motherBloodAge - fatherBloodAge)*100));

    if (result.probability == 0){
      result.probability = 0.5;
    }

    if (motherBloodAge < fatherBloodAge){
      result.gender = 'girl';
    }
    else  if (motherBloodAge > fatherBloodAge){
      result.gender = 'boy';
    }
    else{
      result.gender = 'boyorgirl';
      result.probability = 0.5;
    }
    return result;
  },
  calcChineseAge(bDay, conceptionDay){
    var lunarBirthYear = this.convertSolarToLunar(bDay).lunarYear;
    var currentLunarYear = this.convertSolarToLunar(conceptionDay).lunarYear;
    var lunarAgeInYears = currentLunarYear - lunarBirthYear + 1;
    return lunarAgeInYears;
  },

  calcChinese(momBDay, fatherBday, concDay){
    var result = {
      gender: null,
      probability: null
    };

    fatherBday= null;

    var lunarConceptionDate = this.convertSolarToLunar(concDay);
    var lunarConceptionMonth = lunarConceptionDate.lunarMonth;

    if (lunarConceptionDate.isLeap){
      if (lunarConceptionDate.lunarDay<=15){
        lunarConceptionMonth=lunarConceptionMonth-1;
      }
      else{
        lunarConceptionMonth=lunarConceptionMonth+1;
      }
    }
//////!!!!!!!
    var momLunarAgeInYears = this.calcChineseAge(momBDay, concDay);

    var chineseTableCell = this.chineseTable.find(obj => {
      return (obj.age === momLunarAgeInYears && obj.month === lunarConceptionMonth-1);//because in data month starts by 0 and lunar convertor start month by 1
    });
    if (chineseTableCell===undefined){
      result.gender = null;
    }
    else{
      result.gender = chineseTableCell.gender;
    }
    return result;
  },

  getJapaneseNum(momBDay, dadBDay){
    var result;
    var momBDayMonth = momBDay.getMonth();
    var dadBDayMonth = dadBDay.getMonth();
    result = this.japaneseNum.find(obj => {
      return(obj.momBDayMonth === momBDayMonth && obj.dadBDayMonth === dadBDayMonth)
    }).num;
    return result;
  },

  calcJapanese(momBDay, dadBDay,conceptionDay){
    var result = {};
    var japNum = this.getJapaneseNum(momBDay, dadBDay);

    var japaneseResult = this.japaneseTable.find( obj => {
      return (obj.num === japNum && obj.concMonth === conceptionDay.getMonth());
    });
    var probNormalize = japaneseResult.boyProbability + japaneseResult.girlProbability;
    if (japaneseResult.boyProbability > japaneseResult.girlProbability){
      result.gender = 'boy';
      result.probability = Math.round(japaneseResult.boyProbability / probNormalize * 100);
    }
    else {
      if(japaneseResult.boyProbability < japaneseResult.girlProbability)
      {
        result.gender = 'girl';
        result.probability = result.probability = Math.round(japaneseResult.girlProbability / probNormalize * 100);
      }
      else{
        result.gender = 'boyorgirl'
        result.probability = 50;
      }
    }
    return result;
  },

  //calc prognoses by date with all checked methods
  //return array of result objects
  //result object  includes gender, gender on selected language, probability and method id
  calcAll(momBday, dadBday, concDay){
    var results = [];
    var res;
    for (var i = 0; i < this.methods.length; i++) {
      if (this.methods[i].used){
        res = this.methods[i].func(momBday, dadBday, concDay);
        res.method = this.methods[i].id;
        res.pic = this.methods[i].pic;
        results.push(res);
      }
    }
    //adding gender name on selected language
    this.translateResults(results);
    return results;
  },
  createDaysArray(){
    var startOfPeriod = new Date(this.prognoseStart.getTime());
    var endOfPeriod = new Date(this.prognoseEnd.getTime());
    var daysOfPeriod = [];
    for (var d = startOfPeriod; d <= endOfPeriod; d.setDate(d.getDate() + 1)) {
      daysOfPeriod.push(new Date(d));
    }

    return daysOfPeriod;
  },

  //build massive of prognoses for year
  //every massive el is an array of results
  //every result is object with fields id method, gender, probability, genderMl
  calcPrognose(momBday, dadBday){
    var prognose = [];
    var calcFunc = this.calcAll;
    var period = this.createDaysArray();
    var calcOverall = this.calcOverallPrognose;
    var motherBdayOutOfRange = false;
    var fatherBdayOutOfRange = false;

    period.forEach(function(el){
      var p = {};
      p.date = el;
      p.results = calcFunc(momBday, dadBday, el);
      p.overall = calcOverall(p.results);

      if ((momBday < el) && (dadBday < el)){
        prognose.push(p);
      }
      if (momBday > el){
        motherBdayOutOfRange = true;
      }
      if (dadBday > el){
        fatherBdayOutOfRange = true;
      }
    });
    this.motherBDayCalendarError = motherBdayOutOfRange;
    this.fatherBDayCalendarError = fatherBdayOutOfRange;

    return prognose;
  },

  calcOverallPrognose(resultsArray){

    if (resultsArray.length == 0){
      return null;
    }
    else{
      var boyCount = 0;
      var girlCount = 0;
      var noresultCount = 0;
      var res;
      resultsArray.forEach(function(el){
        if (el.gender == 'boy'){
          boyCount++;
        }
        if (el.gender == 'girl'){
          girlCount++;
        }
        if (el.gender == null){
          noresultCount++;
        }
      });

      if (boyCount > girlCount){
        res = 'boy';
      }
      else if (boyCount < girlCount){
          res = 'girl';
      }
      else if (resultsArray.length == 1 && noresultCount > 0 ){
        return null;
      }
      else {
          res = 'boyorgirl';
        }

      return res;
    }
  },

  pad2(n) {
    return n > 9 ? n : '0' + n;
  },

  dateFormatting(date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;  // months start at zero
    var day = date.getUTCDate();
    return year + '-' + this.pad2(month) + '-'+ this.pad2(day);
  },

  //returns method event object for calendar
  createEvent(start, end, gender, methodPic, methodId, probability){
    if(gender == null){
      return null;
    }
    var event = {};
    var eventClasses='event';

    //add gender info
    if (gender == 'boy'){
      eventClasses += ' evBoy';
    }
    if (gender == 'girl'){
      eventClasses += ' evGirl';
    }
    if(gender == 'boyorgirl'){
      eventClasses += ' evBoyGirl';
    }

    //add method info
    if (methodId == 0){
      eventClasses += ' evBlood'
    }
    if (methodId == 1){
      eventClasses += ' evMoon'
    }
    if (methodId == 2){
      eventClasses += ' evJapan'
    }

    //add probabbility info
    if (probability != null){
      event.title = probability+'%';
    }
    else{
      event.title = '';
    }
    //set other event params
    event.start = start;
    event.end = end;
    event.methodid = methodId;
    event.className = eventClasses;

    return event;
  },

  //returns overall event for calendar
  createOverallEvent(start, end, gender){
    if (gender==null){
      return null;
    }

    var event = {};
    event.start = start;
    event.end = end;
    event.rendering = 'background';
    event.className = 'evOverall';
    if (gender == 'boy'){
      event.className +=' evOverallBoy';
    }
    if (gender == 'girl') {
      event.className +=' evOverallGirl';
    }
    if (gender == 'boyorgirl'){
      event.className +=' evOverallBoyGirl';
    }

    return event;
  },

  //generate array of events for calendar
  buildSchedule(momBday, dadBday){

    var prognose = this.calcPrognose(momBday, dadBday);
    var events=[];
    var dateFormattingFunc = this.dateFormatting;
    var displayByMethods = this.displayByMethods;
    var createEv = this.createEvent;
    var createOverallEv = this.createOverallEvent;
    var chErr = false;
    //refresh error state
    this.chineseAgeCalendarError = false;
    prognose.forEach(function(el){
      var start = dateFormattingFunc(el.date);
      var end = start;

      //check if some gender results is null that chinese age is over diapasone
      if (el.results.some(r => !r.gender)){
        chErr = true;
      }
      //separate forecast
      if (displayByMethods) {
        el.results.forEach(function(res){
          var event = createEv(start, end, res.gender, res.pic, res.method, res.probability);
          if (event != null){
            events.push(event);
          }
        });
      }
      //generalized forecast
      else {
        var eventOverall = createOverallEv(start,end,el.overall);
        if (eventOverall != null){
          events.push(eventOverall);
        }
      }
    });
    this.chineseAgeCalendarError = chErr;
    return events;
  },

  //recalc all data
  dispatchDataEnter(){
    if (this.motherBday && this.fatherBday){
      if (this.mode){
        this.calendarEvents = this.buildSchedule(this.motherBday, this.fatherBday);
      }
      else{
        if (this.conceptionDay && !this.motherBDayError && !this.fatherBDayError){
          this.complexResult = this.calcAll(this.motherBday, this.fatherBday, this.conceptionDay);
        }
      }
    }
},
getViewDates: function(info){
  this.prognoseStart = new Date(info.view.activeStart);
  this.prognoseEnd = new Date(info.view.activeEnd);
},
handleMonthChange: function(info){
  this.getViewDates(info);
  this.dispatchDataEnter();

},

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
  getSimpleResultClass(id){
    if (this.complexResult&&!this.mode){
      return this.complexResult.find(res => res.method === id).gender;
    }
    else{
      return null;
    }
  },
  getSimpleResultBcgPic(gender){
    var className = 'baby-'+gender;
    return className;
  }

  }
}
</script>

<style lang="scss">




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
  .blood{
    background-image: url(./../assets/two-blood-drops.svg);
  }
  .moon{
    background-image: url(./../assets/moon.svg);
  }

  .japan{
    background-image: url(./../assets/japan-flag.svg);
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
  .demo{
    &__item{
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      &--nowrap{
        flex-wrap: nowrap!important;
        align-items: center;
      }
      &--fullwidth{
        width: 100%;
        flex-shrink: 0;
      }

    }
    &__icon{
      position: relative;
      flex-shrink: 0;
      margin-right: 1.2rem;
      &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left:0;
        right: 0;
        border-radius: 50% 50%;
        background-repeat: no-repeat;
        background-size: 50% 50%;
        background-position: center;
      }
      &--boy:before{
        background-image: url(./../assets/masculine-gender.svg);
      }
      &--girl:before{
        background-image: url(./../assets/femenine-gender.svg);
      }
      &--boyorgirl:before{
        background-image: url(./../assets/gender-symbols.svg);
      }
      &--blood:before{
        background-image: url(./../assets/two-blood-drops-blue.svg);
      }
      &--moon:before{
        background-image: url(./../assets/moon-blue.svg);
      }
      &--japanese:before{
        background-image: url(./../assets/japan-flag-blue.svg);
      }
    }

    &__description{
      flex-basis: 100%;
    }

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
  .evBoy{
    background-color: rgba(200,232,252,1);
    &::after{
      background-image: url(./../assets/masculine-gender.svg);
    }
  }
  .evGirl{
    background-color: rgba(255,222,228,1);
    &::after{
      background-image: url(./../assets/femenine-gender.svg);
    }
  }
  .evBoyGirl{
    background-color: #FEFFD9;
    background: linear-gradient(90deg, rgba(255,222,228,1) 0%, rgba(200,232,252,1) 100%);
    &::after{
      background-image: url(./../assets/gender-symbols.svg);
    }
  }
  .evBlood{
    &::before{
      background-image: url(./../assets/two-blood-drops-blue.svg);
    }
  }
  .evMoon{
    &::before{
      background-image: url(./../assets/moon-blue.svg);
    }
  }
  .evJapan{
    &::before{
      background-image: url(./../assets/japan-flag-blue.svg);
    }
  }
  .evOverall{
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% auto;
  }
  .evOverallBoy{
    background-color: rgba(200,232,252,1);
    background-image: url(./../assets/masculine-gender.svg);
    &::before{

    }
  }
  .evOverallGirl{
    background-color: rgba(255,222,228,1);
    background-image: url(./../assets/femenine-gender.svg);
  }
  .evOverallBoyGirl{
    background-image: url(./../assets/gender-symbols.svg), linear-gradient(90deg, rgba(255,222,228,1) 0%, rgba(200,232,252,1) 100%);
    background-position: center, top;
    background-size: 50% auto, 100% 100%;
  }
  .result-pic{
    width: 11rem;
    height: 5rem;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
  }
  .baby-boy{
    background-image: url(./../assets/baby-boy.svg);
  }
  .baby-girl{
    background-image: url(./../assets/baby-girl.svg);
  }
  .baby-boyorgirl{
    background-position: right, left;
    background-image: url(./../assets/baby-boy.svg), url(./../assets/baby-girl.svg);
  }



  //custom calendar styles
  .fc-button .fc-icon {
      font-size: 1rem!important;
  }
  .fc-button-primary {
      color: #2643e9;
      background-color: rgba(138, 152, 235, 0.5);
      border-color: rgba(138, 152, 235, 0.5);
      border-radius: 50% 50%;
      &:hover{
        background-color: rgba(138, 152, 235, 0.9);
        border-color: rgba(138, 152, 235, 0.9);
        color: #2643e9;
      }
  }
  .fc-button-primary:not(:disabled):active, .fc-button-primary:not(:disabled).fc-button-active {
    background-color: rgba(138, 152, 235, 0.9)!important;
    border-color: rgba(138, 152, 235, 0.9)!important;
}
.fc-button-primary:not(:disabled):active:focus, .fc-button-primary:not(:disabled).fc-button-active:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(138, 152, 235, 0.9)!important;
    box-shadow: 0 0 0 0.2rem rgba(138, 152, 235, 0.9)!important;
}
  //custom modal styles

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
