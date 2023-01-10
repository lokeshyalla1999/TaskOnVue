<template>
  <div class="homeviewpage">
    <search-component class="searchbar" />
    <q-btn color="primary" class="addprofile" router-link to = "/AddProfile" label="Add Prifile" />
    <profile-card  class="profilecard" />
  </div>
</template>

<script lang="ts">
import SearchComponent from '@/components/SearchComponent.vue';
import ProfileCard from "../components/ProfileCard.vue";

export default {
  name: "HomeView",
  components: {ProfileCard,SearchComponent},
  setup() {
    return {
    SearchComponent
      
    };
  },
};
</script>
<style scoped>
.profilecard{
  padding-top : 100px;
  padding-left: 40px;
}
.addprofile{
  position:absolute;
  right:50px;
  top:100px;
}
.searchbar{
  padding-top : 100px;
  padding-left : 40px;
}
</style>


