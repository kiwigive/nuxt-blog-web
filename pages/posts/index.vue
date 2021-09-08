<template>
  <b-container fluid="100%">
    <Header />
    <b-container>
      <PostList :posts="loadData"/>
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'
import axios from 'axios'

export default {
  layout: 'coreLayout',
  components: {
    Header,
    PostList
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts
    }
  }
}
</script>