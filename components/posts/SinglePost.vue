<template>
  <b-container fluid="md" class="py-5">
      <b-row>
          <b-col lg="12" class="py-5">
              <h1 class="mt-4">{{singlePost.title}}</h1>
              <p>by {{singlePost.author}}</p>
              <hr>
              <b-img style="max-width: 800px" :src="singlePost.image"></b-img>
              <hr>
              <p>{{singlePost.content}}</p>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
        singlePost: {...this.post}
      }
    }
  ,
  props: {
    post: {
      type: Object,
      required: false
    }
  }
}
</script>