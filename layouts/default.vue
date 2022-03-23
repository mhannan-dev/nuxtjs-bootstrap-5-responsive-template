<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">Nuxt JS</nuxt-link>
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
            <nuxt-link class="nav-link"
            to="/"
              >Home <span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="register">Register</nuxt-link>
          </li>
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
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'DefaultPage',
  components: {}
}
</script>
