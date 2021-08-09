<template>
  <div
    class="extras"
    :class="{'is-active': isActive}"
  >
    <div class="extras__circle"></div>
    <div class="extras__box">
      <p class="extras__title">{{title}}</p>
      <p class="extras__desc">
        {{desc}}
        <br><br>
        <router-link
          to="/sizing"
          class="extras__link"
        >
          Расскажите по-подробнее
        </router-link>
      </p>
    </div>
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
        transform: translateY(0) scale(0.85);
      }

      &__desc {
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
      }

      &__expand {
        transform: translate(-50%, -50%) rotate(45deg);

        &::before {
          animation: none;
        }
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
    transition: transform 0.3s ease;
  }

  &__box {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 260px;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 148px;
    height: 60px;
    font-weight: bold;
    font-size: 16px;
    line-height: (20/16);
    transform: translateY(100px);
    transition: transform 0.3s ease;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-weight: bold;
    font-size: 13px;
    line-height: (22/17);
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &__link {
    font-size: 13px;
    color: $color-green;
  }

  @keyframes expand {
    from {
      opacity: 0.8;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(1.5);
    }
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
    transition: transform 0.3s ease;
    cursor: pointer;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: $color-yellow;
      animation: expand 1s infinite;
      z-index: -1;
    }
  }

  @include media(md) {
    width: 272px;
    height: 272px;

    &.is-active {
      #{$b} {
        &__expand {
          transform: translate(-80%, -80%) rotate(45deg) scale(1.15);
        }
      }
    }

    &__box {
      width: 250px;
      height: 300px;
    }

    &__title {
      transform: translateY(120px);
    }

    &__desc {
      height: 240px;
      font-size: 16px;
    }

    &__link {
      font-size: 14px;
    }

    &__expand {
      left: 10px;
      top: -3px;

      &:hover {
        transform: scale(1.15);
      }
    }
  }

  @include media(lg) {
    width: 362px;
    height: 362px;
    padding: 100px;

    &.is-active {
      #{$b} {
        &__expand {
          transform: translate(-100%, -100%) rotate(45deg) scale(1.15);
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
