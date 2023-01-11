<template>
  <q-page class="column items-center justify-center totalpage">
    <div class="q-pa-md bg-image">
      <q-layout class="vertical-center">
        <q-card class="q-pa-lg cardsize">
          <div class="homeviewpage">
            <search-component class="searchbar" />
            <q-btn
              color="primary"
              class="addprofile"
              router-link
              to="/AddProfile"
              label="Add Prifile"
            />
          </div>
          <div class="profilecard">
            <profile-card class="image" />
          </div>
        </q-card>
      </q-layout>
    </div>
  </q-page>
</template>

<script lang="ts">
import SearchComponent from "@/components/SearchComponent.vue";
import ProfileCard from "../components/ProfileCard.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: { ProfileCard, SearchComponent },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.profilecard {
  padding: 15px;
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid black 2px;
}
.cardsize {
  width: 1300px;
}
.addprofile {
  position: absolute;
  right: 40px;
  top: 40px;
}
.totalpage {
  padding-top: 60px;
}
</style>


