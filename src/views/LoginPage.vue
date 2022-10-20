<template>
  <!--We will be talking about encapsulating pages within a q-layout. 
      The QLayout is a component designed to manage the entire window and wrap page content with elements such as a navigational bar or a drawer -->
  <q-page class="column items-center justify-center">
    <div class="q-pa-md" style="max-width: 400px">
      <!-- The QCard component is a great way to display important pieces of grouped content. This pattern is quickly emerging as a core design pattern for Apps, website previews and email content -->
      <q-card class="q-pa-lg justify-center">
        <!-- create form and make the easily validate child form components , it works only in internal components  -->
        <q-form @submit="onSubmit" @reset="onReset('fields are reset')" class="q-gutter-md">
          <!-- The QInput component is used to capture text input from the user.
               v-model is used , 
               Similar  to regular  input  It has support for errors and validation, and comes in a variety of styles, colors, and types. -->
          <q-input
            v-model="email"
            filled
            type="email"
            hint="Email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please Enter Valid Email',
            ]"
          />
          <!-- The QInput component is used to capture text input from the user.
               v-model is used , 
               Similar  to regular  input  It has support for errors and validation, and comes in a variety of styles, colors, and types. -->
          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            hint="Password with toggle"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please Enter Valid Password',
            ]"
          >
          <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <!-- Quasar has a component called QBtn which is a button with a few extra useful features -->
          <q-btn label="Submit" type="submit" color="primary"  />
          <!-- Quasar has a component called QBtn which is a button with a few extra useful features -->
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "LoginPage",
  components: {},
  setup() {
    const $q = useQuasar();
    const email = ref<string>(" ");
    const password = ref<string>(" ");
    const accept = ref<boolean>(false);
    const isPwd = ref<boolean>(false);
    function onSubmit() {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    }
    function onReset(reset : string) {
      email.value = " ";
      password.value = " ";
      accept.value = false;
      alert(reset);
    }
 
    return {
      email,
      password,
      accept,
      onSubmit,
      onReset,
      isPwd,
    };
  },
};
</script>

<style scoped>
.q-pa-lg {
  width: 450px;
}
</style>