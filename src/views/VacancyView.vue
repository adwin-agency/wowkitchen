<template>
  <div class="v-vacancy">
    <SideFixed :pageData="page">
      <Vacancy />
    </SideFixed>
  </div>
</template>

<script>
import Vacancy from '../components/Vacancy.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'VacancyView',
  components: {
    SideFixed,
    Vacancy
  },
  data() {
    return {
      page: {
        id: 'vacancy',
        img: 'vacancy-bg.jpg',
        heading: 'Вакансии',
        desc: [
          'В нашей команде собраны квалифицированные специалисты, которыми мы очень гордимся. Каждый наш сотрудник имеет за плечами богатый опыт в своей сфере и регулярно проходит курсы повышения квалификации.'
        ]
      }
    }
  }
}
</script>
