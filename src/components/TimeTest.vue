<template>
  Local Time:
  <br />
  {{ currentTime }}
  <br />
  Time Zone:
  {{ tz }}
</template>
<script setup lang="ts">
import { ref } from "vue";

const browserData = Intl.DateTimeFormat().resolvedOptions();

const locale = browserData.locale;
const tz = browserData.timeZone;

const currentTime = ref(getCurrentTime());

function getCurrentTime() {
  return new Date().toLocaleString(locale);
}

setInterval(() => {
  currentTime.value = getCurrentTime();
}, 100);
</script>
<style scoped></style>
