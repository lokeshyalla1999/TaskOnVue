<template>
  <div class="HomeViewPage">
    <q-page class="column items-center justify-center">
      <div class="q-pa-md PageSizing">
        <q-layout class="vertical-center">
          <q-card class="q-pa-lg cardstyling">
            <div>
              <search-component class="searchbar" />
              <q-btn
                color="primary"
                class="addprofile"
                router-link
                to="/AddProfile"
                label="Add Profile"
              />
            </div>
            <div class="cardsizing">
              <q-card class="cards" v-for="Profile in Profiles" :key="Profile.id">
                <q-img src="">
                  <div class="absolute-bottom">
                    <div>
                      <h6>{{ Profile.First_Name }} {{ Profile.Last_Name }}</h6>
                    </div>
                    <div class="text-subtitle2">{{ Profile.department }}</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat icon="delete" @click="onDelete(Profile.id)" />
                  <q-btn flat icon="favorite" />
                </q-card-actions>
              </q-card>
            </div>
          </q-card>
        </q-layout>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { ref } from "vue";
import router from "@/router";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  components: { SearchComponent },
  setup() {
    const current = ref(6)
    const Profiles = ref<any>([]);
    async function GetData() {
      const res = await axios.get("http://localhost:3000/Profiles");
      Profiles.value = res.data;
      console.log(Profiles.value);
    }

    async function onDelete(id: string) {
      if (confirm("Are you sure want to delete the cards")) {
        const result = await axios.delete(
          "http://localhost:3000/Profiles/" + id
        );
        console.log(result);
        if (result.id === 200) {
          router.push({ name: "HomeView" });
        }
        window.location.reload();
      } else {
        router.push({ name: "HomeView" });
      }
    }

    return {
      GetData,
      onDelete,
      Profiles,
      current
    };
  },
  mounted() {
    this.GetData();
  },
};
</script>
<style scoped>
.HomeViewPage {
  padding-top: 60px;
}
.PageSizing {
  width: 1300px;
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.cardstyling {
  border-radius: 30px;
  border: 3px solid pink;
}
.searchbar{
  border-radius:20px;
}
.addprofile{
  position:absolute;
  right:50px;
  top:45px;
  border-radius: 8px;
}
.cards{
  float: left; 
  width: 290px;
  padding: 10px;
  margin:6px;
  border-radius: 10px;
}
</style>


