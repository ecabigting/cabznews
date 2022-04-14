<template>
  <div class="bg-gray-900 min-h-screen text-white">
    <HeaderNav />
    <SidebarNav/>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import SidebarNav from "./components/SidebarNav.vue"

export default {
  components: {
    HeaderNav,
    SidebarNav
  },
};
</script>

<style>
.btn {
  @apply bg-gray-600 duration-300 font-bold py-3 px-4 rounded-lg inline-block;
}

.btn:hover {
  @apply bg-gray-700;
}
</style>
