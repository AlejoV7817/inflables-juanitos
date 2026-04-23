<script setup lang="ts">
import logo from '../assets/logo2.jpeg'
import { MapPin, Phone, Mail } from 'lucide-vue-next'
import SocialLinks from '../components/SocialLinks.vue'
</script>

<template>

  <!-- HERO -->
  <section class="hero">

    <div class="bg-circle c1"></div>
    <div class="bg-circle c2"></div>

    <div class="hero-content">

      <img :src="logo" class="logo-main" />

      <h1>Inflables, Juegos y Diversión</h1>

      <p class="subtitle">
        La mejor experiencia para tus eventos en CDMX.<br />
        Seguridad, diversión y servicio profesional.
      </p>

      <router-link to="/catalogo" class="btn">
        Ver catálogo
      </router-link>

      <div class="divider"></div>

      <!-- CONTACTO -->
      <div class="contact-grid">

        <div class="contact-item">
          <MapPin />
          <span>Otomíes 188, Ajusco, Coyoacán, CDMX</span>
        </div>

        <div class="contact-item">
          <Phone />
          <span>+52 5514312626</span>
        </div>

        <div class="contact-item">
          <Mail />
          <span>inflablesjuanitos@gmail.com</span>
        </div>

      </div>

      <div class="social-wrapper">
        <SocialLinks />
      </div>

    </div>

  </section>

  <!-- 🔥 RESEÑAS -->
  <section class="reviews-section">

    <h2>Opiniones de nuestros clientes ⭐</h2>

    <div class="reviews-grid">

      <div class="review">
        <p>
          Muy buen servicio, siempre amables, puntuales y con excelente calidad.
        </p>
        <span>— Luz Juárez</span>
      </div>

      <div class="review">
        <p>
          Muy bien todo, no tuve ningún inconveniente. Súper recomendados.
        </p>
        <span>— Montserrat Vázquez</span>
      </div>

      <div class="review">
        <p>
          Excelente servicio, muy amables y precios accesibles. Lo recomiendo totalmente.
        </p>
        <span>— Ailyn Carriche</span>
      </div>

      <div class="review">
        <p>
          Excelente atención, el inflable estaba muy bonito.
        </p>
        <span>— Maribel Mora</span>
      </div>

      <div class="review">
        <p>
          Muy buen servicio y precios accesibles, muy amables todos.
        </p>
        <span>— Monikaesme Mtz</span>
      </div>

      <div class="review">
        <p>
          El inflable estaba increíble, en excelentes condiciones y muy limpio.
        </p>
        <span>— Karla Mendívil</span>
      </div>

    </div>

  </section>

</template>

<style scoped>

/* HERO */
.hero {
  min-height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  background: linear-gradient(135deg, #020617, #0f172a, #1e3a8a);
  color: white;
}

/* FONDO */
.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.3;
}

.c1 {
  width: 350px;
  height: 350px;
  background: #22c55e;
  top: 10%;
  left: 10%;
}

.c2 {
  width: 450px;
  height: 450px;
  background: #3b82f6;
  bottom: 10%;
  right: 10%;
}

/* CONTENIDO */
.hero-content {
  max-width: 800px;
  width: 100%;
  padding: 70px 40px;

  background: rgba(255,255,255,0.04);
  border-radius: 30px;

  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.08);

  box-shadow: 0 30px 80px rgba(0,0,0,0.6);

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* LOGO */
.logo-main {
  width: 300px;
  margin: 0 auto 10px;
}

/* TITULO */
.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
}

/* TEXTO */
.subtitle {
  font-size: 1.1rem;
  color: #cbd5e1;
}

/* BOTON */
.btn {
  align-self: center;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  padding: 14px 40px;
  border-radius: 14px;
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.btn:hover {
  transform: scale(1.05);
}

/* SEPARADOR */
.divider {
  width: 60%;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 10px auto;
}

/* CONTACTO */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #cbd5e1;
}

.contact-item svg {
  color: #22c55e;
}

/* REDES */
.social-wrapper {
  margin-top: 10px;
}

/* 🔥 RESEÑAS */
.reviews-section {
  padding: 80px 20px;
  text-align: center;
  background: #020617;
  color: white;
}

.reviews-section h2 {
  margin-bottom: 40px;
  font-size: 2rem;
}

.reviews-grid {
  max-width: 1000px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.review {
  background: rgba(255,255,255,0.05);
  padding: 20px;
  border-radius: 15px;

  border: 1px solid rgba(255,255,255,0.08);
  color: #cbd5e1;

  transition: 0.3s;
}

.review:hover {
  transform: translateY(-5px);
}

.review span {
  display: block;
  margin-top: 10px;
  color: #22c55e;
  font-weight: 600;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .logo-main {
    width: 150px;
  }
}

</style>