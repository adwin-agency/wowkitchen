import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'Производство' },
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/blog/:code',
    name: 'article',
    meta: { introEffect: true },
    component: () => import('@/views/ArticleView.vue')
  },
  {
    path: '/installing',
    name: 'installing',
    meta: { title: 'Сборка' },
    component: () => import('@/views/InstallingView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: { title: 'Контакты' },
    component: () => import('@/views/ContactsView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: { title: 'Доставка' },
    component: () => import('@/views/DeliveryView.vue')
  },
  {
    path: '/discount',
    name: 'discount',
    meta: { title: 'Акции' },
    component: () => import('@/views/DiscountView.vue')
  },
  {
    path: '/guarantee',
    name: 'guarantee',
    meta: { title: 'Гарантии', introEffect: true },
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
    meta: { title: 'Материалы', introEffect: true },
    component: () => import('@/views/MaterialsView.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    meta: { title: 'Оплата', introEffect: true },
    component: () => import('@/views/PaymentView.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    meta: { title: 'Оплата онлайн' },
    component: () => import('@/views/PayView.vue')
  },
  {
    path: '/pay-success',
    name: 'pay-success',
    meta: { title: 'Оплата онлайн' },
    component: () => import('@/views/PaySuccessView.vue')
  },
  {
    path: '/pay-error',
    name: 'pay-error',
    meta: { title: 'Оплата онлайн' },
    component: () => import('@/views/PayErrorView.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    meta: { title: 'Расчет онлайн' },
    component: () => import('@/views/QuizView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    meta: { title: 'Отзывы' },
    component: () => import('@/views/ReviewsView.vue')
  },
  {
    path: '/sizing',
    name: 'sizing',
    meta: { title: 'Замер' },
    component: () => import('@/views/SizingView.vue')
  },
  {
    path: '/team',
    name: 'team',
    meta: { title: 'Команда', introEffect: true },
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
    meta: { title: 'Вакансии', introEffect: true },
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
  linkExactActiveClass: '',
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.meta.introEffect) {
  //     return { top: 0 }
  //   }

  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // }
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    const crumbs = [{ title: to.meta.title }]
    store.commit('setBreadCrumbs', crumbs)
  }  
})

export default router
