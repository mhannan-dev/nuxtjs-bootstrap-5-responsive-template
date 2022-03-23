<template>
  <div>
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
export default {
  name: "DefaultPage",
  components: {AppHeader, AppFooter},
};
</script>
