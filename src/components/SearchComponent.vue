<template>
  <div class="q-pa-sm searchToolbar "
  >
  <q-toolbar-title>
    <q-input
    standout
    bottom-solts
    dense
    v-model="abc"
    color = "btnPrimary"
    hide-bottom-space
    class = "q-pa-sm inputseachbar"
    >
    <template #append>
        <q-icon 
        name = 'close'
        class="cursor-pointer"
        />
        <q-icon 
        name ="search"
        />
    </template>
   </q-input>
  </q-toolbar-title>
  </div>
</template>

<script lang="ts">
export default {
  name : 'SearchComponent',
  setup(){
    return{

    }
  },
}
</script>

<style lang="scss">
*{
    box-sizing: border-box;
}
.inputseachbar{
    width: 400px;
}
</style>  