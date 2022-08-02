<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
      errors: [],
    };
  },
  methods: {
    showPost: function () {
      axios.get("/posts/" + this.$route.params.id + ".json").then((response) => {
        this.post = response.data;
        console.log("One post:", response.data);
      });
    },
    editPost: function () {
      axios
        .patch("/posts/" + this.$route.params.id + ".json", this.post)
        .then((response) => {
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
    <h1>Edit Post</h1>
    <form v-on:submit.prevent="editPost()">
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
    </form>
  </div>
</template>
