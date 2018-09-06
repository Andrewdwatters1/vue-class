<template>
    <div class="login-main-container">
        <form v-on:submit.prevent="checkLogin">
          <input placeholder="username" v-model="usernameInput"/>
          <input placeholder="password" v-model="passwordInput"/>
          <button type="submit">Login</button>
        </form>
        {{loggedIn}}
    </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      usernameInput: "",
      passwordInput: ""
    };
  },
  methods: {
    checkLogin: function() {
      if (this.usernameInput && this.passwordInput) {
        this.$store.commit("login");
        this.$router.push({ path: "/dashboard" });
        // console.log(this.$store.state) // $ here references the store obj given to us by vue/vuex
      }
    }
  },
  computed: {
    loggedIn: function() {
      if (this.$store.state.loggedIn) {
        this.$router.push({ path: "/dashboard" });
      }
      return "Please log in";
    }
  }
};
</script>