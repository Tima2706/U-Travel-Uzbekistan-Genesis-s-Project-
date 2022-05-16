<template>
  <main-container>
    <template v-slot:header>
      <header-menu-list/>
    </template>
    <main>
      <router-view/>
    </main>
    <template v-slot:footer>
    <footer-list/>
    </template>
  </main-container>
</template>

<style lang="scss">

</style>
<script>
import MainContainer from '@/components/MainContainer/MainContainer'
import HeaderMenuList from '@/components/HeaderMenuList'
import FooterList from  '@/components/Footer/FooterList'
export default {
  components: {FooterList, HeaderMenuList, MainContainer},
}
</script>