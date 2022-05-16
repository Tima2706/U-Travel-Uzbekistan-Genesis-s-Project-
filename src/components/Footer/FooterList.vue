<template>
  <footer  class="footer" style="padding-bottom: 30px">
    <div class="container">
      <div class="row footer-inner justify-content-sm-center align-items-sm-center d-flex flex-wrap gap-3">
        <div class="col-xxl-3 col-lg-3  col-sm-6"  >
          <p class="footer__text">{{$t('footer.text-start')}}</p>
        </div>
        <div class="col-xxl-2 col-lg-2 col-sm-6 footer__contact">
          <div class="footer__item d-flex" style="align-self: center; justify-content: center" >
            <img class="footer__img" src="../../assets/icons/telephone.png" alt="#telephone">
            <p class="footer__sub" style=";color: white;padding-bottom: 5px; margin: 0"><span class="footer__number">+(998)78 120 77-22</span></p>
          </div>
          <div class="footer__item" style="display: flex; justify-content: center; align-items: center">
              <a class="footer__call" href="#" style="text-decoration: none; color: #ffffff; ">{{$t('footer.call')}}</a>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-sm-6 footer_license">
          <p class="footer__text">{{$t('footer.text')}}</p>
        </div>
        <div class="col-xxl-2 col-lg-2 col-sm-6 d-flex footer__icons" style="gap: 20px; justify-content: center">
          <a href="https://twitter.com/" target="_blank"><img src="../../assets/icons/twitter.png" alt="#twitter"></a>
          <a href="https://www.instagram.com/" target="_blank"><img src="../../assets/icons/instagram.png" alt="#instagram"></a>
          <a href="https://facebook.com/" target="_blank"><img src="../../assets/icons/facebook.png" alt="#facebook"></a>
          <a href="https://in.com/" target="_blank"><img src="../../assets/icons/in.png" alt="#in"></a>
        </div>
      </div>
    </div>
  </footer>
</template>