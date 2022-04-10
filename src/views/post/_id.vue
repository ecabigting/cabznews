<template>
    <main class="post-page">
        <!-- Image -->
        <img src="" alt="">
        <!-- Back button -->
        <button>Back</button>
        <!-- title -->
        <!-- Excerpt -->
        <!-- content -->
        <!-- author details -->
    </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import sanity from '../../client'
import { CreateURL } from '../../utils'


export default {
    setup(){
        const route = useRoute()
        const id = ref(route.params.id);
        const post = ref(null);

        onMounted(()=>{
            const query = `*[_type == "post" && _id == $id][0] {...,author => }`
            const params = { id : id.value }

            sanity.fetch(query,params).then(data => {
                post.value = data;
            })
        })

        return {
            post,
            CreateURL
        }
    }
}
</script>