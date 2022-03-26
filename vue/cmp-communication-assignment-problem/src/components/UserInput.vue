<template>
  <form @submit.prevent="userInput">
    <p>
      <label for="name">Name:</label
      ><input
        v-model="name"
        id="name"
        type="text"
        placeholder="name"
        name="name"
      />
    </p>
    <p>
      <label for="age">Age:</label
      ><input v-model="age" id="age" type="text" placeholder="age" name="age" />
    </p>
    <p>
      <button>Submit</button>
    </p>
    <base-button
      label="Cancel"
      color="orange"
      type="reset"
      inputType="password"
    ></base-button>
  </form>
</template>

<script>
export default {
  emits: ["user-input"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    userInput() {
      this.$emit("user-input", this.name, this.age);
    },
  },
};
</script>
