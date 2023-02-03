<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="background">
        <q-btn
          flat
          dense
          round
          router-link to="/"
          aria-label="Menu"
          icon="home"
        />
        
        <q-btn
          flat
          router-link to="/">HomePage</q-btn>
          <q-btn
            flat
            dense
            router-link
            to="/AddProfile"
            label="Add Profile"
          />
        <div class="buttons">
          <q-btn 
          flat 
          router-link to="/LoginPage">Login</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <router-view />
  </q-layout>
</template>


<style>
.buttons{
  position: absolute;
  right: 0px;
}
.background{
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>