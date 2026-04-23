import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'

// 👇 NUEVO
import Catalogo from '../views/Catalogo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },

    // 👇 NUEVA RUTA
    { path: '/catalogo', component: Catalogo },

    { path: '/privacy', component: Privacy },
    { path: '/terms', component: Terms },
  ],

  // 👇 ESTO ARREGLA EL SCROLL
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router