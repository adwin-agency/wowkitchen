import { createRouter, createWebHistory } from 'vue-router'
// import MainView from '../views/MainView'
// import AboutView from '../views/AboutView'
// import ArticleView from '../views/ArticleView'
// import InstallingView from '../views/InstallingView'
// import BlogView from '../views/BlogView'
// import ContactsView from '../views/ContactsView'
// import DeliveryView from '../views/DeliveryView'
// import DiscountView from '../views/DiscountView'
// import GuaranteeView from '../views/GuaranteeView'
// import KitchensView from '../views/KitchensView'
// import KitchenView from '../views/KitchenView'
// import MaterialsView from '../views/MaterialsView'
// import NotFoundView from '../views/NotFoundView'
// import PaymentView from '../views/PaymentView'
// import PayView from '../views/PayView'
// import PaySuccessView from '../views/PaySuccessView'
// import PayErrorView from '../views/PayErrorView'
// import QuizView from '../views/QuizView'
// import ReviewsView from '../views/ReviewsView'
// import SizingView from '../views/SizingView'
// import TeamView from '../views/TeamView'
// import TechnicsView from '../views/TechnicsView'
// import TechnicView from '../views/TechnicView'
// import VacancyView from '../views/VacancyView'
// import WardrobesView from '../views/WardrobesView'
// import WardrobeView from '../views/WardrobeView'
const MainView = () => import('../views/MainView')
const AboutView = () => import('../views/AboutView')
const ArticleView = () => import('../views/ArticleView')
const InstallingView = () => import('../views/InstallingView')
const BlogView = () => import('../views/BlogView')
const ContactsView = () => import('../views/ContactsView')
const DeliveryView = () => import('../views/DeliveryView')
const DiscountView = () => import('../views/DiscountView')
const GuaranteeView = () => import('../views/GuaranteeView')
const KitchensView = () => import('../views/KitchensView')
const KitchenView = () => import('../views/KitchenView')
const MaterialsView = () => import('../views/MaterialsView')
const NotFoundView = () => import('../views/NotFoundView')
const PaymentView = () => import('../views/PaymentView')
const PayView = () => import('../views/PayView')
const PaySuccessView = () => import('../views/PaySuccessView')
const PayErrorView = () => import('../views/PayErrorView')
const QuizView = () => import('../views/QuizView')
const ReviewsView = () => import('../views/ReviewsView')
const SizingView = () => import('../views/SizingView')
const TeamView = () => import('../views/TeamView')
const TechnicsView = () => import('../views/TechnicsView')
const TechnicView = () => import('../views/TechnicView')
const VacancyView = () => import('../views/VacancyView')
const WardrobesView = () => import('../views/WardrobesView')
const WardrobeView = () => import('../views/WardrobeView')
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
    meta: { title: 'Гарантии' },
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
    meta: { title: 'Материалы' },
    component: MaterialsView
  },
  {
    path: '/payment',
    name: 'payment',
    meta: { title: 'Оплата' },
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
    path: '/quiz-wardrobe',
    name: 'quiz-wardrobe',
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
    meta: { title: 'Команда' },
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
    meta: { title: 'Вакансии' },
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
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active',
  linkExactActiveClass: '',
  scrollBehavior(to) {
    if (!to.params.showMore && !to.params.showAll) {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  store.commit('setLoaded', false)
})

router.afterEach((to) => {
  if (to.meta.title) {
    const crumbs = [{ title: to.meta.title }]
    store.commit('setBreadCrumbs', crumbs)
  }
  if (to.name !== 'article') {
    store.commit('setLoaded', true)
  }
})

export default router
