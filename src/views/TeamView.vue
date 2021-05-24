<template>
  <div class="v-team">
    <SideFixed :pageData="page">
      <Team />
    </SideFixed>
  </div>
</template>

<script>
import Team from '../components/Team.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'TeamView',
  components: {
    SideFixed,
    Team
  },
  data() {
    return {
      page: {
        id: 'team',
        img: 'team-bg.jpg',
        heading: 'Команда',
        desc: [
          'В нашей команде собраны квалифицированные специалисты, которыми мы очень гордимся. Каждый наш сотрудник имеет за плечами богатый опыт в своей сфере и регулярно проходит курсы повышения квалификации. '
        ]
      }
    }
  }
}
</script>
