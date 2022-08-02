<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: [],
    };
  },
  created: function () {
    this.showPosts();
  },
  methods: {
    showPosts: function () {
      axios.get("/posts/" + this.$route.params.id + ".json").then((response) => {
        this.post = response.data;
        console.log("All posts: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <img v-bind:src="post.image_url" v-bind:alt="post.title" />
    <p>Title: {{ post.title }}</p>
    <a v-bind:href="`/posts/${post.id}/edit`">Edit Recipe</a>
    <br />
    <a href="/posts">Back to all Posts</a>
  </div>
</template>

<style scoped></style>
