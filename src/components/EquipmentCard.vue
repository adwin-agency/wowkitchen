<template>
  <div :class="['equipment-card', {'equipment-card_lg': lg}, {'is-active': active}]">
    <div class="equipment-card__wrapper">
      <div
        class="equipment-card__bg"
        :style="`background-image: url(${require(`@/assets/img/${$_mobile ? cardData.image.mobile : cardData.image.desktop}`)})`"
      ></div>
      <div class="equipment-card__inner">
        <div class="equipment-card__features">
          <p
            v-for="(feature, index) in cardData.features"
            :key="index"
            class="equipment-card__feature"
          >
            <AppIcon class="equipment-card__feature-icon" :name="feature.icon" />
            {{feature.title}}
          </p>
        </div>
        <p class="equipment-card__title">{{cardData.title}}</p>
        <p v-if="!$_media.sm && cardData.company" class="equipment-card__company">
          <span class="equipment-card__flag"></span>
          {{cardData.company}}
        </p>
        <p v-if="!$_media.sm" class="equipment-card__desc">{{cardData.desc}}</p>
      </div>      
    </div>
    <p v-if="$_media.sm" class="equipment-card__desc">{{cardData.desc}}</p>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'EquipmentCard',
  components: {
    AppIcon
  },
  props: {
    active: Boolean,
    cardData: Object,
    lg: Boolean
  }
}
</script>

<style lang="scss">
.equipment-card {
  $b: &;

  &.is-active {
    #{$b} {
      &__inner {
        opacity: 1;
      }

      &__desc {
        opacity: 1;
      }
    }
  }

  &__wrapper {
    display: flex;
    position: relative;
    padding: 24px 20px 34px;
    min-height: 260px;
    z-index: 1;
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-size: cover;
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.28);
    overflow: hidden;
    z-index: -1;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0, rgba(#000, .67), transparent);
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    transition: opacity .3s ease;
  }

  &__features {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
  }

  &__feature {
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 6px 16px;
    margin-bottom: 3px;
    font-weight: bold;
    font-size: 11px;
    color: $color-lightgray;
    background-color: rgba(#aca8c3, 0.6);
  }

  &__feature-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    fill: currentColor;
  }

  &__title {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
  }

  &__company {
    display: flex;
    align-items: center;
    margin-top: 6px;
    font-weight: 500;
    font-size: 12px;
    color: $color-lightviolet;
  }

  &__flag {
    display: flex;
    align-items: center;
    margin-right: 20px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid $color-lightviolet;
    background-image: linear-gradient(#ed2939 6px, #fff 6px, #fff 12px, #ed2939 12px);
  }

  &__desc {
    margin-top: 24px;
    font-size: 12px;
    line-height: (20/12);
    opacity: 0;
    transition: opacity .3s ease;
  }

  @include media(md) {
    display: flex;

    &__wrapper {
      padding: 24px 40px 28px;
      min-height: 240px;
    }

    &__inner {
      opacity: 1;
    }

    &__feature {
      padding: 6px 34px 6px 16px;
    }

    &__title {
      margin-left: 0;
      font-size: 14px;
    }

    &__desc {
      margin-top: 5px;
      color: #fff;
      opacity: 1;
    }
  }

  @include media(lg) {
    &_lg {
      #{$b} {
        &__bg {
          border-radius: 0 50px 50px 0;
        }

        &__wrapper {
          padding: 75px 140px 60px 90px;
        }

        &__feature {
          margin-bottom: 10px;
          padding: 7px 34px 7px 23px;
        }

        &__title {
          font-size: 24px;
        }
      }
    }

    &__wrapper {
      min-height: 380px;
      padding: 44px 30px 38px;
    }

    &__title {
      font-size: 18px;
    }

    &__company {
      margin-top: 10px;
    }

    &__desc {
      margin-top: 12px;
      min-height: (20/12*3em);
    }
  }

  @include media(xl) {
    &__wrapper {
      min-height: 420px;
    }

    &_lg {
      #{$b} {
        &__wrapper {
          padding: 75px 160px;
        }
      }
    }
  }
}
</style>
