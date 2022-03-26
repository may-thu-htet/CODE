<template>
  <div>
    <input :type="inputType" />
    <button :class="color" :disabled="disabled" :type="type">
      {{ label }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["label", "color", "disabled", "type", "inputType"],
};
</script>
<style scoped>
button {
  color: white;
}
.red {
  background-color: red;
}
.orange {
  background-color: orange;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>
