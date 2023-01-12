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
              label="Add Profile"
            />
          </div>
          <div class="mycardbackground">
           <q-card class="mycard" v-for="Profile in Profiles" :key="Profile.id">
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
                <q-btn flat icon="fav">Action 2</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </q-card> 
      </q-layout>
    </div>
  </q-page>
</template>

<script lang="ts">
import axios from "axios";
import { ref } from "vue";
import router from "@/router";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  components: { SearchComponent },
  setup() {
    const Profiles = ref<any>([]);
    async function GetData() {
      const res = await axios.get("http://localhost:3000/Profiles");
      Profiles.value = res.data;
      console.log(Profiles.value);
    }

    async function onDelete(id: string) {
      if (confirm("Are you sure want to delete the ticket")) {
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
    };
  },
  mounted(){
    this.GetData();
  }
};
</script>
<style scoped>
.totalpage {
  padding-top: 70px;
}

.mycard{
  width:250px;
  float: left;
  padding: 10px;
  margin:20px;
}
.mycardbackground{
  padding-top:30px; 
}
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
  height: 100%;
}
.addprofile {
  position: absolute;
  right: 40px;
  top: 40px;
}
</style>


