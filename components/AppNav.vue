<!-- Please remove this file from your project -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Nuxt JS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <template v-if="!loggedIn">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="login">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="register">Register</nuxt-link>
            </li>
          </template>
          <template v-if="isAuthenticated">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">{{ loggedInUser.name }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Logout</nuxt-link>
            </li>
          </template>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppNav",
  
};
</script>
