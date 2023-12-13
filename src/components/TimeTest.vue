<template>
  <div class="test">
    <strong>Local Time:</strong> {{ currentTime }}
    <br />
    <strong>Time Zone:</strong> {{ browserData.timeZone }}
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
<style scoped></style>
