<template>
  <li>
    <h2>{{ $attrs.isApawSone ? $attrs.name + " (ApawSone)" : $attrs.name }}</h2>
    <button @click="toggleApawKg">Most Apk</button>
    <button @click="toggleVisibility">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="$emit('delete', $attrs.id)">Delete</button>

    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ $attrs.phone }}</li>
      <li><strong>Email: </strong>{{ $attrs.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  // props: ["name", "phone", "email", "id", "isApawSone"],
  emits: ["toggle-apaw-sone", "delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleApawKg() {
      this.$emit("toggle-apaw-sone", this.$attrs.id);
    },
  },
};
</script>
