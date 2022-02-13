const app = Vue.createApp({
  data() {
    return {
      click: 0,
    };
  },
  methods: {
    add5() {
      this.click += 5;
      this.log();
    },
    add1() {
      this.click++;
      this.log();
    },
    log() {
      console.log(this.click);
    },
  },
  computed: {
    result() {
      if (this.click === 37) {
        return "37";
      } else if (this.click < 37) {
        return "not there yet";
      } else {
        return "too much";
      }
    },
  },
  watch: {
    click() {
      setTimeout(
        function () {
          this.click = 0;
        }.bind(this),
        5000
      );
    },
  },
});
app.mount("#assignment");
