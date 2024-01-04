<template>
  <div class="modal-nav" :class="{'active': isActive}">
    <aside class="modal-nav__content">
      <router-link class="modal-nav__link" to="/" exact>счет</router-link>
      <router-link class="modal-nav__link" to="/history">история</router-link>
      <router-link class="modal-nav__link" to="/planning">планирование</router-link>
      <router-link class="modal-nav__link" to="/record">новая запись</router-link>
      <router-link class="modal-nav__link" to="/categories">Категории</router-link>
    </aside>
    <button class="modal-nav__close-btn" @click="closeModal">
      <v-icon :icon="'mdi-close'" :size="'3.5rem'"></v-icon>
    </button>
  </div>
</template>

<script setup>
  const { isActive } = defineProps({
    isActive: Boolean
  })

  const emit = defineEmits(['closeModal'])

  function closeModal() {
    emit('closeModal', false)
  }

</script>

<style lang="scss" scoped>
.modal-nav {
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  width: 30%;
  min-width: 26rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-40%);

  transition: opacity .3s ease,
              visibility .3s ease,
              overflow .3s ease,
              transform .3s ease;
  transition-delay: 0s, .75s, .75s, 0s;
  background-color: white;

  &.active {
    opacity: 1;
    visibility: visible;
    overflow: visible;
    transform: translateX(0);
    z-index: 2;

    transition: opacity .3s ease,
                visibility .3s ease,
                overflow .3s ease,
                transform .3s ease;
    transition-delay: .25s, .25s, .25s, .25s;
  }

  &__content {
    padding: 10rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;
    align-items: flex-start;
    position: relative;
  }

  &__link {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 2.2rem;
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    transition: opacity .3s ease;

    &:hover {
      opacity: .45;
    }
  }

  &__close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    transition: opacity .3s ease;

    &:hover {
      opacity: .65;
    }
  }
}
</style>