<template>
  <v-app>
    <v-main>
      <v-overlay :model-value="$store.state.isLoading" class="align-center justify-center">
        <v-progress-circular color="primary" size="64" indeterminate/>
      </v-overlay>
      
      <AppNavigation />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from './components/navigations/AppNavigation.vue';


</script>
