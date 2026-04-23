<script setup lang="ts">
</script>

<template>
  <section class="terms">

    <div class="container">

      <!-- TÍTULO -->
      <h1>Terminos y Condiciones de Renta</h1>
      <h2>Inflables Juanito’s</h2>
      <p class="updated">Última actualización: 10 de septiembre de 2025</p>

      <!-- INTRO -->
      <p class="intro">
        Para garantizar la mejor experiencia y seguridad en tu evento,
        te presentamos nuestras condiciones de renta. Por favor, léelas detenidamente
        antes de realizar tu reserva.
      </p>

      <!-- ANTICIPO -->
      <div class="block">
        <h3>Anticipo y Forma de Pago</h3>
        <p>
          Para confirmar tu reserva, es necesario realizar un anticipo de $200 pesos.
          Este anticipo asegura la disponibilidad de los inflables y servicios.
        </p>

        <ul>
          <li>Transferencias bancarias</li>
          <li>Depósitos</li>
          <li>Pagos en efectivo</li>
          <li>Pagos con tarjeta</li>
          <li>Pagos móviles (CoDi)</li>
        </ul>

        <p class="note">
          El resto del pago debe liquidarse al momento de la instalación.
        </p>
      </div>

      <!-- CANCELACIONES -->
      <div class="block">
        <h3>Política de Cancelaciones</h3>
        <ul>
          <li><b>7+ días:</b> 80% de reembolso</li>
          <li><b>Menos de 7 días:</b> No hay reembolso, pero puedes reprogramar (30 días)</li>
        </ul>
      </div>

      <!-- INSTALACIÓN -->
      <div class="block">
        <h3>Requisitos de Instalación</h3>

        <h4>Energía Eléctrica</h4>
        <p>
          Se requiere conexión de 110V a máximo 15 metros. Nosotros proporcionamos extensiones.
        </p>

        <h4>Espacio</h4>
        <ul>
          <li>1 metro extra alrededor</li>
          <li>Superficie plana</li>
          <li>Sin objetos punzantes</li>
          <li>Sin piedras o ramas</li>
        </ul>
      </div>

      <!-- HORARIOS -->
      <div class="block">
        <h3>Horarios de Servicio</h3>
        <ul>
          <li>Montaje: 1 hora antes</li>
          <li>Desmontaje: 30 a 45 minutos</li>
             <li>La entrega se realiza al menos 1 hora antes del evento.</li>
    <li>Horario de entrega: de 8:00 a 14:00 hrs el día del evento.</li>
    <li>Nos comunicamos 30 minutos antes de llegar.</li>
        </ul>
      </div>

      <!-- ENTREGA -->
      <div class="block">
        <h3>Condiciones de Entrega</h3>
        <ul>
          <li>Entrega en planta baja</li>
          <li>Cargos extra por pisos o distancia mayor a 10m</li>
          <li>No entregas en áreas comunes</li>
        </ul>
      </div>

      <!-- SEGURIDAD -->
      <div class="block">
        <h3>Restricciones de Seguridad</h3>

        <h4>Propiedades Habitadas</h4>
        <p>
          No instalamos en propiedades deshabitadas bajo ninguna circunstancia.
        </p>

        <h4>Lugares Rentados</h4>
        <p>
          Se requiere contacto del responsable del lugar.
        </p>

        <h4>Identificación del Personal</h4>
        <p>
          Nuestro personal se identificará al instalar y retirar el equipo.
        </p>
      </div>

      <!-- USO -->
      <div class="block">
        <h3>Supervisión y Uso</h3>

        <h4>Supervisión</h4>
        <p>
          Se requiere supervisión adulta en todo momento.
        </p>

        <h4>Uso Prohibido</h4>
        <ul>
          <li>Zapatos</li>
          <li>Comida o bebidas</li>
          <li>Chicles y dulces</li>
          <li>Objetos punzantes</li>
        </ul>
      </div>

      <!-- CLIMA -->
      <div class="block">
        <h3>Condiciones Climáticas</h3>
        <p>
          En caso de lluvia o viento fuerte, el servicio puede suspenderse
          por seguridad.
        </p>
      </div>

      <!-- RESPONSABILIDAD -->
      <div class="block">
        <h3>Responsabilidades</h3>

        <h4>Del Cliente</h4>
        <ul>
          <li>Mal uso</li>
          <li>Negligencia</li>
          <li>Incumplimiento de normas</li>
        </ul>

        <h4>De Inflables Juanito’s</h4>
        <p>
          No nos hacemos responsables por accidentes derivados del mal uso
          o falta de supervisión.
        </p>
      </div>

      <!-- ACEPTACIÓN -->
      <div class="block">
  <h3>Aceptación de Términos</h3>
  <p>
    Al realizar el anticipo, aceptas todas estas condiciones.
  </p>
</div>

      <!-- RESERVA -->
      <div class="block">
        <h3>Proceso de Reserva</h3>
        <ul>
          <li>Datos personales</li>
          <li>Comprobante de domicilio</li>
          <li>INE</li>
        </ul>
        <p>
          Se elaborará contrato y el pago final se realiza al recibir el equipo.
        </p>
      </div>

    </div>
    
    <h2>Contáctanos</h2>
    <p>Email: inflablesjuanitos@gmail.com</p>

  </section>
</template>

<style scoped>

/* FONDO */
.terms {
  background: linear-gradient(135deg, #020617, #0f172a);
  min-height: 100vh;
  padding: 120px 20px 60px;
  color: white;
}

/* CONTENEDOR */
.container {
  max-width: 900px;
  margin: auto;
}

/* TITULOS */
h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h2 {
  
  margin-bottom: 10px;
}

.updated {
  color: #94a3b8;
  margin-bottom: 30px;
}

.intro {
  margin-bottom: 40px;
  line-height: 1.6;
}

/* BLOQUES */
.block {
  background: rgba(255,255,255,0.03);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 20px;
  border: 1px solid rgba(255,255,255,0.05);
}

.block h3 {
  margin-bottom: 10px;
}

.block h4 {
  margin-top: 15px;

}

/* LISTAS */
ul {
  padding-left: 20px;
  margin-top: 10px;
}

li {
  margin-bottom: 6px;
}



.note {
  margin-top: 10px;
  color: #94a3b8;
}

</style>