<template>
  <ul>
    <li v-for="item in dates">
      {{ item.CodeName }} - {{ age(item.birthday) }}
    </li>
  </ul>
</template>
<style></style>
<script setup lang="ts">
const dates = [
  {
    birthday: "20/04/2013",
    CodeName: "Nibling I",
  },
  {
    birthday: "09/09/2015",
    CodeName: "Nibling II",
  },
  {
    birthday: "28/11/2017",
    CodeName: "Nibling III",
  },
  { birthday: "17/05/1988", CodeName: "Brother" },
  { birthday: "08/06/1966", CodeName: "Mum" },
  {
    birthday: "04/02/1948",
    CodeName: "Maternal GM",
  },
  { birthday: "26/03/1960", CodeName: "Dad" },
  {
    birthday: "08/02/1937",
    CodeName: "Paternal GM",
  },

  { birthday: "03/09/1986", CodeName: "Myself" },
  { birthday: "11/09/1991", CodeName: "GF" },
];

function age(date: string) {
  let birthday = new Date();
  birthday.setHours(0, 0, 0, 0);
  birthday.setDate(parseInt(date.slice(0, 2)));
  birthday.setMonth(parseInt(date.slice(3, 5)) - 1);
  birthday.setFullYear(parseInt(date.slice(6, 10)));
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
</script>
