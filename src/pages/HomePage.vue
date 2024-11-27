<template>
  <v-btn
    color="error"
    variant="outlined"
    text="Logout"
    @click="submit"
  />
</template>

<script>
import { getAuth } from "firebase/auth";
import UserAuthService from "@/services/auth/UserAuthService";

export default {
  data() {
    return {
      user: '',
    }
  },
  mounted() {
    const auth = getAuth();
    this.user = auth.currentUser;
  },
  methods: {
    async submit() {
      try {
        this.$store.commit('setIsLoading', true);
        await UserAuthService.logout();
      } catch(error) {
        console.log(error);
      } finally {
        this.$store.commit('setIsLoading', false);
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>
