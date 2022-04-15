<template>
<router-link :to="`/post/${post._id}`" class="mainCard">
  <div class="bg-gray-800 rounded-lg p-2 flex flex-col sm:flex-row">    
    <div class="flex-1 flex flex-col">
      <h3 class="text-lg md:text-xl font-bold mb-1 ml-2">{{ post.title }}</h3>
      <p class="text-gray-500 text-xs mb-2 flex-1 ml-2 mr-3">{{ post.excerpt }}</p>
      <div class="flex sm:flex-col md:flex-row justify-between items-start md:items-end">
        <div class="flex items-0center sm:mb-4 md:mb-0">
          <!-- <img
            v-if="post.author.avatar"
            :src="CreateURL(post.author.avatar, 100, 100)"
            alt=""
            class="rounded-full mr-2 w-12 h-12 ml-1 mb-2"
          /> -->
          <div class="">
            <!-- <p class="text-white mr-4">
              {{ post.author.full_name }}
            </p> -->
            <p class="text-gray-500 text-sm">
              {{ FormatDate(post._createdAt) }}
            </p>
          </div>
        </div>
        <!-- <router-link :to="`/post/${post._id}`" class="btn">...</router-link> -->
      </div>
    </div>
    <img
      v-if="post.image"
      :src="CreateURL(post.image, 150, 114)"
      alt="block w-full sm:max-w-xs mr-4 object-cover mb-4 sm:mb-0"
    />
  </div>
  </router-link>
</template>

<script>
import { FormatDate, CreateURL } from "../utils";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      FormatDate,
      CreateURL,
    };
  },
};
</script>
