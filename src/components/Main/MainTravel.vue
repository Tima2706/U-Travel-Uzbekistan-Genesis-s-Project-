<template>
  <div class="home__welcome">
    <h2 class="home__travel-text">{{$t("travel")}}</h2>
    <div class="row home__card-main" style="padding-top: 72px">
      <div  class="col-md-6 col-lg-4 home__card pb-5" v-for="travel in travelList" :key="travel.id">
        <div class="home__card-inner">
        <img style="width: 100%" :src="require(`../../assets/images/${travel.image}.png`)" alt="#img">
        <h5 class="home__text pt-4">{{travel[`text_${$i18n.locale}`]}}</h5>
        <p class="home__price">от <span>{{travel.price}}</span> uzs</p>
          <div style="margin-top: 48px">
          <router-link aria-current="page"
                       :to="travel.path"
                       style="text-decoration: none; cursor: pointer" class="home-btn">{{$t('more')}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mainTravelList} from '@/Constants JS/mainTravelList'


export default {
  components: {},
  data() {
    return{
      travelList: mainTravelList,
      more: null
    }
  },
}
</script>