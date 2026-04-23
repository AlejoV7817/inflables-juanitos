<script setup lang="ts">
import { ref } from 'vue'
import SocialLinks from '../components/SocialLinks.vue'

const productos = [
  { nombre: "Pequetín", precio: "$500", imagen: "/src/assets/pequetin.jpeg" },
  { nombre: "Alberca", precio: "$1200", imagen: "/src/assets/alberca_resbaladilla.jpeg" },
  { nombre: "Gusanito", precio: "$500", imagen: "/src/assets/gusanito.jpeg" },
  { nombre: "Gusanita", precio: "$500", imagen: "/src/assets/gusanita.jpeg" },
  { nombre: "Castillo rosa", precio: "$500", imagen: "/src/assets/castillo_rosa.jpeg" },
  { nombre: "Laberinto", precio: "$1000", imagen: "/src/assets/laberinto.jpeg" },
  { nombre: "Escaladora", precio: "$700", imagen: "/src/assets/escaladora.jpeg" },
  { nombre: "Barco", precio: "$700", imagen: "/src/assets/barco.jpeg" },
  { nombre: "Doble resbaladilla", precio: "$700", imagen: "/src/assets/doble_resbaladilla.jpeg" },
  { nombre: "Tetris", precio: "$400", imagen: "/src/assets/tetris.jpeg" },
  { nombre: "Paquete 7", precio: "$3900", imagen: "/src/assets/paquete 7.jpeg" },
  { nombre: "Eliminador Up and down", precio: "$2000-$3200", imagen: "/src/assets/eliminador.jpeg" },
  { nombre: "Pelotas chico", precio: "$850", imagen: "/src/assets/pelotas_chico.jpeg" },
  { nombre: "Pinta caritas", precio: "$800-$1200", imagen: "/src/assets/pinta_caritas.jpeg" },
  { nombre: "Colores 3x3", precio: "$500", imagen: "/src/assets/colores_3x3.jpeg" },
  { nombre: "Interactivo de arcos", precio: "$700", imagen: "/src/assets/interactivo_de_arcos.jpeg" },
  { nombre: "Hockey", precio: "$600", imagen: "/src/assets/hockey.jpeg" },
  { nombre: "Arcade", precio: "$500", imagen: "/src/assets/arcade.jpeg" },
  { nombre: "Tiro al blanco", precio: "$400", imagen: "/src/assets/tiro_al_blanco.jpeg" },
  { nombre: "Túnel", precio: "$800", imagen: "/src/assets/tunel.jpeg" },
  { nombre: "Futbolito", precio: "$500", imagen: "/src/assets/futbolito.jpeg" },
  { nombre: "Toro mecánico", precio: "$2500-$4000", imagen: "/src/assets/toromecanico.jpeg" },

  { nombre: "Puestos de feria", precio: "$2700", imagen: "/src/assets/puestos_de_feria.jpeg" },
  { nombre: "Conecta 4", precio: "$400", imagen: "/src/assets/conecta4.jpeg" },
  { nombre: "Canasta", precio: "$600", imagen: "/src/assets/canasta.jpeg" },
  { nombre: "Jenga gigante", precio: "$500", imagen: "/src/assets/jenga_gigante.jpeg" },
  { nombre: "Mini inflable", precio: "$400", imagen: "/src/assets/mini.jpeg" }
]

const imagenActiva = ref<string | null>(null)

const abrirImagen = (img: string) => {
  imagenActiva.value = img
}

const cerrarImagen = () => {
  imagenActiva.value = null
}
</script>

<template>

  <section class="catalogo">

    <!-- FONDO -->
    <div class="bg-circle c1"></div>
    <div class="bg-circle c2"></div>

    <!-- HEADER -->
    <div class="header">
      <h1>Catálogo de juegos </h1>
      <p>Elige el juego perfecto para tu evento</p>
    </div>

    <!-- GRID -->
    <div class="grid">

      <div v-for="(item, i) in productos" :key="i" class="card">

        <div class="img-container" @click="abrirImagen(item.imagen)">
          <img :src="item.imagen" />
        </div>

        <div class="info">
          <h3>{{ item.nombre }}</h3>
          <p class="precio">{{ item.precio }}</p>

          <a 
            class="btn"
            :href="`https://wa.me/5215514312626?text=Hola,%20quiero%20rentar%20${item.nombre}`"
            target="_blank"
          >
            Reservar
          </a>
        </div>

      </div>

    </div>

    <!-- 🔥 REDES SOCIALES -->
    <div class="social-section">
      <h2>Síguenos y contáctanos</h2>
      <p>También puedes escribirnos por nuestras redes</p>

      <SocialLinks />
    </div>

    <!-- MODAL -->
    <div v-if="imagenActiva" class="modal" @click="cerrarImagen">
      <img :src="imagenActiva" class="modal-img" />
    </div>

  </section>

</template>

<style scoped>

/* BASE */
.catalogo {
  padding: 80px 40px;
  margin-top: 90px;
  min-height: 100vh;
  color: white;
  position: relative;
  overflow: hidden;

  background: linear-gradient(135deg, #020617, #0f172a, #1e3a8a);
}

/* FONDO DECORATIVO */
.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.3;
}

.c1 {
  width: 300px;
  height: 300px;
  background: #22c55e;
  top: 10%;
  left: 10%;
}

.c2 {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  bottom: 10%;
  right: 10%;
}

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.header h1 {
  font-size: 2.6rem;
  font-weight: 800;
}

.header p {
  color: #cbd5e1;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  position: relative;
  z-index: 2;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
}

/* IMG */
.img-container {
  background: #f1f5f9;
  padding: 25px;
  cursor: pointer;
}

.img-container img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

/* INFO */
.info {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 🔥 separación automática */
}

.precio {
  color: #22c55e;
  font-weight: bold;
}

/* BOTON */
.btn {
  margin-top: 10px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  text-decoration: none;
}

/* 🔥 SOCIAL SECTION */
.social-section {
  margin-top: 100px;
  text-align: center;
  z-index: 2;
  position: relative;
}

.social-section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.social-section p {
  color: #94a3b8;
  margin-bottom: 20px;
}

/* MODAL */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
}

</style>