<template>
  <section>
    <header><h1>Active User</h1></header>

    <ul v-for="user in userData" :key="user.name">
      <active-user :name="user.name" :age="user.age"></active-user>
    </ul>
    <user-input @user-input="addData"></user-input>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    addData(name, age) {
      this.userData.push({ name, age });
    },
  },
};
</script>
