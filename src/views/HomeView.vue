<template>
  <div class="q-pa-md q-mt-xl  glossy">
    <div>
      <q-btn color="primary"   icon="plus" />
    </div>
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="options"
    />
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



