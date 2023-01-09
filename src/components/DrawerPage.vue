<template>
  <div>
    <q-item
      v-for="link in links"
      :key="link.id"
      clickable
      tag="a"
      target="_blank"
      :href="link.reference"
    >
      <q-item-section avatar>
        <q-icon :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.label }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
      <q-separator />
    </q-item>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { GETTERS } from "@/store/DrawerLinks/getters"

export default {
  name: "DrawerPage",
  setup() {
    const store = useStore();
    const links = computed(
      () => store.getters[`${GETTERS.Get_DrawerLinks}`]
    );
    return { links };
  },
};
</script>
