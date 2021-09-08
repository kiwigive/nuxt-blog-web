<template>
  <b-container fluid="md" class="py-5">
    <h2 align="center">Write new post</h2>
    <b-form @submit = "onSubmit">
      <b-form-group label="Title">
        <b-form-input
          autofocus
          type="text"
          placeholder="Enter title"
          v-model="form.title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Details">
        <b-form-textarea
          placeholder="Enter details"
          rows="8"
          v-model="form.content"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Image (URL)">
        <b-form-input
          type="text"
          placeholder="Link of your image"
          v-model="form.image"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Name">
        <b-form-input
          type="text"
          placeholder="Enter your name"
          v-model="form.author"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="btn btn-dark">Submit</b-button>
      <b-button type="reset" class="btn btn-secondary">Clear</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: this.post ? {...this.post} : {
        title: '',
        content: '',
        image: '',
        author: '',
      },
    }
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit(event) {
        this.$emit('sendData', this.form)
      }
    }
}
</script>