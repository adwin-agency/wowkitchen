<template>
  <div class="v-payment">
    <SideFixed :pageData="page">
      <Payment />
    </SideFixed>
  </div>
</template>

<script>
import Payment from '../components/Payment.vue'
import SideFixed from '../components/SideFixed.vue'

export default {
  name: 'PaymentView',
  components: {
    SideFixed,
    Payment
  },
  data() {
    return {
      page: {
        id: 'payment',
        img: 'payment-bg.jpg',
        heading: 'Оплата',
        desc: [
          'Мы стремимся сделать процесс покупки мебели максимально быстрым и комфортным. Для вашего удобства, мы предлагаем несколько способов оплаты.'
        ]
      }
    }
  }
}
</script>
