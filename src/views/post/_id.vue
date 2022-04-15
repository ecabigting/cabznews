<template>
    <main class="post-page">
        <section v-if="post" class="container mx-auto p-4">
            <img :src="CreateURL(post.image,1280,300)" class="w-full mb-8"/>
            <button 
				@click="$router.replace('/')" 
				class="flex items-center text-lg text-gray-500 hover:text-gray-600 duration-300 mb-4">
				<span class="material-icons text-lg mr-1">keyboard_double_arrow_left</span> Back
			</button>
            <h1 class="text-3xl md:text-5xl mb-8">{{post.title}}</h1>
            <p class="text-gray-500 italic mb-8">{{post.excerpt}}</p>
            <p v-html="TextToHTML(post.content)" class="text-lg mb-8"></p>
            <button 
				@click="$router.replace('/')" 
				class="flex items-center text-lg text-gray-500 hover:text-gray-600 duration-300 mb-4">
				<span class="material-icons text-lg mr-1">keyboard_double_arrow_left</span> Back
			</button>
            <p class="text-gray-500 text-sm">
              {{ FormatDate(post._createdAt) }}
            </p>
            <!-- <div class="flex items-center mb-4">
                <img :src="CreateURL(post.author.avatar,300,300)"
                class="inline-block rounded-full w-12 h-12 mr-4"/>
                <h1>{{post.author.full_name}}</h1>
            </div> -->
            <!-- <div v-if="post.previousPost" class="btn flex-col">
                <router-link :to="`/post/${GetPostId(post.previousPost)}`">Prev</router-link>
            </div>
            <div v-else class=""></div>

            <div v-if="post.nextPost" class="btn flex-col">
                <router-link :to="`/post/${GetPostId(post.nextPost)}`">Next</router-link>
            </div>
            <div v-else class=""></div> -->
            
        </section>
        
        <section v-else class="container mx-auto p-4 text-center">
            <p class="text-white text-2xl mx-auto">
                Loading...
            </p>
        </section>
    </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import sanity from '../../client'
import { CreateURL,TextToHTML,GetPostId,FormatDate } from '../../utils'


export default {
    setup(){
        const route = useRoute()
        const id = ref(route.params.id);
        const post = ref(null);

        onMounted(()=>{
            const query = `*[_type == "post" && _id == $id][0] {...,author ->,
            'previousPost': *[_type == 'post' && _createdAt < ^._createdAt][0]  {_id}  ,
            'nextPost': *[_type == 'post' && _createdAt > ^._createdAt] | order(_createdAt asc)[0] {_id} }`
            const params = { id : id.value }

            sanity.fetch(query,params).then(data => {
                post.value = data;
            })
        })
        
        return {
            post,
            CreateURL,
            TextToHTML,
            GetPostId,
            FormatDate
        }
    }
}
</script>