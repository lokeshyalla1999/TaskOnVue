<template>
  <q-page class="column items-center justify-center q-mt-xl background-image">
    <div class="q-pa-md" style="max-width: 1000px">
      <q-card class="q-pa-lg justify-center">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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
          </div>
          <q-input
            v-model="date"
            filled
            type="date"
            hint="Native date"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
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
.background-image{
  background-image: url("@/assets/images.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.q-pa-lg {
  height: 600px;
  width: 800px;
}
</style>