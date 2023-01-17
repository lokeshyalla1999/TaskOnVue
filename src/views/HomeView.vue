<template>
  <div class="HomeViewPage">
    <q-page class="column items-center justify-center">
      <div class="q-pa-md PageSizing">
        <q-layout class="vertical-center glossy" view="lHh Lpr lFf" >
          <q-card class="q-pa-lg cardstyling">
            <div>
              <div class="inputseachbar">
                <!-- <search-component class="searchbar" filter-method="filteredList" /> -->
                <q-input
                  standout
                  bottom-solts
                  dense
                  V-model="search"
                  hide-bottom-space
                  label="Search"
                >
                  <template #append>
                    <q-icon name="close" class="cursor-pointer" />
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div class="item error" v-if="search && !filteredList().length">
                <p>No results found!</p>
              </div>
              <q-btn
                color="primary"
                class="addprofile"
                router-link
                to="/AddProfile"
                label="Add Profile"
              />
            </div>
            <div class="cardsizing">
              <q-card
                class="cards"
                v-for="Profile in Profiles"
                :key="Profile.id"
              >
                <q-img src="">
                  <div class="absolute-bottom">
                    <div>
                      <h6>{{ Profile.First_Name }} {{ Profile.Last_Name }}</h6>
                    </div>
                    <div class="text-subtitle2">{{ Profile.department }}</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn
                    flat
                    icon="delete"
                    @click="onDelete(Profile.id)"
                    class="btn-delete"
                  />
                  <q-btn flat class="btn-color"
                    ><q-icon name="favorite"
                  /></q-btn>
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
import { IGetData } from "../types/InterfacesAll";
//import SearchComponent from "@/components/SearchComponent.vue";
export default {
  //components: { SearchComponent },
  setup() {
    const Profiles = ref();
    const search = ref();
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

    function filteredList() {
      console.log(Profiles);
      return Profiles.value.filter((Profile) =>
        Profile.toLowerCase().includes(search.value.toLowerCase())
      );
    }
    return {
      filteredList,
      GetData,
      onDelete,
      Profiles,
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
  border: 3px solid rgb(192, 246, 255);
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.searchbar {
  border-radius: 20px;
}
.addprofile {
  position: absolute;
  right: 50px;
  top: 30px;
  border-radius: 8px;
}
.cards {
  float: left;
  width: 290px;
  padding: 10px;
  margin: 6px;
  border-radius: 10px;
}
.btn-color {
  color: black;
}
.btn-color:focus {
  color: green;
}
.btn-color:hover {
  color: red;
}

.btn-delete:hover {
  color: red;
}
* {
  box-sizing: border-box;
}
.inputseachbar {
  width: 400px;
  border: 1px solid blueviolet;
  margin-left: 20px;
}
</style>


