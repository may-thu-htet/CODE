import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue';
import BaseButton from './Components/UI/BaseButton.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.mount('#app');
