import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/ArticleView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('@/views/DeliveryView.vue')
  },
  {
    path: '/discount',
    name: 'discount',
    component: () => import('@/views/DiscountView.vue')
  },
  {
    path: '/guarantee',
    name: 'guarantee',
    component: () => import('@/views/GuaranteeView.vue')
  },
  {
    path: '/kitchens',
    name: 'kitchens',
    component: () => import('@/views/KitchensView.vue')
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('@/views/KitchenView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/ReviewsView.vue')
  },
  {
    path: '/technics',
    name: 'technics',
    component: () => import('@/views/TechnicsView.vue')
  },
  {
    path: '/technic',
    name: 'technic',
    component: () => import('@/views/TechnicView.vue')
  },
  {
    path: '/wardrobes',
    name: 'wardrobes',
    component: () => import('@/views/WardrobesView.vue')
  },
  {
    path: '/wardrobe',
    name: 'wardrobe',
    component: () => import('@/views/WardrobeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
