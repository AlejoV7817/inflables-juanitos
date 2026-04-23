<script setup lang="ts">
import { Facebook, Instagram, MapPin } from 'lucide-vue-next'
</script>

<template>

  <div class="social">

    <!-- WHATSAPP (OFICIAL) -->
    <a href="https://wa.me/5215514312626" target="_blank" class="whatsapp">
      <svg viewBox="0 0 32 32" fill="white">
        <path d="M16 3C9.4 3 4 8.3 4 14.8c0 2.6.9 5 2.3 6.9L4 29l7.5-2.3c1.8 1 3.9 1.6 6 1.6 6.6 0 12-5.3 12-11.8S22.6 3 16 3zm0 21.5c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.5 1.4 1.5-4.3-.3-.4c-1.2-1.6-1.8-3.4-1.8-5.3 0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8-4.5 9.8-10 9.8zm5.6-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.3 2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.7-.7 2-1.3.2-.6.2-1.2.2-1.3 0-.1-.2-.2-.5-.4z"/>
      </svg>
    </a>

    <!-- INSTAGRAM -->
    <a href="https://www.instagram.com/juanitosinflables?igsh=MTI3MDBzZnQ1cDQ3aw==" target="_blank" class="instagram">
      <Instagram />
    </a>

    <!-- FACEBOOK -->
    <a href="https://www.facebook.com/inflablesjuanitos" target="_blank" class="facebook">
      <Facebook />
    </a>

    <!-- TIKTOK -->
    <a href="https://www.tiktok.com/@inflables.juanito" target="_blank" class="tiktok">
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M12.75 2h2.25c.17 1.43.97 2.72 2.16 3.53 1.19.81 2.64 1.12 4.09.87v2.27c-1.57.23-3.18-.06-4.59-.84v6.8c0 3.38-2.74 6.12-6.12 6.12S4.44 18.01 4.44 14.63s2.74-6.12 6.12-6.12c.28 0 .55.02.82.07v2.32a3.8 3.8 0 00-.82-.09c-2.1 0-3.81 1.7-3.81 3.81s1.7 3.81 3.81 3.81 3.81-1.7 3.81-3.81V2z"/>
      </svg>
    </a>

    <!-- GOOGLE MAPS -->
    <a href="https://share.google/6DKrTKQY7CefplVow" target="_blank" class="maps">
      <MapPin />
    </a>

  </div>

</template>

<style scoped>

/* CONTENEDOR */
.social {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

/* BOTONES */
.social a {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  color: white;

  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);

  transition: all 0.3s ease;
}

/* ICONOS */
.social svg {
  width: 22px;
  height: 22px;
}

/* HOVER */
.social a:hover {
  transform: translateY(-6px) scale(1.12);
}

/* COLORES */
.whatsapp {
  background: #25d366; /* 🔥 ya se ve oficial siempre */
}

.whatsapp:hover {
  box-shadow: 0 8px 25px rgba(37,211,102,0.5);
}

.instagram:hover {
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af);
}

.facebook:hover {
  background: #1877f2;
}

.tiktok:hover {
  background: #000;
}

.maps:hover {
  background: #ea4335;
}

</style>