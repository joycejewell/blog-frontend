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
        .post("/post.json", this.newPostParams)
        .then((response) => {
          this.posts = response.data;
          console.log("Great Success!", response.data);
          this.$router.push("/posts");
        })
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
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        Title:
        <input type="text" v-model="post.title" />
      </div>
      <div>
        Description:
        <input type="text" v-model="post.description" />
      </div>
      <div>
        <input type="submit" value="Submit Post" />
      </div>
    </form>
  </div>
</template>
