const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    addTasks() {
      this.tasks.push(this.enteredTask);
      console.log(this.tasks);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
