<template>
  <div class="navbar-wrapper">
    <v-app-bar height="70">
      <!-- Mobile Menu Button -->
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up nav-icon"/>
      </template>

      <!-- Logo -->
      <v-app-bar-title>
        <div class="logo-container">
          <span class="text-h5 font-weight-light gradient-text text-uppercase">Minha<span class="font-weight-bold">Logo</span></span>
        </div>
      </v-app-bar-title>

      <!-- Desktop Navigation -->
      <template v-slot:append>
        <v-container class="hidden-sm-and-down">
          <v-slide-x-transition group>
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              :to="{name: item.path}"
              variant="text"
              class="nav-btn mx-1 text-uppercase"
              :ripple="false"
            >
              <span class="nav-text">{{ item.title }}</span>
              <div class="nav-btn-underline"></div>
            </v-btn>
          </v-slide-x-transition>
          
          <v-divider vertical class="mx-4 divider-custom"></v-divider>
          
          <!-- Actions -->
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
        </v-container>
      </template>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="left" class="drawer-custom">
      <v-list class="pa-4">        
        <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="{name: item.path}"
        :prepend-icon="item.icon"
        :title="item.title"
        class="text-uppercase"
        rounded="lg"/>
        
        <v-divider class="my-4 divider-custom"></v-divider>
        
        <LoginButton class="my-2" block/>
        <RegisterButton class="my-2" block/>
        <LogoutButton class="my-2" block/>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LoginButton from './actions/LoginButton.vue';
import RegisterButton from './actions/RegisterButton.vue';

export default {
    data() {
        return {
            drawer: false,
            menuItems: [
                { title: 'Home', icon: 'mdi-home', path: 'Home' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  .nav-scrolled {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9) !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .gradient-text {
    background: linear-gradient(45deg, #1976D2, #42A5F5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-btn {
    position: relative;
    height: 70px;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: none;
    transition: all 0.3s ease;
    
    .nav-text {
      position: relative;
      z-index: 1;
    }

    .nav-btn-underline {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 3px;
      background: linear-gradient(45deg, #1976D2, #42A5F5);
      transform: translateX(-50%);
      transition: width 0.3s ease;
      border-radius: 4px 4px 0 0;
    }

    &:hover {
      background: transparent;
      
      .nav-btn-underline {
        width: 100%;
      }
    }
  }

  .divider-custom {
    opacity: 0.1;
  }

  .drawer-custom {
    .drawer-item {
      margin-inline: -16px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(25, 118, 210, 0.05);
        color: #1976D2;
      }
    }
  }

  .nav-icon {
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
}

// Transitions
.v-slide-x-transition-enter-active,
.v-slide-x-transition-leave-active {
  transition: all 0.3s ease;
}

.v-slide-x-transition-enter-from,
.v-slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>