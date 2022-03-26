import { createApp } from "vue";
import FriendContact from "./components/FriendContact";
import NewFriend from "./components/NewFriend";
import App from "./App.vue";
const app = createApp(App);
app.component("apk-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");
