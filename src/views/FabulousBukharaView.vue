<template>
  <div class="container">
    <div class="chartak">
      <div class="chartak-intro d-flex justify-content-between">
        <h5 style="text-transform: uppercase" class="chartak__name" v-for="t in translate" :key="t.id" >{{t[`name_${$i18n.locale}`]}}</h5>
        <button v-for="t in translate" :key="t.id" class="chartak-btn" >{{t[`btn_${$i18n.locale}`]}}</button>
      </div>
      <div class="chartak-img pt-5 pb-5">
        <img style="width: 100%" src="../assets/zaminImg/bukhara.png" alt="#">
      </div>
      <h5 v-for="t in translate" :key="t.id" class="pb-3" style="font-size: 20px; font-weight: 700">{{t[`title_${$i18n.locale}`]}}</h5>
      <div class="pb-3">
        <h6 v-for="t in translate" :key="t.id" class="pb-2" style="font-size: 16px; font-weight: 700">{{t[`day1_${$i18n.locale}`]}}</h6>
        <p v-for="t in translate" :key="t.id" class="information__text">{{t[`text1_${$i18n.locale}`]}}</p>
      </div>
      <div class="pb-3">
        <h6 v-for="t in translate" :key="t.id" class="pb-2" style="font-size: 16px; font-weight: 700">{{t[`day2_${$i18n.locale}`]}}</h6>
        <p v-for="t in translate" :key="t.id" class="information__text">{{t[`text2_${$i18n.locale}`]}}</p>
      </div>
      <div class="row">
        <div class="col-xxl-7 col-md-12">
          <h6 v-for="t in translate" :key="t.id" style="font-size: 16px; font-weight: 700">{{t[`tour_${$i18n.locale}`]}}</h6>
          <p style="padding-left: 10px" v-for="t in translate" :key="t.id" class="information__text">
            <br>{{t[`link1_${$i18n.locale}`]}}
            <br>{{t[`link2_${$i18n.locale}`]}}
            <br>{{t[`link3_${$i18n.locale}`]}}
            <br>{{t[`link4_${$i18n.locale}`]}}
            <br>{{t[`link5_${$i18n.locale}`]}}
            <br>{{t[`link6_${$i18n.locale}`]}}
            <br>{{t[`link7_${$i18n.locale}`]}}
          </p>
        </div>
        <div class="col-5">
          <img style="height: 100%; width: 100%;" src="../assets/zaminImg/bukhara1.png" alt="img">
        </div>
        <h6 v-for="t in translate" :key="t.id" class="pt-5" style="font-size: 12px; font-weight: 700; text-transform: uppercase">{{t[`sub_${$i18n.locale}`]}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import {bukharaTranslate} from "@/Constants JS/zaminImages";

export default {
  data() {
    return{
      translate: bukharaTranslate,
    }
  }
}
</script>