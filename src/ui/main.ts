import { App, createApp } from 'vue';
import AppMain from './App.vue';
import mitt from 'mitt';
import 'stunicons/fonts/style.min.css';

const bus = mitt();

const app: App<Element> = createApp(AppMain);
app.config.globalProperties.bus = bus;
app.mount('#app');
