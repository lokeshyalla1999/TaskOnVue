<template>
  <div>
    <!--An item label is useful for predefined text content type within a QItemSection,
        or for header-like content of the QList itself -->
    <q-item
      v-for="link in links"
      :key="link.id"
      clickable
      tag="a"
      target="_blank"
      :href="link.reference"
    >
      <!--  An item section can have several uses for particular content -->
      <q-item-section avatar>
        <!--  The q-icon component allows you to easily insert icons within other components or
              any other area of your pages -->
        <q-icon :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <!-- An item label is useful for predefined text content type within a QItemSection, or
             for header-like content of the QList itself -->
        <q-item-label>{{ link.label }}</q-item-label>
        <!-- An item label is useful for predefined text content type within a QItemSection, or
             for header-like content of the QList itself -->
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
      <!-- to separate the two component with horizantal line -->
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
    //console.log(links.value);
    return { links };
  },
};
</script>

<style>
</style>