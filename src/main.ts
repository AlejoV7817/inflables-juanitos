import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // 👈 IMPORTANTE (agrega esto)

createApp(App)
  .use(router)
  .mount('#app')