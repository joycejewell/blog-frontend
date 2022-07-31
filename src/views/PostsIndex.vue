<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts.json").then((response) => {
        this.posts = response.data;
        console.log("All posts: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>All Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>Title: {{ post.title }}</h2>
      <img v-bind:src="post.image_url" v-bind:alt="post.title" />
      <p>Chef: {{ post.chef }}</p>
      <button>More info</button>
    </div>
  </div>
</template>

<style scoped></style>
