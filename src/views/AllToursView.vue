<template>
  <div class="alltours">
    <div class="container">
      <div class="alltours-text" >
        <h2 style="text-transform: uppercase" class="alltours-text__text">{{$t('alltours.text')}}</h2>
      </div>
        <all-tours></all-tours>
    </div>
  </div>
</template>
<script>
import AllTours from '@/components/AllTours/AllTours'
export default {
  components: { AllTours }
}
</script>