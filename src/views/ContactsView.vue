<template>
  <div class="contacts pt-5 pb-5" >
    <div class="container">
        <div class="row d-flex contacts-card">
          <div class="col-xxl-4 col-md-5 col-sm-12 order-xxl-1 order-md-1 order-sm-2 order-2">
            <contact-img></contact-img>
          </div>
          <div class="col-xxl-8 col-md-7 col-sm-12 order-xxl-2 order-md-2 order-sm-1 order-1">
            <contact-map></contact-map>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ContactMap from "@/components/Contacts/ContactMap";
import ContactImg from "@/components/Contacts/ContactImg";
export  default {
  data() {
    return {}
  },
  components: {ContactImg, ContactMap}
}
</script>















<!--GOOGLE MAPS -->
<!--<template>-->
<!-- <GMapMap-->
<!--      :center="center"-->
<!--      :zoom="17"-->
<!--      map-type-id="terrain"-->
<!--      style="width: 500px; height: 300px"-->
<!--  >-->
<!--   <GMapCluster>-->
<!--      <GMapMarker-->
<!--          :key="index"-->
<!--          v-for="(m, index) in markers"-->
<!--          :position="m.position"-->
<!--          :clickable="true"-->
<!--          :draggable="true"-->
<!--          @click="center=m.position"-->
<!--      />-->
<!--    </GMapCluster>-->
<!--  </GMapMap>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'App',-->
<!--  data() {-->
<!--    return {-->
<!--      center: {lat: 41.29546873494837, lng:69.28337669439915, },-->
<!--      markers: [-->
<!--        {-->
<!--          position: {-->
<!--            lat:41.29546873494837,  lng: 69.28337669439915-->
<!--          },-->
<!--        }-->
<!--        ,-->
<!--      ]-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
