<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <header-menu-list>
      <slot name="header"></slot>
    </header-menu-list>
    <main class="flex-fill container-fluid p-0">
      <div class="row">
        <slot></slot>
      </div>
    </main>
    <footer-list>
      <slot name="footer"></slot>
    </footer-list>
  </div>
</template>

<script>
import HeaderMenuList from '@/components/HeaderMenuList'
import FooterList from  '@/components/Footer/FooterList'
export default {
  components: { HeaderMenuList, FooterList }
}
</script>