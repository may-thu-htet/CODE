<template>
  <form>
    <p>
      <label for="id">ID:</label
      ><input v-model="id" id="id" type="text" placeholder="ID" name="id" />
    </p>
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
      <label for="phone">Phone:</label
      ><input
        v-model="phone"
        id="phone"
        type="text"
        placeholder="phone"
        name="phone"
      />
    </p>
    <p>
      <label for="email">Email:</label
      ><input
        v-model="email"
        id="email"
        type="text"
        placeholder="email"
        name="email"
      />
    </p>
    <p>
      <label for="apawsone">ApawSone:</label>
      <input
        type="radio"
        name="apawsone"
        id="apkyes"
        :value="true"
        v-model="isApawSone"
      />
      <label for="apk">Yes</label>
      <input
        type="radio"
        name="apawsone"
        id="apkno"
        :value="false"
        v-model="isApawSone"
      />
      <label for="apk">No</label>
    </p>
    <button @click.prevent="newApk">Save</button>
    <button @click.prevent="reset">Cancel</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      phone: "",
      email: "",
      isApawSone: false,
    };
  },
  methods: {
    newApk() {
      this.$emit("new-apk", {
        id: this.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
        isApawSone: this.isApawSone,
      });
      this.reset();
    },
    reset() {
      this.id = "";
      this.name = "";
      this.phone = "";
      this.email = "";
      this.isApawSone = false;
    },
  },
};
</script>
<style></style>
