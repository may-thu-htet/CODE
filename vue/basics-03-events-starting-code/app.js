const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log("Form submitted");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
