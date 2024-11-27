<template>
  <v-dialog v-if="currentComponent" v-model="dialog" transition="dialog-bottom-transition" fullscreen>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn :prepend-icon="iconButton" size="small" :text="textButton" v-bind="activatorProps"/>
    </template>

    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"/>
        <v-toolbar-title>{{ titleDrawer }}</v-toolbar-title>
      </v-toolbar>

      <component :is='currentComponent'/>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {
        dialog: false,
      }
    },
    props: {
      textButton: {
        required: true,
        default: 'Ajustes',
        type: String,
      },
      iconButton: {
        required: true,
        default: 'mdi-cog',
        type: String,
      },
      titleDrawer: {
        required: true,
        default: 'Configurações',
        type: String,
      },
      currentComponent: {
        required: true,
        type: String,
      }
    }
  }
</script>
