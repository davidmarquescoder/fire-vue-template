<template>
  <v-app>
    <v-main>
      <v-overlay
        :model-value="$store.state.isLoading"
        class="align-center justify-center"
      >
        <v-progress-circular
          color="primary"
          size="64"
          indeterminate
        />
      </v-overlay>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>

</script>
