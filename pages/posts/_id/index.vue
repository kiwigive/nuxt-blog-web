<template>
  <SinglePost :post="singlePost"/>
</template>

<script>
import SinglePost from '@/components/posts/SinglePost'
import axios from 'axios'
export default {
  layout: 'coreLayout',
  components: {
    SinglePost
  },
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-web-c0634-default-rtdb.asia-southeast1.firebasedatabase.app/posts/'+ context.params.id +'.json'
      )
      .then((res) => {
        return {
            singlePost: {...res.data, id:context.params.id}
        }
      })
      .catch((e) => context.error(e))
  }
}
</script>