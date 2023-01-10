<template>
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
                v-model="Id"
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
                v-model="First_name"
                label="Enter Person First Name *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please Enter First Name',
                ]"
                class="inputbox"
              />

              <q-input
                filled
                type="text"
                v-model="Last_Name"
                label="Enter Person Last Name *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please Enter Last Name',
                ]"
                class="inputbox"
              />

              <q-input
                filled
                type="text"
                v-model="City"
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
                v-model="PhoneNumber"
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
                v-model="department"
                label="Enter Person Department *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please Enter Department',
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
              </center>
              </div>
            </center>
          </q-form>
        </q-card>
      </q-layout>
    </div>
  </q-page>
</template>

 <script>
//import axios from "axios";
import { ref } from "vue";
export default {
  name: "AddProfile",
  setup() {
    // const Id = ref<string>("");
    // const Frist_Name = ref<string>("");
    // const Last_Name = ref<string>("");
    // const City = ref<string>("");
    // const PhoneNumber = ref<string>("");
    // const department = ref<string>("");
    const Id = ref("");
    const Frist_Name = ref("");
    const Last_Name = ref("");
    const City = ref("");
    const PhoneNumber = ref("");
    const department = ref("");
    // async function AddProfile() {
    //   console.warn(this.Profiles);
    //   const data = await axios.post("http://localhost:3000/Profiles", {
    //     Id: this.Profiles.Id,
    //     Frist_Name: this.Profiles.Frist_Name,
    //     Last_Name: this.Profiles.Last_Name,
    //     City: this.Profiles.City,
    //     PhoneNumber: this.Profiles.PhoneNumber,
    //     department: this.Profiles.department,
    //   });
    //   if (data.status == 201) {
    //     this.$router.push({ name: "/" });
    //   } else {
    //     console.warn("data", data);
    //     alert("AddProfile  Successfully");
    //   }
    // }
    return {
      Id,
      PhoneNumber,
      Last_Name,
      Frist_Name,
      City,
      department
    };
  },
};
</script>
<style scoped>
.inputbox{
  padding:5px;
  width:350px;
}
.totalpage{
  padding-top: 100px;
  position: fixed;
  padding-left:200px;
}
.cardsize{
  width:1000px;
}
</style>