<template>
  <AdminForm @sendData="onSubmitted" :post="singlePost"/>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
  layout: 'coreLayout',
  components: {
    AdminForm,
  },
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-web-c0634-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+ context.params.id+'.json'
      )
      .then((res) => {
        return {
            singlePost: {...res.data, id:context.params.id}
        }
      })
      .catch((e) => context.error(e))
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('editPost', postData)
      this.$router.push('/admin/posts/')
    }
  }
}
</script>