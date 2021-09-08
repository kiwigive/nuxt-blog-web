<template>
  <div class="m-3">
    <nuxt-link to="/admin/posts" class="btn btn-secondary">View posts</nuxt-link>
    <nuxt-link to="/admin/posts/create" class="btn btn-info">Write post</nuxt-link>
  </div>
</template>

<script>
export default {
    layout: "coreLayout"
}
</script>