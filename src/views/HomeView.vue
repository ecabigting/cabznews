<template>
  <main class="home">
    <section class="container mx-auto p-4">
      <h1 class="text-2xl mb-8">Latest Post</h1>
      <div class="grid gap-4"></div>
    </section>
  </main>
</template>

<script>
import { onMounted, onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import sanity from "../client";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  setup() {
    const subscription = ref(null);
    const store = userStore();

    const posts = computed(() => store.getters.posts);

    onMounted(()=>{
      store.dispatch("FetchPosts",3)

    })
  },
};
</script>
