<template>
  <q-layout view="lHh Lpr lFf">
    <!--laylot =  designed to manage the entire window  -->
    <q-header elevated class="glossy">
      <!--- header = to write headings in navbar -->
      <q-toolbar>
        <!-- toolbar = to design the nav bar or footer -->
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <!-- btn = clickabe button -->
        <q-btn flat router-link to="/">Task</q-btn
        ><!--routing navigation to Homepage-->  
        <div>
          <q-btn flat router-link to="/SignPage">Sign</q-btn>
          <!--routing navigation to sign page-->
          <q-btn flat router-link to="/LoginPage">Login</q-btn>
          <!--routing navigation to login page-->
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <!-- drawer = it provied the side based panel and it is clickable in-->
      <q-list>
        <!-- to list the items -->
        <q-item-label header>Essential Links</q-item-label>
        <DrawerPage />
        <!-- to write defualt content -->
      </q-list>
    </q-drawer>
    <router-view />
    <!-- to display the component-->
    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import DrawerPage from "./components/DrawerPage.vue";
export default {
    setup() {
        return {
            leftDrawerOpen: ref(false),
            // links,
        };
    },
    components: { DrawerPage }
};
</script>

<style>
</style>