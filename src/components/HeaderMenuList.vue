<template>
  <div class="navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand   order-sm-2 order-xl-2 order-lg-2 order-2" href="#"><img src="../assets/logo/image.png" alt="#logo"></a>
          <button class="navbar-toggler order-xl-1 order-sm-1 order-lg-1 order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse order-xxl-2 order-4 " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style="flex-grow: 1; justify-content: center ">
              <a href="/" style="font-weight: 600; color: #083590; padding-left: 20px" class="nav-link active navbar__text">{{ $t('home.main') }}</a>
              <li class="nav-item navbar__text " v-for="(menu, index) in navbarList" :key="index">
                <router-link  class="nav-link " aria-current="page" :to="menu.path">
                    {{menu[`name_${$i18n.locale}`]}}
                </router-link>
              </li>
            </ul>
            <div class="navbar__contacts">
                <div class="navbar__item">
                  <img style="width: 18px; height: 18px" src="../assets/icons/Vector.png">
                  <p class="navbar__number">+(998)<span>78 120-77-22</span></p>
                </div>
                <div class="navbar__item">
                  <a style="cursor: pointer; " class="navbar__order">{{$t('home.call')}}</a>
                </div>
            </div>
          </div>
          <div class="navbar__multilingual order-sm-3 order-lg-4 order-xl-4 order-xxl-4 order-3">
            <div class="dropdown">
              <button @click="setShow" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                <a class="lang" href="#" @click="setLocale('ru')"><flag iso="ru"></flag> Ru</a>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a class="lang" href="#" @click="setLocale('en')"><flag iso="us"></flag> En</a></li>
                <li><a class="lang" href="#" @click="setLocale('uz')"><flag iso="uz"></flag> Uz</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import {navbarList} from '@/Constants JS/navbarList'

export default {
  data() {
    return{
      navbarList: navbarList
    }
  },
  methods: {
    setLocale(locale){
      this.$i18n.locale = locale
    },
  }
}
</script>
<style lang="scss" scoped>
.btn-secondary{
  background-color: white;
  border-color: white;
  color: #6c757d;
  background: none;
  &:hover{
    color: white;
    border-color: white;
    color: #6c757d;
  }
}
.lang{
  text-decoration: none;
  color: black;
}
.dropdown-menu {
  min-width: 3rem;
  text-align: center;
}
</style>