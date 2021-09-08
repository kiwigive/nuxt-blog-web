<template>
  <div>
    <h2>This is Admin</h2>
    <b-container>
      <PostList isAdmin :posts="loadData"/>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'

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