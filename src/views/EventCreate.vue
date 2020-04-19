<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['categories', 'user'])
  }
  // computed: mapState({
  //   user: 'user',
  //   categories: 'categories'
  // })
  // computed: mapState({
  //     userName: state => state.user.name,
  //     categories: state => state.categories
  //   })
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name;
  //   },
  //   userID() {
  //     return this.$store.state.user.id;
  //   }
  // }
};
</script>

<style></style>
