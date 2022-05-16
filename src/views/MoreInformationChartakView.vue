<template>
  <div class="container">
    <div class="chartak">
      <div class="chartak-intro d-flex justify-content-between">
        <h5 style="text-transform: uppercase" class="chartak__name" v-for="t in translate" :key="t.id" >{{t[`name_${$i18n.locale}`]}}</h5>
        <button v-for="t in translate" :key="t.id" class="chartak-btn" >{{t[`btn_${$i18n.locale}`]}}</button>
      </div>
      <div class="chartak-img pt-5 pb-5">
        <img style="width: 100%" src="../assets/zaminImg/chartak.png" alt="#">
      </div>
      <div class="chartak-subtitle">
        <h6 v-for="t in translate" :key="t.id"  class="chartak__sub">{{t[`title_${$i18n.locale}`]}}</h6>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text_${$i18n.locale}`]}}</p>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text1_${$i18n.locale}`]}}</p>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text2_${$i18n.locale}`]}}</p>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text3_${$i18n.locale}`]}}</p>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text4_${$i18n.locale}`]}}</p>
        <p v-for="t in translate" :key="t.id" class="chartak__text">{{t[`text5_${$i18n.locale}`]}}</p>

      </div>
      <div class=" pb-5 d-flex flex-wrap justify-content-center justify-content-md-start" style="row-gap: 15px; column-gap: 15px">
        <div class="chartak-images" v-for="image in images" :key="image.id">
          <img :src="require(`../assets/zaminImg/${image.image}.png`)" alt="#img">
        </div>
      </div>
      <h6  v-for="t in translate" :key="t.id" class="chartak__title">{{t[`sub_${$i18n.locale}`]}}</h6>
    </div>
  </div>
</template>

<script>
import { chartakImages, chartakTranslate } from "@/Constants JS/zaminImages";

export default {
  data() {
    return{
      images: chartakImages,
      translate: chartakTranslate,
    }
  }
}
</script>