import { createApp } from 'vue'
import App from './App.vue'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import VueSequentialEntrance from 'vue-sequential-entrance'
VueSequentialEntrance.use

createApp(App).mount('#app')

