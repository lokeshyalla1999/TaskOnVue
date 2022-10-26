<template>
  <!--We will be talking about encapsulating pages within a q-layout. 
      The QLayout is a component designed to manage the entire window and wrap page content with elements such as a navigational bar or a drawer -->
  <q-page class="column items-center justify-center q-mt-xl">
    <div class="q-pa-md" style="max-width: 1000px">
      <!-- The QCard component is a great way to display important pieces of grouped content. This pattern is quickly emerging as a core design pattern for Apps, website previews and email content -->
      <q-card class="q-pa-lg justify-center">
        <!-- create form and make the easily validate child form components , it works only in internal components  -->
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- The QInput component is used to capture text input from the user.
               v-model is used , 
               Similar  to regular  input  It has support for errors and validation, and comes in a variety of styles, colors, and types. -->
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
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
              (val) => (val && val.length > 0) || 'Please type something',
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
              (val) => (val && val.length > 0) || 'Please type something',
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

          <div class="q-pa-md">
            <q-option-group
              class="row"
              :options="options"
              type="radio"
              v-model="group"
            />
            <!-- The q-option-group component is a helper component that allows you better control for grouping binary orm input components like checkboxes, radios or toggles. -->
          </div>
          <!-- The QInput component is used to capture text input from the user.
               v-model is used , 
               Similar  to regular  input  It has support for errors and validation, and comes in a variety of styles, colors, and types. -->
          <q-input
            v-model="date"
            filled
            type="date"
            hint="Native date"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <!-- The QInput component is used to capture text input from the user.
               v-model is used , 
               Similar  to regular  input  It has support for errors and validation, and comes in a variety of styles, colors, and types. -->
          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <!-- Quasar has a component called QBtn which is a button with a few extra useful features. -->
            <q-btn label="Submit" type="submit" color="primary" />
            <!-- Quasar has a component called QBtn which is a button with a few extra useful features. -->
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { GETTERS } from "@/store/DrawerLinks/getters"
export default {
  name: "SignPage",
  components: {},
  setup() {
    const $q = useQuasar();
    const name = ref<string>("");
    const email = ref<string>("");
    const password = ref<string>("");
    const accept = ref<boolean>(false);
    const group = ref<string>("");
    const date = ref<string>("");
    const isPwd = ref<boolean>(false);
    const store = useStore();
    const options = computed(() => store.getters[`${GETTERS.Get_Gender}`]);
    // const options =ref<labeloptions[]>([
    //   {label : "Male"  , value : "male" , color : "green"},
    //   { label: "Female", value: "female", color: "green" },
    //   { label: "Others", value: "other", color: "green" },
    // ]);
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

    function onReset() {
      name.value = " ";
      email.value = " ";
      date.value = " ";
      password.value = " ";
      group.value = " ";
      accept.value = false;
    }

    return {
      name,
      email,
      password,
      group,
      options,
      date,
      onSubmit,
      onReset,
      isPwd,
      accept,
    };
  },
};
</script>
<style scoped>
.q-pa-lg {
  height: 600px;
  width: 800px;
}
</style>