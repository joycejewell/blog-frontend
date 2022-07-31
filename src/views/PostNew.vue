<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
    };
  },
  methods: {
    createPost: function () {
      axios
      .post("/post.json" this.newPostParams)
      .then((response) => {
        this.posts = response.data;
        console.log("Great Success!", response.data);
        this.$router.push("/posts")
      });
      .catch((error) => {
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>New Post</h1>
    <div v-for:="post in posts" v-bind:key="post.id">
      <h2>Title: {{ post.recipe }}</h2>
      <img v-bind:src="post.image" v-bind:alt="post.title" />
      <p>Description: {{ post.body }}</p>
    </div>
  </div>
</template>
