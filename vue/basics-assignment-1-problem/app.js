const app = Vue.createApp({
  data() {
    return {
      name: "May",
      age: 29,

      favNum: Math.random(),
      photoLink:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/TapetumLucidum.JPG",
    };
  },
});
app.mount("#assignment");
