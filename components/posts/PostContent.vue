<template>
  <b-col md="4">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ content.slice(0,180) + "..." }}
      </b-card-text>

      <nuxt-link class="btn btn-dark" :to="postLink">
        {{isAdmin ? "Edit" : "Read"}}
      </nuxt-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>