import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView'
import AboutView from '../views/AboutView'
import ArticleView from '../views/ArticleView'
import InstallingView from '../views/InstallingView'
import BlogView from '../views/BlogView'
import ContactsView from '../views/ContactsView'
import DeliveryView from '../views/DeliveryView'
import DiscountView from '../views/DiscountView'
import GuaranteeView from '../views/GuaranteeView'
import KitchensView from '../views/KitchensView'
import KitchenView from '../views/KitchenView'
import MaterialsView from '../views/MaterialsView'
import NotFoundView from '../views/NotFoundView'
import PaymentView from '../views/PaymentView'
import PayView from '../views/PayView'
import PaySuccessView from '../views/PaySuccessView'
import PayErrorView from '../views/PayErrorView'
import QuizView from '../views/QuizView'
import ReviewsView from '../views/ReviewsView'
import SizingView from '../views/SizingView'
import TeamView from '../views/TeamView'
import TechnicsView from '../views/TechnicsView'
import TechnicView from '../views/TechnicView'
import VacancyView from '../views/VacancyView'
import WardrobesView from '../views/WardrobesView'
import WardrobeView from '../views/WardrobeView'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'Производство' },
    component: AboutView
  },
  {
    path: '/blog/:code',
    name: 'article',
    meta: { introEffect: true },
    component: ArticleView
  },
  {
    path: '/installing',
    name: 'installing',
    meta: { title: 'Сборка' },
    component: InstallingView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: { title: 'Контакты' },
    component: ContactsView
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: { title: 'Доставка' },
    component: DeliveryView
  },
  {
    path: '/discount',
    name: 'discount',
    meta: { title: 'Акции' },
    component: DiscountView
  },
  {
    path: '/guarantee',
    name: 'guarantee',
    meta: { title: 'Гарантии', introEffect: true },
    component: GuaranteeView
  },
  {
    path: '/kitchens',
    name: 'kitchens',
    component: KitchensView
  },
  {
    path: '/kitchens/:code',
    name: 'kitchen',
    component: KitchenView
  },
  {
    path: '/materials',
    name: 'materials',
    meta: { title: 'Материалы', introEffect: true },
    component: MaterialsView
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFoundView
  },
  {
    path: '/payment',
    name: 'payment',
    meta: { title: 'Оплата', introEffect: true },
    component: PaymentView
  },
  {
    path: '/pay',
    name: 'pay',
    meta: { title: 'Оплата онлайн' },
    component: PayView
  },
  {
    path: '/pay-success',
    name: 'pay-success',
    meta: { title: 'Оплата онлайн' },
    component: PaySuccessView
  },
  {
    path: '/pay-error',
    name: 'pay-error',
    meta: { title: 'Оплата онлайн' },
    component: PayErrorView
  },
  {
    path: '/quiz',
    name: 'quiz',
    meta: { title: 'Расчет онлайн' },
    component: QuizView
  },
  {
    path: '/reviews',
    name: 'reviews',
    meta: { title: 'Отзывы' },
    component: ReviewsView
  },
  {
    path: '/sizing',
    name: 'sizing',
    meta: { title: 'Замер' },
    component: SizingView
  },
  {
    path: '/team',
    name: 'team',
    meta: { title: 'Команда', introEffect: true },
    component: TeamView
  },
  {
    path: '/technics',
    name: 'technics',
    component: TechnicsView
  },
  {
    path: '/technics/:code',
    name: 'technic',
    component: TechnicView
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    meta: { title: 'Вакансии', introEffect: true },
    component: VacancyView
  },
  {
    path: '/wardrobes',
    name: 'wardrobes',
    component: WardrobesView
  },
  {
    path: '/wardrobes/:code',
    name: 'wardrobe',
    component: WardrobeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'is-active',
  linkExactActiveClass: '',
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
