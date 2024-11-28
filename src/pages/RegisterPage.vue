<template>
  <v-container max-width="600" class="h-75 d-flex flex-column justify-center">
    <div class="border rounded-xl pa-6 bg-surface">
      <h1 class="text-h4 text-center text-uppercase pb-6">Registre-se</h1>
      <VTextFieldNameRegister v-model="payload.name" />
      <VTextFieldEmailRegister v-model="payload.email" />
      <VTextFieldPasswordRegister v-model="payload.password" />
      <VTextFieldPasswordConfirmRegister v-model="payload.password_confirm" />
  
      <VBtnRegister
        :disabled="validations"
        @click="submit"
      />
    </div>
  </v-container>
</template>

<script>
import UserAuthService from "@/services/auth/UserAuthService";

export default {
  data() {
    return {
      payload: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      },
    }
  },
  computed: {
    validations() {
      if(!this.payload.name) return true
      if(!this.payload.email) return true
      if(!this.payload.password) return true
      if(!this.payload.password_confirm) return true
      if(this.payload.password !== this.payload.password_confirm) return true

      return false
    }
  },
  methods: {
    async submit() {
      try {
        this.$store.commit('setIsLoading', true);
        await UserAuthService.register(this.payload);
      } catch (error) {
        console.log(error);
      } finally {
        this.$store.commit('setIsLoading', false);
        this.$router.push({name: 'Home'})
      }
    }
  },
};
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
