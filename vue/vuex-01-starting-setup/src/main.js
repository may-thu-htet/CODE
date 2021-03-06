import { createApp } from 'vue';
import store from './Store/Index.js';

import App from './App.vue';

const app = createApp(App);
app.use(store);

app.mount('#app');
