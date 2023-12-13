<template>
  <div class="test">
    Local Time:
    {{ currentTime }}
    <br />
    Time Zone:
    {{ browserData.timeZone }}
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const browserData = Intl.DateTimeFormat().resolvedOptions();

const currentTime = ref(getCurrentTime());

function getCurrentTime() {
  return new Date().toLocaleString(browserData.locale);
}

setInterval(() => {
  currentTime.value = getCurrentTime();
}, 100);
</script>
<style scoped>
.test {
  outline: 1px solid gold;
}
</style>
