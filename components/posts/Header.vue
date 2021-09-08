<template>
  <div>
    <b-carousel id="slider" controls indicators>
      <div v-for= "item in items" :key="item.id">
        <b-carousel-slide
          :caption= item.caption
          :text= item.text
          :img-src= item.image
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          caption: 'A',
          image: require('@/assets/img1.jpg'),
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          caption: 'B',
          image: 'https://picsum.photos/1024/480/?image=44',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          caption: 'C',
          image: 'https://picsum.photos/1024/480/?image=50',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
      ],
    }
  },
}
</script>