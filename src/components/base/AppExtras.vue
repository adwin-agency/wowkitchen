<template>
  <div
    class="extras"
    :class="{'is-active': isActive}"
  >
    <div class="extras__circle"></div>
    <p class="extras__title">{{title}}</p>
    <p class="extras__desc">
      {{desc}}
      <br><br>
      <router-link
        to="/"
        class="extras__link"
      >
        Ещё
      </router-link>
    </p>
    <div
      class="extras__expand"
      @click="toggleExtras"
    >
      +
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppExtras',
  props: {
    title: String,
    desc: String
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleExtras() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.extras {
  $b: &;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 208px;
  height: 208px;
  text-align: center;
  

  &.is-active {
    #{$b} {
      &__circle {
        transform: scale(1.5);
      }

      &__title {
        transform: translateY(-150%) scale(0.875);
      }

      &__desc {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
      }

      &__expand {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  &__circle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #cfd2e5;
    transition: transform .3s ease;
  }

  &__title {
    position: absolute;
    top: 50%;
    width: 148px;
    margin: auto;
    font-weight: bold;
    font-size: 16px;
    line-height: (20/16);
    transform: translateY(-50%);
    transition: transform .3s ease;
  }

  &__desc {
    position: absolute;
    top: 50%;
    width: 202px;
    margin: auto;
    font-weight: bold;
    font-size: 17px;
    line-height: (22/17);
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
    transition: opacity .3s ease, transform .3s ease;
  }

  &__link {
    font-size: 14px;
    color: $color-green;
  }

  &__expand {
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
    transition: transform .3s ease;
  }

  @include media(md) {
    width: 272px;
    height: 272px;
    padding: 64px;

    &.is-active {
      #{$b} {
        &__expand {
          transform: translate(-80%, -80%) rotate(45deg);
        }
      }
    }

    &__expand {
      left: 10px;
      top: -3px;
    }
  }

  @include media(lg) {
    width: 362px;
    height: 362px;
    padding: 100px;

    &.is-active {
      #{$b} {
        &__expand {
          transform: translate(-100%, -100%) rotate(45deg);
        }
      }
    }

    &__title {
      font-size: 18px;
    }

    &__expand {
      left: 5px;
      top: 27px;
    }
  }
}
</style>
