<template>
  <div class="client">
    <div class="container">
      <div class="client-intro">
        <h3 style="text-transform: uppercase" class="client-intro__text">{{$t('client.sub')}}</h3>
      </div>
      <for-client></for-client>
    </div>
    <div style="background-color: white" class="client-corporate text-center pb-5 pt-5">
      <div class="container">
      <h6 class="pb-3">{{$t('client.ourClients')}}</h6>
      <div class="client-corporate-logo p-0 m-0 d-flex flex-wrap justify-content-xxl-between justify-content-center">
        <a href="https://uzcard.uz" target="_blank"><img src="../assets/logo/Uzcard.png"></a>
        <a href="https://atto.uz/uz" target="_blank"><img src="../assets/logo/Atto.png"></a>
        <a href="https://igenius.uz" target="_blank"><img src="../assets/logo/Genesis.png"></a>
        <a href="https://arca.uz" target="_blank"><img src="../assets/logo/Arca.png"></a>
        <a href="https://kapitalbank.uz" target="_blank"><img src="../assets/logo/Kapitalbank.png"></a>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import ForClient from "@/components/Client/ForClient";
export default {
  components: {ForClient}
}
</script>