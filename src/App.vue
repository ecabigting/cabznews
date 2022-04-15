<template>
  <div class="bg-gray-900 min-h-screen text-white">
    <HeaderNav />
    <!-- <SidebarNav/> -->
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
// import SidebarNav from "./components/SidebarNav.vue"

export default {
  components: {
    HeaderNav
    // SidebarNav
  },
};
</script>

<style>
.btn {
  @apply bg-gray-600 duration-300 font-bold py-1 px-2 rounded-lg mr-4 inline-block;
}

.btn:hover {
  @apply bg-gray-700;
}

.mainCard{
  
}
</style>
