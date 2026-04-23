<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from './assets/logo.jpeg'

const loading = ref(false)
const router = useRouter()

router.beforeEach((_, __, next) => {
  if (loading.value) return
  loading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>

<template>
  <div id="app">

    <!-- 🔥 LOADER -->
    <div v-if="loading" class="loader"></div>

    <!-- HEADER -->
    <header class="header">

      <div class="logo">
        <img :src="logo" alt="logo" />

        <div class="brand">
          <span class="title">Inflables</span>
          <span class="highlight">Juanito’s</span>
        </div>
      </div>

      <!-- 🔥 BLOQUEO DE CLICKS -->
      <nav :style="{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.6 : 1 }">
        <router-link to="/">Inicio</router-link>
        <router-link to="/catalogo">Catálogo</router-link>
        <router-link to="/terms">Condiciones</router-link>
        <router-link to="/privacy">Privacidad</router-link>
      </nav>

    </header>

    <!-- CONTENIDO -->
    <main class="main">
      <router-view v-slot="{ Component }">
        <!-- 🔥 SIN mode="out-in" y SIN key -->
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

/* GLOBAL */
html, body, #app {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #020617;
}

/* HEADER */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 30px;
  box-sizing: border-box;

  background: linear-gradient(90deg, #020617, #0f172a, #1e293b);
  border-bottom: 1px solid rgba(255,255,255,0.08);

  backdrop-filter: blur(10px);
  z-index: 1000;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
}

/* TEXTO */
.brand {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 12px;
  color: #94a3b8;
}

.highlight {
  font-size: 18px;
  font-weight: 800;

  background: linear-gradient(135deg, #22c55e, #4ade80);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* NAV */
nav {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

/* LINKS */
nav a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  position: relative;
}

/* EFECTO LINEA */
nav a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #22c55e;
  transition: 0.3s;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: white;
}

nav a.router-link-active {
  color: #22c55e;
  font-weight: 600;
}

/* MAIN */
.main {
  margin-top: 90px;
  min-height: calc(100vh - 90px);
  width: 100%;
}

/* 🔥 ANIMACIONES (estables) */
.page-enter-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-active {
  transition: all 0.2s ease;
}

.page-leave-to {
  opacity: 0;
}

/* 🔥 LOADER */
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #22c55e;
  animation: load 0.4s linear;
  z-index: 2000;
}

@keyframes load {
  from { width: 0%; }
  to { width: 100%; }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header {
    padding: 10px 15px;
  }

  nav {
    gap: 12px;
  }

  .logo img {
    width: 45px;
    height: 45px;
  }

  .highlight {
    font-size: 16px;
  }
}
</style>