<!-- eslint-disable -->
<template>
  <div>
    <Navigation />
    <router-view />
    <footer class="bg-gray-800 p-4 text-white text-center fixed bottom-0 w-full">
      <p>&copy; 2025 StudyNet</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
</script>
<style lang="scss" >
  @import "./assets/style.scss";
</style>
