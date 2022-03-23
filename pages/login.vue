<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model.trim="form.email"
          name="email"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          v-model.trim="form.password"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Login Page",
    };
  },
  name: "LoginPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
        error: null,
      },
    };
  },
  methods: {
    async submit() {
      try {
        await this.$auth.loginWith("laravelJWT", {
          data: this.form,
        });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
