<template>
  <section>
    <header><h1>My Apks</h1></header>
    <new-friend @new-apk="addNewFriend"></new-friend>
    <ul v-for="apk in apks" :key="apk.id">
      <apk-contact
        v-bind="apk"
        @toggle-apaw-sone="toggleApawSone"
        @delete="deleteFriend"
      ></apk-contact>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      apks: [
        {
          id: "MMO",
          name: "Myat Mon Oo",
          phone: "12121",
          email: "mmo@gmail.com",
          isApawSone: false,
        },
        {
          id: "poe",
          name: "Poe Poe Phyu Sin",
          phone: "12314",
          email: "poe@gmail.com",
          isApawSone: false,
        },
        {
          id: "nyo",
          name: "Nyo Me Thet Naing",
          phone: "12312",
          email: "nyome@gmail.com",
          isApawSone: false,
        },
      ],
    };
  },
  methods: {
    toggleApawSone(apkId) {
      const found = this.apks.find((apk) => apk.id === apkId);
      found.isApawSone = !found.isApawSone;
    },
    addNewFriend(newApk) {
      this.apks.push(newApk);
      this.sortNames();
    },
    sortNames() {
      this.apks.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },
    deleteFriend(id) {
      this.apks = this.apks.filter((apk) => apk.id !== id);
      // console.log("apks", this.apks);
      // console.log("apks[0]", this.apks[0]);
      // console.log("apks.id", this.apks.id);
      console.log("id", id);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
