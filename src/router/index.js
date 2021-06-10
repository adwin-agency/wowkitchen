import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/kitchens/:kitchen',
    name: 'kitchen',
    component: () => import('@/views/KitchenView.vue')
  },
  {
    path: '/materials',
    name: 'materials',
    component: () => import('@/views/MaterialsView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/PaymentView.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('@/views/QuizView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/ReviewsView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/TeamView.vue')
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
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('@/views/VacancyView.vue')
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
  // history: createWebHistory('/wow-build/'),
  history: createWebHashHistory('/wow-build/'),
  routes,
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
