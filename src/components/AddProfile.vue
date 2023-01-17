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
                 flat
                  filled
                  type="text"
                  v-model="Profiles.id"
                  label="Enter Person ID *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please Enter UserId',
                    (v) =>(v && v.length <= 3) || 'Max 3 number only',
                  ]"
                  maxlength="4"
                  class="inputbox"
                  required
                />

                <q-input
                  filled
                  flat
                  type="text"
                  v-model="Profiles.First_Name"
                  label="Enter Person First Name *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter First Name', 
                     (v) =>(v && v.length <= 14) || 'Max 15 char only',
                  ]"
                  class="inputbox"
                  maxlength="15"
                  required
                />

                <q-input
                  filled
                  flat
                  type="text"
                  v-model="Profiles.Last_Name"
                  label="Enter Person Last Name *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Last Name',
                      (v) =>(v && v.length <= 14) || 'Max 15 char only',
                  ]"
                  maxlength="15"
                  class="inputbox"
                  required
                />

                <q-input
                  flat
                  filled
                  type="text"
                  v-model="Profiles.City"
                  label="Enter Person City *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please Enter City',
                    (v) =>(v && v.length <= 14) || 'Max 15 char only',
                  ]"
                  class="inputbox"
                  maxlength="15"
                  required
                />

                <q-input
                  flat
                  filled
                  type="text"
                  v-model="Profiles.PhoneNumber"
                  label="Enter Person Phone Number *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Phone Number',
                      (v) =>(v && v.length <= 9) || 'Phone contents only 10 numbers',
                  ]"
                  class="inputbox"
                  maxlength="10"
                  required
                />

                <q-input
                  flat
                  filled
                  type="text"
                  v-model="Profiles.department"
                  label="Enter Person Department *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Please Enter Department',
                      (v) =>(v && v.length <= 14) || 'Max 15 char only',
                  ]"
                  class="inputbox"
                  maxlength="15"
                  required
                />

                <div>
                  <center>
                    <q-btn
                      flat 
                      label="Submit"
                      type="button"
                      v-on:click='AddProfile'
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
    const submitDisable = ref<boolean>(true);
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
        router.push({ name: "SignPage" });
      }
      console.log(data);
      alert("successful");
    }

    function onReset() {
      Profiles.value.id = " ";
      Profiles.value.First_Name = " ";
      Profiles.value.Last_Name = " ";
      Profiles.value.City = "";
      Profiles.value.PhoneNumber = "";
      Profiles.value.department = " ";
    }

    const submitDisablefunction = () => {
      if (
        Profiles.value.id == " " ||
        Profiles.value.First_Name == " " ||
        Profiles.value.Last_Name == "" ||
        Profiles.value.City == " " ||
        Profiles.value.PhoneNumber == " " ||
        Profiles.value.department == " "
      ) {
        Profiles.value.submitDisable = true;
      } else {
        Profiles.value.submitDisable = false;
      }
    }

    return {
      submitDisable,
      submitDisablefunction,
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
  padding: 10px;
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