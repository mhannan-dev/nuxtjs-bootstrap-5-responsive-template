<template>
  <div class="container">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import AppFooter from '../components/inc/AppFooter.vue';
import AppHeader from '../components/inc/AppHeader.vue';
export default {
  name: "DefaultPage",
  components: {AppHeader, AppFooter},
};
</script>
