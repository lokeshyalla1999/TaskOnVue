<template>
  <div class="q-pa-md q-mt-xl justify-center">
    <!-- The q-option-group component is a helper component that allows you better control for grouping binary orm input components like checkboxes, radios or toggles. -->
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="options"
    />
    <!-- q-table is a component that allows you to display data in a tabular manner. It’s generally called a datatable. -->
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { GETTERS } from "@/store/DrawerLinks/getters"

export default {
  name: "HomeView",
  components: {},
  setup() {
    const separator = ref<"vertical" | "horizontal" | "cell" | "none" | undefined>("vertical");
    const store = useStore();
    const options = computed(
      () => store.getters[`${GETTERS.Get_Option}`]
    );
    console.log(options.value);
    const columns = computed(
      () => store.getters[`${GETTERS.Get_Columns}`]
    );
    console.log(columns.value);
    const rows = computed(
      () => store.getters[`${GETTERS.Get_Rows}`]
    )
    console.log(rows.value);
    return {
      separator,
      columns,
      rows,
      options
    };
  },
};
</script>



