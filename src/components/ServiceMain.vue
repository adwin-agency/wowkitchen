<template>
  <div class="service-main">
    <div class="service-main__pattern"></div>
    <div class="service-main__pattern"></div>
    <div class="service-main__pattern"></div>
    <div class="container">
      <h2 class="service-main__heading" v-html="heading"></h2>
      <div class="service-main__steps">
        <ServiceStep
          v-for="(step, index) in steps"
          :key="index"
          :stepData="step"
          class="service-main__step"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceStep from './ServiceStep.vue'

export default {
  name: 'ServiceMain',
  components: {
    ServiceStep
  },
  props: {
    heading: String,
    steps: Array
  }
}
</script>

<style lang="scss">
.service-main {
  position: relative;
  padding: 50px 0 60px;

  &__pattern {
    content: '';
    position: absolute;
    left: -50px;
    top: -50px;
    width: 300px;
    height: 450px;
    background-image: url('~@/assets/img/wow-pattern.svg');
    background-size: 100% 100%;
    background-repeat: repeat-y;
    opacity: 0.3;
    z-index: -1;

    &:nth-child(2) {
      top: 345px;
    }

    &:nth-child(3) {
      top: 745px;
    }
  }

  &__steps {
    margin-top: 50px;
  }

  &__step {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include media(md) {
    padding: 100px 0 130px;

    &__steps {
      margin-top: 80px;
    }

    &__step {
      margin-bottom: 80px;
    }
  }

  @include media(lg) {
    padding: 135px 0;

    &__pattern {
      width: 500px;
      height: 750px;

      &:nth-child(2) {
        top: 600px;
      }

      &:nth-child(3) {
        top: 1250px;
      }
    }

    &__steps {
      margin: 110px auto 0;
      max-width: 1260px;
    }

    &__step {
      margin-bottom: 110px;
    }
  }

  @include media(xl) {
    &__steps {
      margin: 110px auto 0 240px;
    }
  }
}
</style>
