<template>
   <h5 class="pt-5" style="font-size: 24px; font-weight: 800">СТОИМОСТЬ ТУРА «В ПОИСКАХ ЗАТЕРЯННОГО КАРАВАНА»</h5>
  <h6 class="pt-2" style="font-size: 20px; font-weight: 700">На 1-го взрослого человека 780 долларов при группе от 10 человек.</h6>
  <div class="row pb-5 pt-3 gap-3">
    <div class="col">
      <h6 class="pb-2" style="font-size: 16px; font-weight: 700">Проживание в следующих отелях:</h6>
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
      <h6 class="pb-2" style="font-size: 16px; font-weight: 700">В стоимость тура также включено:</h6>
      <p style="padding-left: 10px"  class="information__text">
        •Туристический автомобиль с кондиционером с водителем во время поездки, трансферов.
        <br>•Проживание в отелях, включая завтрак.
        <br>•Услуги гида во время всего тура.
        <br>•Все входные билеты на объекты, указанные в программе путешествия.
        <br>•Билет на поезд «Шарк» Ургенч-Бухара, скоростной поезд Talgo-Афросиаб, Самарканд Ташкент.
        <br>•Питание (обед/ужин), за исключением последнего свободного дня в Ташкенте.
        <br>•Круглосуточная агентская поддержка.
      </p>
      <h6 style="font-size: 16px; font-weight: 700">В стоимость тура не включено:</h6>
      <p style="padding-left: 10px" class="information__text">•Личные расходы, дополнительные услуги.
        <br>•Международные авиабилеты туда и обратно.
        <br>•ПЦР тест.</p>
    </div>
  </div>
</template>

<script>
export default {

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