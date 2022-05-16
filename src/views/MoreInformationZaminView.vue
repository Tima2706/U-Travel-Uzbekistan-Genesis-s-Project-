<template>
  <div class="container">
    <div class="zamin">
      <div class="zamin__intro d-flex justify-content-between pt-5 pb-3">
        <h4 style="text-transform: uppercase" v-for="t in translate" :key="t.id"  class="zamin__sub">{{t[`name_${$i18n.locale}`]}}</h4>
        <button v-for="t in translate" :key="t.id"  class="zamin-btn">{{t[`btn_${$i18n.locale}`]}}</button>
      </div>
      <div class="zamin-image pb-5">
        <img style="width: 100%; height: 100%" src="../assets/images/Zamins.png" alt="#image">
      </div>
      <div class="zamin-intro-text pb-4">
        <h6 v-for="t in translate" :key="t.id" class="zamin__title pb-3">{{t[`title_${$i18n.locale}`]}}</h6>
        <p v-for="t in translate" :key="t.id" class="zamin__text">{{t[`text_${$i18n.locale}`]}}</p>
      </div>
      <div class=" pb-5 d-flex justify-content-xxl-between justify-content-xl-start justify-content-lg-start  justify-content-md-start justify-content-sm-beetwen  justify-content-center flex-wrap " style="row-gap: 15px; column-gap: 15px">
      <div class="zamin-images" v-for="image in images" :key="image.id">
        <img :src="require(`../assets/zaminImg/${image.image}.png`)" alt="#img">
      </div>
      </div>
      <p v-for="t in translate" :key="t.id"  class="zamin__subtitle pb-5">{{t[`sub_${$i18n.locale}`]}}</p>
    </div>
  </div>
</template>

<script>
import {zaminImages, zaminTranslate} from "@/Constants JS/zaminImages";

export default {
    data(){
      return{
        images: zaminImages,
        translate: zaminTranslate
      }
    }
  }
</script>