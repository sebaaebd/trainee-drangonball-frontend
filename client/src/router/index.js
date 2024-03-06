// Importación de las funciones 'createRouter' y 'createWebHistory' de 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// Importación de las vistas 'HomeView' y 'PersonajeView'
import HomeView from '../views/HomeView.vue'
import PersonajeView from '../views/PersonajeView.vue'

// Creación del enrutador
const router = createRouter({
  // Utiliza el historial del navegador web para el enrutamiento
  history: createWebHistory(import.meta.env.BASE_URL),
  // Define las rutas de la aplicación
  routes: [
    {
      // Ruta para la página de inicio
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Ruta para la página de detalle de un personaje
      // ':ID' es un parámetro de ruta dinámico
      path: '/personaje/:ID',
      name: 'personaje',
      component: PersonajeView
    }
  ]
})

// Exporta el enrutador para ser utilizado en otras partes de la aplicación
export default router

