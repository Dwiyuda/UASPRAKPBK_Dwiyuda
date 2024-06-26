import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue'

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherWidget
  },
  {
    path: '/tugas1',
    name: 'Tugas1',
    beforeEnter() { location.href = 'https://dwiy-project-cv.netlify.app/'; }
  },
  {
    path: '/tugas2',
    name: 'Tugas2',
    beforeEnter() { location.href = 'https://dwiyuda-tugas2.vercel.app/'; }
  },
  {
    path: '/tugas3',
    name: 'Tugas3',
    beforeEnter() { location.href = 'https://dwiyuda-223510389-tugas3.vercel.app/'; }
  },
  {
    path: '/tugas4',
    name: 'Tugas4',
    beforeEnter() { location.href = 'https://dwiyuda-tugas4.vercel.app/'; }
  },
  {
    path: '/tugas5',
    name: 'Tugas5',
    beforeEnter() { location.href = 'https://dwiyuda-tugas5.vercel.app/'; }
  },
  {
    path: '/tugas6',
    name: 'Tugas6',
    beforeEnter() { location.href = 'https://dwiyuda-tugas6-223510389.vercel.app/'; }
  },
  {
    path: '/tugas7',
    name: 'Tugas7',
    beforeEnter() { location.href = 'https://dwiyuda-tugas7.vercel.app/'; }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
