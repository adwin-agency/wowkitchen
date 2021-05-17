<template>
  <div class="v-materials">
    <SideFixed :pageData="page">
      <Materials />
    </SideFixed>
  </div>
</template>

<script>
import Materials from '../components/Materials.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'MaterialsView',
  components: {
    SideFixed,
    Materials
  },
  data() {
    return {
      page: {
        id: 'materials',
        img: 'materials-bg.jpg',
        heading: 'Материалы',
        desc: [
          'В нашем распоряжении богатый выбор материалов на любой вкус и бюджет. Единственное, что их объединяет – это высокое качество и экологичность. Обращаясь в нашу компанию, вы можете быть уверены в том, что конечный результат вас приятно удивит.'
        ]
      }
    }
  }
}
</script>
