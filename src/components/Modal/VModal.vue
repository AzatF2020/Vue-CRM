<template>
  <Teleport :to="modalPlace">
    <div class="modal-overlay" :class="{'active': isActive}" @click="closeByOverlay"></div>
    <slot/>
  </Teleport>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";

const emit = defineEmits(["closeByOverlay"])
const { modalPlace, isActive} = defineProps({
  modalPlace: {
    type: String,
    default: '#modal'
  },
  isActive: Boolean
})

function closeByOverlay(event) {
  event.stopPropagation()
  emit('closeByOverlay', false)
}

function closeByEsc(event) {
  if(event.key === 'Escape') {
    closeByOverlay(event)
  }
}

onMounted(() =>
  window.addEventListener("keydown", closeByEsc)
)

onUnmounted(() =>
    window.removeEventListener("keydown", closeByEsc)
)

</script>

<style lang="scss" scoped>
  .modal-overlay {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    visibility: hidden;
    cursor: pointer;
    pointer-events: visible;
    transition: background-color .3s ease,
                visibility .3s ease,
                overflow .3s ease;

    &.active {
      background-color: rgba(0, 0, 0, 0.4);
      visibility: visible;
      overflow: visible;
    }
  }
</style>