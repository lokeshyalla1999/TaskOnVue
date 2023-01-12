<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-btn
          flat
          router-link to="/">HomePage</q-btn>
        <div class="buttons">
          <q-btn flat router-link to="/SignPage">Sign</q-btn>
          <q-btn 
          flat 
          router-link to="/LoginPage">Login</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
          <DrawerPage />
      </q-list>
    </q-drawer>
    <router-view />
  </q-layout>
</template>

<script>
import { ref } from "vue";
import DrawerPage from "./components/DrawerPage.vue";
export default {
    setup() {
        return {
            leftDrawerOpen: ref(false),
        };
    },
    components: { DrawerPage }
};
</script>

<style>
.buttons{
  position: absolute;
  right: 0px;
}
</style>