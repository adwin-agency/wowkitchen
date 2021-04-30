<template>
  <div class="extras">
    <p class="extras__title">{{title}}</p>
    <p class="extras__desc">{{desc}}<br><br><router-link to="/" class="extras__link">Ещё</router-link></p>
    <div class="extras__toggler">+</div>
  </div>
</template>

<script>
export default {
  name: 'AppExtras',
  props: {
    title: String,
    desc: String
  }
}
</script>

<style lang="scss">
.extras {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 208px;
  height: 208px;
  padding: 30px;
  border-radius: 50%;
  text-align: center;
  background-color: #cfd2e5;

  &__title {
    font-weight: bold;
    font-size: 16px;
    line-height: (20/16);
  }

  &__desc {
    display: none;
  }

  &__toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -30px;
    top: 10px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    font-weight: 300;
    font-size: 35px;
    background-color: $color-yellow;
  }

  @include media(md) {
    width: 272px;
    height: 272px;
    padding: 64px;

    &__toggler {
      left: 10px;
      top: -3px;
    }
  }

  @include media(lg) {
    width: 362px;
    height: 362px;
    padding: 100px;

    &__title {
      font-size: 18px;
    }

    &__toggler {
      left: 5px;
      top: 27px;
    }
  }
}
</style>
