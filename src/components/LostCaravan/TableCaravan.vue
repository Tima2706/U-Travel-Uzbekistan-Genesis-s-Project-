<template>
   <h5 v-for="t in translate" :key="t.id"  class="pt-5" style="font-size: 24px; font-weight: 800">{{t[`TitleTable_${$i18n.locale}`]}}</h5>
  <h6 v-for="t in translate" :key="t.id"  class="pt-2" style="font-size: 20px; font-weight: 700">{{t[`peopleText_${$i18n.locale}`]}}</h6>
  <div class="row pb-5 pt-3 gap-3">
    <div class="col">
      <h6 v-for="t in translate" :key="t.id"  class="pb-2" style="font-size: 16px; font-weight: 700">{{t[`liveText_${$i18n.locale}`]}}</h6>
      <table>
        <tr>
          <th class="city">Город</th>
          <th class="city">Гостиницы (бутики) 4*</th>
          <th class="city">Кол.-во ночей</th>
        </tr>
        <tr>
          <td class="city-link">Хива</td>
          <td>ZARAFSHAN BOUTIQUE
            MINOR BOTIQUE</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="city-link">Бухара</td>
          <td>KAVSAR BOUTIQUR,
            VOLIDA BOUTIQUE,
            RAYYAN BOUTIQUE</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="city-link">Янгиказган</td>
          <td>ГОСТЕВОЙ ДОМ</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="city-link">Юртовый лагерь</td>
          <td>ЮРТЫ</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="city-link">Самарканд</td>
          <td>MINOR  BOUTIQUE,
            REGISTON SAROY HOTEL
            ARBA HOTEL</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="city-link">Ташкент</td>
          <td>QUSHBEGI PLAZA,
            NAVRUZ HOTEL,
            ART DELUXE HOTEL</td>
          <td>1</td>
        </tr>
      </table>
    </div>
    <div class="col">
      <h6 v-for="t in translate" :key="t.id"  class="pb-2" style="font-size: 16px; font-weight: 700">{{t[`tourTitle_${$i18n.locale}`]}}</h6>
      <p v-for="t in translate" :key="t.id"  style="padding-left: 10px"  class="information__text">
        {{t[`tourLink_${$i18n.locale}`]}}
        <br>{{t[`tourLink1_${$i18n.locale}`]}}
        <br>{{t[`tourLink2_${$i18n.locale}`]}}
        <br>{{t[`tourLink3_${$i18n.locale}`]}}
        <br>{{t[`tourLink4_${$i18n.locale}`]}}
        <br>{{t[`tourLink5_${$i18n.locale}`]}}
        <br>{{t[`tourLink6_${$i18n.locale}`]}}
      </p>
      <h6 v-for="t in translate" :key="t.id" style="font-size: 16px; font-weight: 700">{{t[`thenText_${$i18n.locale}`]}}</h6>
      <p v-for="t in translate" :key="t.id" style="padding-left: 10px" class="information__text">{{t[`thenLink_${$i18n.locale}`]}}
        <br>{{t[`thenLink1_${$i18n.locale}`]}}
        <br>{{t[`thenLink2_${$i18n.locale}`]}}</p>
    </div>
  </div>
</template>

<script>
import {caravanMAin} from "@/Constants JS/zaminImages";
export default {
  data() {
    return{
      translate: caravanMAin,
    }
  }
}
</script>
<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);

  border: 1px solid transparent;
}
td, th {
  border: 1px solid #D5E3EB;
  font-size: 14px;
  padding: 18px 30px;
  text-align: center;
  font-weight: 600;
}

tr {
  background-color: white;
}
.city{
  background-color: #E0EDF4;
  color: #8AAEC1;
  font-weight: 700;
  font-size: 14px;
}
.city-link{
  font-weight: 600;
  background-color: #EFF7FB;
}
</style>