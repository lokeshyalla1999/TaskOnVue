<template>
  <div class="background-image">
    <q-page class="column items-center justify-center totalpage">
      <div class="q-pa-md bg-image">
        <q-layout class="vertical-center">
          <q-card class="q-pa-lg cardsize">
            <q-form class="q-gutter-md vertical-center"
              ><br />
              <center>
                <q-input
                  filled
                  type="text"
                  v-model="Profiles.id"
                  label="Enter Person ID *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please Enter UserId',
                  ]"
                  class="inputbox"
                />

                <q-input
                  filled
                  type="text"
                  v-model="Profiles.First_Name"
                  label="Enter Person First Name *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter First Name',
                  ]"
                  class="inputbox"
                />

                <q-input
                  filled
                  type="text"
                  v-model="Profiles.Last_Name"
                  label="Enter Person Last Name *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Last Name',
                  ]"
                  class="inputbox"
                />

                <q-input
                  filled
                  type="text"
                  v-model="Profiles.City"
                  label="Enter Person City *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please Enter City',
                  ]"
                  class="inputbox"
                />

                <q-input
                  filled
                  type="text"
                  v-model="Profiles.PhoneNumber"
                  label="Enter Person Phone Number *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Phone Number',
                  ]"
                  class="inputbox"
                />

                <q-input
                  filled
                  type="text"
                  v-model="Profiles.department"
                  label="Enter Person Department *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Department',
                  ]"
                  class="inputbox"
                />

                <div>
                  <center>
                    <q-btn
                      label="Submit"
                      type="button"
                      v-on:click="AddProfile"
                      color="green"
                    ></q-btn>
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                      @click="onReset()"
                    />
                  </center>
                </div>
              </center>
            </q-form>
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
export default {
  name: "AddProfile",
  setup() {
    const Profiles = ref<any>([
      {
        id: ref<string>(""),
        First_Name: ref<string>(""),
        Last_Name: ref<string>(""),
        City: ref<string>(""),
        PhoneNumber: ref<string>(""),
        department: ref<string>(""),
      },
    ]);
    async function AddProfile() {
      const data = await axios.post("http://localhost:3000/Profiles", {
        id: Profiles.value.id,
        First_Name: Profiles.value.First_Name,
        Last_Name: Profiles.value.Last_Name,
        City: Profiles.value.City,
        PhoneNumber: Profiles.value.PhoneNumber,
        department: Profiles.value.department,
      });
      if (data.status == 201) {
        router.push({ name: "HomeView" });
      } else {
        router.push({name:"SignPage"});
      }
      console.log(data);
      alert("successful")
      
    }

    function onReset() {
      Profiles.value.id = " ";
      Profiles.value.First_Name = " ";
      Profiles.value.Last_Name = " ";
      Profiles.value.City = "";
      Profiles.value.PhoneNumber = "";
      Profiles.value.department = " ";
    }
    return {
      onReset,
      AddProfile,
      Profiles,
    };
  },
};
</script>
<style scoped>
.background-image {
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.inputbox {
  padding: 5px;
  width: 350px;
}
.totalpage {
  padding-top: 100px;
  position: center;
}
.cardsize {
  width: 1000px;
}
</style>