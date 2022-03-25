<template>
  <div>
    <app-slider />
    <about-page/>
    <service-page/>
    <!-- Contact -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-8 text-center">
          <h1>If you have any query ?</h1>
          <h4>Please reach us and at</h4>
        </div>
        <div class="col-md-4 text-center">
          <nuxt-link
            to="/contact"
            class="my_button"
            >Contact Me</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutPage from '../components/inc/AboutPage.vue';
import AppSlider from "../components/inc/AppSlider.vue";
import ServicePage from '../components/inc/ServicePage.vue';
export default {
  components: { AppSlider, AboutPage, ServicePage },
  head: {
    title: "Home page",
    meta: [
      {
        hid: "Home description",
        name: "home description",
        content: "my website description",
      },
      {
        hid: "Home keyword",
        name: "home keyword name",
        content: "my website keyword description",
      },
    ],
  },
};
</script>
<style lang="css"></style>
