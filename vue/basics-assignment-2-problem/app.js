const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      userInput2: "",
    };
  },
  methods: {
    message(e) {
      alert("Virus detected");
      console.log(e.target);
    },
    keyDown(event) {
      this.userInput1 = event.target.value;
    },
    keyEnter(event) {
      this.userInput2 = event.target.value;
    },
  },
});
app.mount("#assignment");
