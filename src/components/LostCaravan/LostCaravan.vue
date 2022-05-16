<template>
  <div>
  <div v-for="d in listBtn" :key="d.id" class="btn-group row pb-5" role="group" aria-label="Basic example">
   <div class="col btn-intro" id="toolBtns" role="group">
   <button  @click="onSelectDay(d)" type="button" :class="{active: d === activeItem}" class="btn btn-primary">{{d[[`btn_${$i18n.locale}`]]}}</button>
   </div>
  </div>
  <div id="printselectedpet" v-if="message">
  <div class="row" >
  <div class="col-xxl-6 col-lg-5 pb-5">
    <h5 v-if="message.title_ru" class="pb-2" style="font-size: 16px;font-weight: 700; text-transform: uppercase">{{message[`title_${$i18n.locale}`]}}</h5>
    <h5 v-if="message.title0_ru"  style="font-size: 16px;font-weight: 700">{{message[`title0_${$i18n.locale}`]}}</h5>
    <p v-if="message.text1_ru" class="information__text">{{message[`text1_${$i18n.locale}`]}}
      <br>{{message[`text2_${$i18n.locale}`]}}
      <br>{{message[`text3_${$i18n.locale}`]}}
      </p>
    <p v-if="message.newText1_ru" class="information__text p-0 m-0">
      <span style="font-weight: 700; color: black">{{message[`newTitle_${$i18n.locale}`]}}</span>
      {{message[`newText_${$i18n.locale}`]}}
      <span style="font-weight: 700; color: black">{{message[`newTitle1_${$i18n.locale}`]}}</span>
      {{message[`newText1_${$i18n.locale}`]}}<br><br>
      <span style="font-weight: 700; color: black">{{message[`newTitle2_${$i18n.locale}`]}}</span>
      {{message[`newText2_${$i18n.locale}`]}}
      <br><br>
      <span style="font-weight: 700; color: black">{{message[`newTitle3_${$i18n.locale}`]}}</span>
      {{message[`newText3_${$i18n.locale}`]}}
      <br><br>
      {{message[`newText4_${$i18n.locale}`]}}
      <br><br>
      {{message[`newText5_${$i18n.locale}`]}}
    </p>
    <h5 v-if="message.newSubtitle_ru"  class="pb-2" style="font-size: 16px;font-weight: 700">{{message[`newSubtitle_${$i18n.locale}`]}}</h5>
    <p v-if="message.day3Title_ru" class="information__text p-0 m-0" ><span style="font-weight: 700; color: black">{{message[`day3Title_${$i18n.locale}`]}}</span>
      {{message[`day3Text_${$i18n.locale}`]}}<br><br>
      <span style="font-weight: 700; color: black">{{message[`day3Title1_${$i18n.locale}`]}}</span>
      {{message[`day3Text1_${$i18n.locale}`]}}<br><br>
      <span style="font-weight: 700; color: black">{{message[`day3Title2_${$i18n.locale}`]}}</span>
      {{message[`day3Text2_${$i18n.locale}`]}}<br><br>
      {{message[`day3Text3_${$i18n.locale}`]}}
    </p>
    <p v-if="message.day3text_ru" class="information__text">{{message[`day3text_${$i18n.locale}`]}}</p>
    <h5 v-if="message.day3title_ru" class="pb-2 pt-3" style="font-size: 16px;font-weight: 700">{{message[`day3title_${$i18n.locale}`]}}</h5>
    <h5 v-if="message.day3title1_ru" class="pb-2" style="font-size: 16px;font-weight: 700">{{message[`day3title1_${$i18n.locale}`]}}</h5>
  </div>
  <div class="col-xxl-6 col-lg-7 p-0 m-0">
    <img v-if="message.images && message.images.mainImg"  style="width: 100%;" :src="require(`../../assets/caravanImg/${message.images.mainImg}.png`)"  alt="#">
    <img class="m-0 p-0" v-if="message.images && message.images.mainImg3"  style="width: 100%;" :src="require(`../../assets/caravanImg/${message.images.mainImg3}.png`)"  alt="#">
    <img v-if="message.images && message.images.mainImg2"  style="width: 100%; padding-top: 24px" :src="require(`../../assets/caravanImg/${message.images.mainImg2}.png`)"  alt="#">
  </div>
</div>
  <h5 class="pb-2 " style="font-size: 16px;font-weight: 700">{{message[`title2_${$i18n.locale}`]}}</h5>
  <p v-if="message.kunya_ru"  class="information__text"><span style="font-weight: 700; color: black">{{message[`subtitle_${$i18n.locale}`]}}</span> {{message[`textInfo_${$i18n.locale}`]}}
    <br><br>
    <span style="font-weight: 700; color: black">{{message[`kunya_${$i18n.locale}`]}}</span> {{message[`textKunya_${$i18n.locale}`]}}
    <br><br>
    <span style="font-weight: 700; color: black">{{message[`terrasa_${$i18n.locale}`]}}</span> {{message[`terrasaText_${$i18n.locale}`]}}
    <br><br>
    <span style="font-weight: 700; color: black">{{message[`medrese_${$i18n.locale}`]}}</span> {{message[`medreseText_${$i18n.locale}`]}}
    <br><br>
    <span style="font-weight: 700; color: black">{{message[`mechet_${$i18n.locale}`]}}</span>{{message[`mechetText_${$i18n.locale}`]}}  </p>

  <h6 v-if="message.titleImg_ru" class="pt-3 pb-4" style="font-size: 14px;font-weight: 700">{{message[`titleImg_${$i18n.locale}`]}}</h6>
  <div class="caravan-first-img d-flex flex-wrap justify-content-xxl-start justify-content-xl-start justify-content-md-start justify-content-lg-start justify-content-sm-center justify-content-center   gap-2 pb-5">
   <img style="width: 280px; height: 244px" v-if="message.images && message.images.imgName"  :src="require(`../../assets/caravanImg/${message.images.imgName}.png`)"  alt="#">
   <img style="width: 280px; height: 244px" v-if="message.images && message.images.imgName1"  :src="require(`../../assets/caravanImg/${message.images.imgName1}.png`)"  alt="#">
   <img style="width: 280px; height: 244px" v-if="message.images && message.images.imgName2"  :src="require(`../../assets/caravanImg/${message.images.imgName2}.png`)"  alt="#">
   <img style="width: 280px; height: 244px"  v-if="message.images && message.images.imgName3"  :src="require(`../../assets/caravanImg/${message.images.imgName3}.png`)"  alt="#">
  </div>
  <div>
    <p v-if="message.titleTash_ru" class="information__text">
     
      <span style="font-weight: 700; color: black"> {{message[`titleTash_${$i18n.locale}`]}}</span> {{message[`textTash_${$i18n.locale}`]}}
    <br><br>
     
      <span style="font-weight: 700; color: black">
       {{message[`titleSaray_${$i18n.locale}`]}}</span> {{message[`textSaray_${$i18n.locale}`]}}
      <br><br>
      
      <span style="font-weight: 700; color: black">{{message[`titleHadja_${$i18n.locale}`]}}</span> {{message[`textHadja_${$i18n.locale}`]}}
      <br><br>
      
      <span style="font-weight: 700; color: black">{{message[`titleMaxmud_${$i18n.locale}`]}}</span>{{message[`textMaxmud_${$i18n.locale}`]}}
      <br><br>
      {{message[`textPeople_${$i18n.locale}`]}}
    </p>
    <h6 v-if="message.titleAnswer_ru" style="font-size: 14px; font-weight: 700">{{message[`titleAnswer_${$i18n.locale}`]}}</h6>
  </div>
  <div v-if="message.images" class="pt-4 caravan-first-img d-flex flex-wrap justify-content-xxl-between justify-content-xl-start justify-content-md-start justify-content-lg-start justify-content-sm-center justify-content-center   gap-2 pb-5">
   <img v-if="message.images && message.images.imgName4"   :src="require(`../../assets/caravanImg/${message.images.imgName4}.png`)"  alt="#">
   <img v-if="message.images && message.images.imgName5"   :src="require(`../../assets/caravanImg/${message.images.imgName5}.png`)"  alt="#">
   <img v-if="message.images && message.images.imgName6"   :src="require(`../../assets/caravanImg/${message.images.imgName6}.png`)"  alt="#">
   <img v-if="message.images && message.images.imgName7"   :src="require(`../../assets/caravanImg/${message.images.imgName7}.png`)"  alt="#">
  </div>
  </div>
</div >
  <div id="printselectedpet" v-if="message">
    <div class="row">
    <div class="day9 p-0 m-0 text-center">
      <h5 v-if="message.lastDayTitle_ru" class="pb-2" style="font-size: 16px;font-weight: 700; text-transform: uppercase">{{message[`lastDayTitle_${$i18n.locale}`]}}</h5>
      <p v-if="message.lastDay_ru" class="information__text">
        {{message[`lastDay_${$i18n.locale}`]}}
        <br>{{message[`lastDay1_${$i18n.locale}`]}}
        <br>{{message[`lastDay2_${$i18n.locale}`]}}
      </p>
      <img v-if="message.img"  style="width: 100%; padding-top: 24px" :src="require(`../../assets/caravanImg/${message.img}.png`)"  alt="#">
    </div>
    </div>
  </div>
</template>

<script>
// import FirstDay from "@/components/LostCaravan/FirstDay";
import {listCaravan} from "@/Constants JS/listCaravan"
export default {
  // components: {FirstDay},
  data(){
    return{
      listBtn: listCaravan,
      activeId: null,
       message: undefined,
       activeItem: null
    }
  },
  methods: {
    onSelectDay(d) {
      this.message = d
      this.activeId = d.id
      this.activeItem = d
    },
  
  },
  mounted() {
    this.onSelectDay(this.listBtn[0])

  }
}
</script>

<style lang="scss" scoped>
  .btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
  .btn-group>.btn:nth-child(n+3), .btn-group>:not(.btn-check)+.btn {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .btn{
    padding: 15px 25px 15px 25px;
    background-color: white;
    color: #2E2927;
    border: 1px solid transparent;
    &:hover:active{
        background-color: #083590;
      color: white;
     
    }
  }
  .btn:focus{
      background-color: #083590;
      color: white;
    }
  .btn-intro{
   margin-left: 25px;
  }
  .btn-group .btn-intro .btn:first-child{
   margin-left: 0px;
  }
</style>

<!--<button v-for="(i, ind) in listElement" @click="toggleElement(ind)" :key="ind">-->
<!--Toggle {{ i }}-->
<!--</button>-->

<!--<p v-for="(i, ind) in listElementShow" :key="ind">-->
<!--Element: {{ i }}-->
<!--</p>-->

<!--listElement: [ { name: 1, isShow: true}, { name: 2, isShow: false}],-->
<!--}-->
<!--},-->
<!-- computed: {-->
<!--listElementShow() {-->
<!--return this.listElement.filter(e => e.isShow);-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--toggleElement(index) {-->
<!--this.listElement[index].isShow =! this.listElement[index].isShow; -->

<!--}-->
}

