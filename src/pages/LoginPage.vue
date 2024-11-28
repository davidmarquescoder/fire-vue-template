<template>
  <v-container max-width="600" class="h-75 d-flex flex-column justify-center">
    <div class="border rounded-xl pa-6 bg-surface">
      <h1 class="text-center text-uppercase mb-6">Faça Login</h1>
      <VTextFieldEmailLogin v-model="payload.email" />
      <VTextFieldPasswordLogin v-model="payload.password" />

      <VBtnLogin
        :disabled="validations"
        @click="submit"
      />
    </div>
  </v-container>
</template>

<script>
import UserAuthService from '@/services/auth/UserAuthService';

export default {
  data() {
    return {
      payload: {
        email: '',
        password: ''
      },
    }
  },
  computed: {
    validations() {
      if(!this.payload.email) return true
      if(!this.payload.password) return true

      return false
    }
  },
  methods: {
    async submit() {
      try {
        this.$store.commit('setIsLoading', true);
        await UserAuthService.login(this.payload);
      } catch(error) {
        console.log(error);
      } finally {
        this.$store.commit('setIsLoading', false);
        this.$router.push({name: 'Home'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-field {
  margin-bottom: 0rem;

  :deep(.v-field) {
    border-radius: 12px;
    transition: all 0.3s ease;
  }
}

.login-button {
  border-radius: 12px;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(99, 21, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(99, 21, 255, 0.3);
  }
}
</style>
