<template>
  <div class="cardsbackground">
    <q-card class="mycard">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">{{ Profiles.First_Name }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat icon="delete"></q-btn>
        <q-btn flat icon="fav">Action 2</q-btn>
      </q-card-actions>
    </q-card>
</div>  
</template>

<script>
export default {

}
</script>

<style>
.mycard{
    width: 100%;
    max-width: 250px;
    padding: 15px;
}
</style>