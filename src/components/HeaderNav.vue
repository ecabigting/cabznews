<template>
  <header class="flex w-full items-center justify-center p-4">
    <div
      :class="`menu-toggle relative z-50
       ${menu_is_active ? 'is_active' : ''}`"
      @click="ToggleMenu"
    ></div>

    <div class="hamburger">
      <span></span>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const ToggleMenu = () => {
      store.dispatch('ToggleMenu')
    }

    return {
      menu_is_active: computed(() => store.state.menu_is_active),
      ToggleMenu
    };
  },
};
</script>
