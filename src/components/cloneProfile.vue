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
                    (v) => (v && v.length <= 3) || 'Max 3 number only',
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
                    (v) => (v && v.length <= 14) || 'Max 15 char only',
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
                    (v) => (v && v.length <= 14) || 'Max 15 char only',
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
                    (v) => (v && v.length <= 14) || 'Max 15 char only',
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
                    (v) =>
                      (v && v.length <= 10) || 'Phone contents only 10 numbers',
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
                    (v) => (v && v.length <= 14) || 'Max 15 char only',
                  ]"
                  class="inputbox"
                  maxlength="15"
                  required
                />
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
  
  export default {
    name: "cloneProfile",
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
      return {
        Profiles,
      };
    },
    async mounted() {
    const result = await axios.get(
      "http://localhost:3000/Profiles/" + this.$route.params.id
    );
    console.warn(result.data);
    this.Profiles = result.data;
}  };
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