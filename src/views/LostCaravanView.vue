<template>
  <div class="container">
    <div class="caravan pt-5">
      <div class="chartak-intro d-flex justify-content-between">
        <h5 style="text-transform: uppercase" class="chartak__name" v-for="t in translate" :key="t.id" >{{t[`name_${$i18n.locale}`]}}</h5>
        <button v-for="t in translate" :key="t.id" class="chartak-btn" >{{t[`btn_${$i18n.locale}`]}}</button>
      </div>
      <div class="chartak-img pt-5 pb-5">
        <img style="width: 100%; height: 100%" src="../assets/images/sahara.png" alt="#">
      </div>
      <h5 v-for="t in translate" :key="t.id" style="font-weight: 700; font-size: 16px">{{t[`title_${$i18n.locale}`]}}</h5>
      <div class="row">
        <div class="col-xxl-4 col-lg-6 col-sm-12 col-12">
          <img style="width: 100%; height: 100%" src="../assets/images/mapSahara.png" alt="#">
        </div>
        <div class="col-xxl-8 col-lg-6 col-sm-12">
            <p v-for="t in translate" :key="t.id" class="information__text">
              {{t[`text_${$i18n.locale}`]}}
            <br><br>
              {{t[`text1_${$i18n.locale}`]}}
            <br><br>
              {{t[`text2_${$i18n.locale}`]}}
            </p>
        </div>
      </div>
      <div>
        <p v-for="t in translate" :key="t.id" class="information__text pt-3 pb-5">{{t[`newText_${$i18n.locale}`]}}
          <br><br>
          {{t[`newText1_${$i18n.locale}`]}}
        </p>
      </div>
    </div>
    <lost-caravan/>
    <table-caravan/>
  </div>
  <div style="background-color: white; text-align: center" class="caravan-footer">
    <div class="container">
      <div class="row pb-5 pt-5">
        <h6 class="pb-3" style="font-size: 16px; font-weight: 700">U-TRAVEL® (ООО «ATTO-TRAVEL»)</h6>
        <p v-for="t in translate" :key="t.id"  class="information__text">{{t[`footerText_${$i18n.locale}`]}} <br><br>
          {{t[`footerText1_${$i18n.locale}`]}}
          <br><br>
          {{t[`footerText2_${$i18n.locale}`]}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {caravanMAin} from "@/Constants JS/zaminImages";
import LostCaravan from "@/components/LostCaravan/LostCaravan";
import TableCaravan from "@/components/LostCaravan/TableCaravan"

export default {
  components: {LostCaravan, TableCaravan},
  data() {
    return{
      translate: caravanMAin,
    }
  }
}
</script>
