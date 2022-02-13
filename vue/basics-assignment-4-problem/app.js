const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isVisible: true,
      inputColor: "",
    };
  },
  computed: {
    inputClass() {
      if (this.isVisible) {
        if (this.userInput === "user1" || this.userInput === "user2") {
          return this.userInput;
        }
      } else {
        return "hidden";
      }
      return "";
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
