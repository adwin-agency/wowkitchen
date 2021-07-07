import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/blog/:code',
    name: 'article',
    meta: { introEffect: true },
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
    meta: { introEffect: true },
    component: () => import('@/views/GuaranteeView.vue')
  },
  {
    path: '/kitchens',
    name: 'kitchens',
    component: () => import('@/views/KitchensView.vue')
  },
  {
    path: '/kitchens/:code',
    name: 'kitchen',
    component: () => import('@/views/KitchenView.vue')
  },
  {
    path: '/materials',
    name: 'materials',
    meta: { introEffect: true },
    component: () => import('@/views/MaterialsView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    meta: { introEffect: true },
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
    meta: { introEffect: true },
    component: () => import('@/views/TeamView.vue')
  },
  {
    path: '/technics',
    name: 'technics',
    component: () => import('@/views/TechnicsView.vue')
  },
  {
    path: '/technics/:code',
    name: 'technic',
    component: () => import('@/views/TechnicView.vue')
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    meta: { introEffect: true },
    component: () => import('@/views/VacancyView.vue')
  },
  {
    path: '/wardrobes',
    name: 'wardrobes',
    component: () => import('@/views/WardrobesView.vue')
  },
  {
    path: '/wardrobes/:code',
    name: 'wardrobe',
    component: () => import('@/views/WardrobeView.vue')
  }
]

const router = createRouter({
  // history: createWebHistory('/wow-build/'),
  // history: createWebHashHistory('/wow-build/'),
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.introEffect) {
      return { top: 0 }
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
