// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VTextField } from 'vuetify/components/VTextField'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  aliases: {
    // NOTE LOGIN FORM
    VTextFieldEmailLogin: VTextField,
    VTextFieldPasswordLogin: VTextField,
    VBtnLogin: VBtn,

    // NOTE REGISTER FORM
    VTextFieldNameRegister: VTextField,
    VTextFieldEmailRegister: VTextField,
    VTextFieldPasswordRegister: VTextField,
    VTextFieldPasswordConfirmRegister: VTextField,
    VBtnRegister: VBtn,
  },
  defaults: {
    // NOTE LOGIN FORM
    VTextFieldEmailLogin: {
      placeholder: 'Informe seu e-mail',
      prependInnerIcon: 'mdi-email',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'E-mail',
      type: 'email',
      clearable: true,
    },
    VTextFieldPasswordLogin: {
      placeholder: 'Informe sua senha',
      prependInnerIcon: 'mdi-lock',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'Senha',
      type: 'password',
      clearable: true,
    },
    VBtnLogin: {
      appendIcon: 'mdi-login',
      class: 'login-button',
      variant: 'outlined',
      color: 'primary',
      size: 'large',
      text: 'LOGAR',
      block: true,
    },

    // NOTE REGISTER FORM
    VTextFieldNameRegister: {
      placeholder: 'Informe seu nome',
      prependInnerIcon: 'mdi-account',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'Nome',
      type: 'text',
      clearable: true,
    },
    VTextFieldEmailRegister: {
      placeholder: 'Informe seu e-mail',
      prependInnerIcon: 'mdi-email',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'E-mail',
      type: 'email',
      clearable: true,
    },
    VTextFieldPasswordRegister: {
      placeholder: 'Informe sua senha',
      prependInnerIcon: 'mdi-lock',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'Senha',
      type: 'password',
      clearable: true,
    },
    VTextFieldPasswordConfirmRegister: {
      placeholder: 'Confirme sua senha',
      prependInnerIcon: 'mdi-lock-check',
      class: 'form-field',
      variant: 'outlined',
      color: 'primary',
      label: 'Confirmação',
      type: 'password',
      clearable: true,
    },
    VBtnRegister: {
      appendIcon: 'mdi-send',
      class: 'login-button',
      variant: 'outlined',
      color: 'primary',
      size: 'large',
      text: 'Enviar',
      block: true,
    },
  },
})