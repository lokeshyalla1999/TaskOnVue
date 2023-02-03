<template>
  <div class="PageSizing">
    <q-page class="column items-center justify-center">
      <div class="q-pa-md">
        <q-layout class="vertical-center glossy" view="lHh Lpr lFf">
          <div class="inputseachbar">
            <q-input
              standout
              bottom-solts
              dense
              v-model="search"
              hide-bottom-space
              label="Search"
              @keyup.enter="cardsearchname(search)"
            >
              <template #append>
                <q-icon name="close" class="cursor-pointer" />
                <q-icon name="search" @click="cardsearchname(search)" />
              </template>
            </q-input>
          </div>
          <q-card>
            <div class="cardsizing">
              <q-card
                class="cards"
                v-for="Profile in Profiles"
                :key="Profile.id"
                @click="editcard(Profile.id)"
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
                  <q-btn flat
                    ><q-icon
                      name="favorite"
                      role="link"
                      @click="handleClick"
                      class="btn non-active"
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
import { onMounted, ref } from "vue";
import router from "@/router";
export default {
  setup() {
    const Profiles = ref();
    const search = ref("");
    const filteredSearch = ref();
    const cardsearchname = (val: string) => {
      filteredSearch.value = Profiles.value;
      if (val && val.trim()) {
        const filteredArray = filteredSearch.value.filter((item) => {
          return item.First_Name.toLowerCase() === val;
        });
        console.log(filteredArray);
        Profiles.value = filteredArray;
      } else {
        GetData();
      }
    };

    function handleClick(event) {
      event.currentTarget.classList.toggle("non-active");
      event.currentTarget.classList.toggle("active");
    }

    async function GetData() {
      const res = await axios.get("http://localhost:3000/Profiles");
      Profiles.value = res.data;
      console.log(Profiles.value);
    }

    async function onDelete(id) {
      if (confirm("Are you sure want to delete the cards")) {
        const result = await axios.delete(
          "http://localhost:3000/Profiles/" + id
        );
        console.log(result);
        if (result.data.id === 200) {
          router.push({ name: "HomeView" });
        }
        window.location.reload();
      }
    }

    onMounted(() => {
      GetData();
    });

    function editcard(id){
      router.push("/cloneProfile/"+ id);
    }

    return {
      GetData,
      onDelete,
      Profiles,
      handleClick,
      cardsearchname,
      filteredSearch,
      search,
      editcard
    };
  },
};
</script>
<style scoped>
.HomeViewPage {
  padding-top: 60px;
}
.PageSizing {
  max-width: 1300px;
  min-width:1300px;
  padding-top: 60px;
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.cardstyling {
  border: none;
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.addprofile {
  position: absolute;
  right: 50px;
  top: 3px;
  border-radius: 8px;
}
.cards {
  float: left;
  width: 290px;
  padding: 10px;
  margin: 6px;
  border-radius: 10px;
}
.btn-delete:hover {
  color: red;
}
/* *{
  box-sizing: border-box;
} */
.inputseachbar {
  width: 400px;
  border: 2px solid black;
  margin-left: 20px;
  background-color:white;
}

.active {
  background-color: white;
  color: red;
}

.non-active {
  color: black;
}
</style>


