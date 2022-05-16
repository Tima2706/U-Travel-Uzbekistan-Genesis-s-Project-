<template>
  <div class="home">
    <div class="row">
      <div class="col home__image pb-5">
    <img style="width: 100%;" src="../assets/images/Rectangle.png" alt="#img">
    <h1 v-for="d in mainList" :key="d.id" class="home__sub">{{d[`text_${$i18n.locale}`]}}</h1>
    <h1 v-for="d in mainList" :key="d.id" class="home__sub">{{d[`text2_${$i18n.locale}`]}}</h1>
      </div>
    </div>
    <div class="container">
    <main-travel></main-travel>
    <main-information></main-information>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mainPage} from "@/Constants JS/mainPage";

import MainTravel from '@/components/Main/MainTravel'
import MainInformation from '@/components/Main/MainInformation'
export default {
  name: 'HomeView',
  components: {
    MainInformation,
    MainTravel,

  },
  data(){
    return{
      mainList:  mainPage
    }
  }
}
</script>
