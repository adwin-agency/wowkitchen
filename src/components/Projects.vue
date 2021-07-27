<template>
  <div class="projects">
    <AppIcon
      class="projects__bg-pattern"
      name="wow-pattern"
    />
    <div class="projects__heading">
      <div class="container">
        <h2>Индивидуальные проекты <br><span>для любых планировок</span></h2>
      </div>
    </div>
    <CardSlider
      :cards="cards"
      class="projects__slider"
    />
    <div
      v-if="!catalog"
      class="projects__content"
    >
      <div class="container">
        <p
          ref="desc"
          class="projects__desc"
          :class="{'is-active': activeDesc}"
        >
          Мы создаём законченные проекты с нуля <span>по{{'\xa0'}}индивидуальным дизайн-проектам,</span> используя лишь экологичные материалы
          <AppIcon
            class="projects__desc-icon"
            name="leaf-filled"
          />
        </p>
      </div>
    </div>
    <div
      v-if="!catalog"
      class="projects__extras"
    >
      <AppExtras
        title="Бесплатный замер у вас дома"
        desc="Наш специалист поможет не потеряться в многообразии материалов, подскажет верную планировку и сделает расчёт проекта. Бесплатно. Совершенно бесплатно."
      />
    </div>
  </div>
</template>

<script>
import AppExtras from './base/AppExtras.vue'
import AppIcon from './base/AppIcon.vue'
import CardSlider from './CardSlider.vue'

const cards = [
  { route: '/kitchens?category=uglovye', image: 'L.png', title: 'Угловые кухни', icon: 'kit1' },
  { route: '/kitchens?category=pryamye', image: 'I.png', title: 'Прямые кухни', icon: 'kit2' },
  { route: '/kitchens?category=p-obraznye', image: 'U.png', title: 'П-образные', icon: 'kit3' },
  { route: '/kitchens?category=s-barnoy-stoykoy', image: 'bar.png', title: 'С барной стойкой' },
  { route: '/kitchens?category=s-ostrovom', image: 'island.png', title: 'С островом' }
]

export default {
  name: 'Projects',
  components: {
    AppExtras,
    AppIcon,
    CardSlider
  },
  props: {
    catalog: Boolean
  },
  data() {
    return {
      cards: cards,
      activeDesc: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.catalog) {
        return
      }
      
      if (this.$refs.desc.getBoundingClientRect().top < window.innerHeight * 0.8) {
        this.activeDesc = true
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style lang="scss">
.projects {
  $b: &;

  position: relative;
  padding: 34px 0 94px;
  background-color: #eaebf1;

  .container {
    position: relative;
  }

  &__slider {
    margin-top: 26px;
  }

  &__content {
    margin-top: 54px;
  }

  &__desc {
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    line-height: (42/20);

    span {
      padding: 5px;
      background-color: #fde93d;
    }
  }

  &__desc-icon {
    display: inline;
    margin-left: -5px;
    margin-bottom: 9px;
    width: 16px;
    height: 16px;
    fill: #17ba95;
  }

  &__bg-pattern {
    position: absolute;
    left: 50%;
    bottom: -110px;
    width: 470px;
    height: 490px;
    fill: #fff;
    opacity: 0.2;
    transform: rotate(45deg);
  }

  &__extras {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -40px;
    margin-left: -80px;
    z-index: 2;
  }

  @include media(md) {
    padding: 56px 0;

    &__content {
      margin-top: 64px;
    }

    &__desc {
      max-width: 520px;
      text-align: left;
      opacity: 0;
      pointer-events: none;
      transform: translateY(100%);
      transition: opacity 0.5s ease, transform 0.5s ease;

      @keyframes projects-leaf {
        0% {
          transform: rotate(0);
        }
        25% {
          transform: rotate(15deg);
        }
        50% {
          transform: rotate(0);
        }
        75% {
          transform: rotate(30deg);
        }
        100% {
          transform: rotate(0);
        }
      }

      &-icon {
        opacity: 0;
        transform-origin: left bottom;
        transition: opacity 0.5s ease 1s;
      }

      span {
        background-color: transparent;
        background-image: linear-gradient(90deg, #fde93d 50%, transparent 50%);
        background-position: 100% 0;
        background-size: 200% 100%;
        transition: background-position 0.5s ease 0.5s;
      }

      &.is-active {
        opacity: 1;
        pointer-events: all;
        transform: none;

        #{$b}__desc-icon {
          opacity: 1;
          animation: projects-leaf 1s ease 1.25s;
        }

        span {
          background-position: 0 0;
        }
      }
    }

    &__desc-icon {
      margin-left: 0;
      margin-bottom: 3px;
      width: 18px;
      height: 18px;
    }

    &__bg-pattern {
      width: 630px;
      height: 660px;
      bottom: -200px;
    }

    &__extras {
      position: absolute;
      left: auto;
      top: auto;
      right: 6px;
      bottom: -110px;
      margin: 0;
    }
  }

  @include media(lg) {
    padding: 64px 0 92px;

    &__content {
      margin-top: 90px;
    }

    &__desc {
      margin-left: 80px;
      max-width: 780px;
      font-size: 30px;
      line-height: (62/30);
    }

    &__desc-icon {
      margin-left: -9px;
      margin-bottom: 13px;
      width: 24px;
      height: 24px;
    }

    &__bg-pattern {
      width: 730px;
      height: 770px;
      margin-left: 150px;
    }

    &__extras {
      right: -32px;
      bottom: -45px;
    }
  }

  @include media(xl) {
    padding: 110px 0 162px;

    &__slider {
      margin-top: 70px;
    }

    &__content {
      margin-top: 200px;
    }

    &__extras {
      right: -44px;
      bottom: -65px;
    }
  }
}
</style>
