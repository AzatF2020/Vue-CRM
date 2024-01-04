<template>
  <VNavBar :isActive="modalState" @openNavBarModal="getNavModalActive"/>
  <div class="container">
    <div class="main">
      <router-view/>
    </div>
  </div>
  <VModal @closeByOverlay="getNavModalActive" :isActive="modalState">
    <VModalNavbar @closeModal="getNavModalActive" :isActive="modalState"/>
  </VModal>
</template>

<script setup>
  import { VNavBar, VModalNavbar, VModal } from "@components";
  import { ref } from "vue";

  const modalState = ref(false)

  function getNavModalActive(state) {
    modalState.value = state
  }
</script>

<style lang="scss" scoped>

</style>