<template>
 <div class="row g-4 pb-5">
   <div class="col-xl-12 col-xxl-6 col-md-12"  v-for="d in TravelCard" :key="d.id">
     <div class="d-flex alltours-card" >
       <div class="alltours-card__img">
       <img class="alltours__img" style=" border-top-left-radius: 10px; border-bottom-left-radius: 10px" :src="require(`../../assets/images/${d.image}.png`)" alt="#img">
       </div>
       <div class="alltours-card__item" style="position: relative">
       <h5 style="text-transform: uppercase ;font-size: 16px; font-weight: 700" class="">{{d[`text_${$i18n.locale}`]}}</h5>
         <p style="padding-bottom: 30px; font-size: 12px; color: #797979; font-weight: 400">{{d[`sub_${$i18n.locale}`]}}</p>
         <div class="alltours-card__information " style="justify-content: space-between; position: absolute; bottom: 0">
         <p style="color: #735E57">от <span style="font-size: 14px; font-weight: 700">{{d.price}}</span> uzs</p>
         </div>
         <div class="alltours-card__information" style=" position: absolute; bottom: 20px; right: 20px">
          <router-link style="text-decoration: none" :to="d.path" class="alltours-btn">{{$t('more')}} <img src="../../assets/icons/Tringle.png" alt="#arrow"></router-link>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import { mainTravelList } from '@/Constants JS/mainTravelList'

export default {
  data(){
    return{
      TravelCard: mainTravelList
    }
  }
}
</script>