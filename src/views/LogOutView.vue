<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  },
};
</script>

<template>
  <div class="logout"></div>
  <router-link to="/logout">LogUut</router-link>
</template>
