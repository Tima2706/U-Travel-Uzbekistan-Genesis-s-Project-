<template>
  <div class="row pt-5 pb-5 g-0 pl-0 pr-0 m-0">
    <div class="client-card d-flex flex-wrap gap-4">
      <div>
        <h5 class="client__sub">{{$t('client.title')}}</h5>
        <p class="client__subtitle"><span style="color: black; font-weight: 600">U-TRAVEL </span>{{$t('client.titleSubtitle')}}</p>
      </div>
    <div class="col-xxl-5 col-sm-12 ">
      <img style="width: 100%; height: 92%" src="../../assets/images/img.png" alt="#img">
    </div>
      <div class="col-xxl-5 col-sm-12 client-card_txt">
        <p class="client__text"><span style="color: black; font-weight: 600">MICE </span>{{$t('client.caption')}}</p>
        <p class="client__text">
          <br>Meetings — встречи.
          <br>Incentives — поощрительные поездки.
          <br>Conferences — конференции.
          <br>Exhibitions — выставки.
        </p>
        <p class="client__text">
          <br>{{$t('client.text')}}
          <br>{{$t('client.firstCard.text1')}}
          <br>{{$t('client.firstCard.text2')}}
          <br>{{$t('client.firstCard.text3')}}
          <br>{{$t('client.firstCard.text4')}}
          <br>{{$t('client.firstCard.text5')}}
          <br>{{$t('client.firstCard.text6')}}
          <br>{{$t('client.firstCard.text7')}}
          <br>{{$t('client.firstCard.text8')}}
          <br>{{$t('client.firstCard.text9')}}
          <br>{{$t('client.firstCard.text10')}}
          <br>{{$t('client.firstCard.text11')}}
          <br>{{$t('client.firstCard.text12')}}
        </p>
      </div>
      <div class="col-12 ">
        <div class="client-info">
          <h5>{{$t('client.exhibition')}}</h5>
          <p class="client__text client__text-second">
            {{$t('client.conferences.text1')}}
            <br>{{$t('client.conferences.text2')}}
            <br>{{$t('client.conferences.text3')}}
            <br>{{$t('client.conferences.text4')}}
            <br>{{$t('client.conferences.text5')}}
            <br>{{$t('client.conferences.text6')}}
            <br>{{$t('client.conferences.text7')}}
            <br>{{$t('client.conferences.text8')}}
            <br>{{$t('client.conferences.text9')}}
            <br>{{$t('client.conferences.text10')}}
            <br>{{$t('client.conferences.text11')}}
            <br>{{$t('client.conferences.text12')}}
            <br>{{$t('client.conferences.text13')}}
            <br>{{$t('client.conferences.text14')}}
            <br>{{$t('client.conferences.text15')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.trip.title')}}</h5>
          <p class="client__text">
            {{$t('client.trip.text')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.incentive.title')}}</h5>
          <p class="client__text">
            {{$t('client.incentive.text')}}
            <br>{{$t('client.incentive.text1')}}
            <br>{{$t('client.incentive.text2')}}
            <br>
            <br>{{$t('client.incentive.text3')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.offers.title')}}</h5>
          <p class="client__text client__text-second">
            {{$t('client.offers.link1')}}
            <br>{{$t('client.offers.link2')}}
            <br>{{$t('client.offers.link3')}}
            <br>{{$t('client.offers.link4')}}
            <br>{{$t('client.offers.link5')}}
            <br>{{$t('client.offers.link6')}}
            <br>{{$t('client.offers.link7')}}
            <br>{{$t('client.offers.link8')}}
            <br>{{$t('client.offers.link9')}}
            <br>{{$t('client.offers.link10')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.corporate.title')}}</h5>
          <p class="client__text">
            {{$t('client.corporate.text')}}
            <br>
            <br>{{$t('client.corporate.text1')}}
            <br>
            <br>{{$t('client.corporate.text2')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.organization.title')}}</h5>
          <p class="client__text client__text-second">
            {{$t('client.organization.text')}}
            <br>{{$t('client.organization.text1')}}
            <br>{{$t('client.organization.text2')}}
            <br>{{$t('client.organization.text3')}}
            <br>{{$t('client.organization.text4')}}
          </p>
        </div>
        <div class="client-info">
          <h5>{{$t('client.build.title')}}</h5>
          <p class="client__text">
            {{$t('client.build.text')}}
            <br>{{$t('client.build.text1')}}
          </p>
          <p class="client__text"><span style="color: black; font-weight: 700;font-size: 16px">{{$t('client.build.span')}}</span>{{$t('client.build.text2')}}</p>
          <p class="client__text"><span style="color: black; font-weight: 700;font-size: 16px">{{$t('client.build.span1')}}</span>{{$t('client.build.text3')}}</p>
          <span style="color: black; font-weight: 700;font-size: 16px">{{$t('client.build.span2')}}</span>
          <p class="client__text client__text-second">
            {{$t('client.build.link')}}
            <br>{{$t('client.build.link1')}}
            <br>{{$t('client.build.link2')}}
            <br>{{$t('client.build.link3')}}
            <br>{{$t('client.build.link4')}}
            <br>{{$t('client.build.link5')}}
            <br>{{$t('client.build.link6')}}
            <br>{{$t('client.build.link7')}}
            <br>{{$t('client.build.link8')}}
          </p>
          <span style="color: black; font-weight: 700;font-size: 16px">{{$t('client.build.span3')}}</span>
          <p class="client__text client__text-second">
            {{$t('client.build.subtitle')}}
            <br>{{$t('client.build.subtitle1')}}
            <br>{{$t('client.build.subtitle2')}}
            <br>{{$t('client.build.subtitle3')}}
          </p>
        </div>
      </div>
      <div class="client-info">
        <h5>{{$t('client.outdoor.title')}}</h5>
        <p class="client__text ">
          {{$t('client.outdoor.text')}}
          <br>{{$t('client.outdoor.text1')}}
          <br>
          <br>{{$t('client.outdoor.text2')}}
          <br>{{$t('client.outdoor.text3')}}
          <br>{{$t('client.outdoor.text4')}}
          <br>{{$t('client.outdoor.text5')}}
          <br>
          <br>{{$t('client.outdoor.text6')}}
          <br>{{$t('client.outdoor.text7')}}
          <br>{{$t('client.outdoor.text8')}}
        </p>
        <h6 style="color: black; font-weight: 700;font-size: 16px">{{$t('client.outdoor.span')}}</h6>
        <p class="client__text client__text-second">
          {{$t('client.outdoor.link')}}
          <br>{{$t('client.outdoor.link1')}}
          <br>{{$t('client.outdoor.link2')}}
          <br>{{$t('client.outdoor.link3')}}
          <br>{{$t('client.outdoor.link4')}}
          <br>{{$t('client.outdoor.link5')}}
          <br>{{$t('client.outdoor.link6')}}
          <br>{{$t('client.outdoor.link7')}}
          <br>{{$t('client.outdoor.link8')}}
          <br>{{$t('client.outdoor.link9')}}

        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

/* The container <div> - needed to position the dropdown content */
.dropdown {
  padding-bottom: 350px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #E0EDF4
}
.dropdown-content a:first-child {background-color: #E0EDF4
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #E0EDF4;
}
</style>


<!--    <div class="col-xxl-5 col-sm-12 client-card_txt">-->
<!--      <h4 class="client__sub" >{{$t('client.caption')}}</h4>-->
<!--      <p class="client__text">{{$t('client.text')}}</p>-->
<!--      <p class="client__text">{{$t('client.text1')}}</p>-->
<!--      <p class="client__text">{{$t('client.text2')}}</p>-->
<!--      <p class="client__text">{{$t('client.text3')}}</p>-->
<!--   </div>-->