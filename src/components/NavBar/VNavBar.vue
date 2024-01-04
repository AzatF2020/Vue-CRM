<template>
  <v-app>
    <v-toolbar>
      <v-btn :variant="'outlined'" class="navbar__burger-btn" @click="changeModalState">
        <v-icon :icon="'mdi-menu'" :size="20"/>
      </v-btn>
    </v-toolbar>
  </v-app>
</template>

<script setup>
const emit = defineEmits(['openNavBarModal'])

function changeModalState() {
  emit('openNavBarModal', true)
}
</script>

<style lang="scss" scoped>
  .navbar {
    &__burger-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: .1rem;

      span {
        width: 1.5rem;
        height: .1rem;
        background-color: black;
      }
    }
  }
</style>