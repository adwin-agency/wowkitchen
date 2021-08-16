<template>
  <div
    class="review-card"
    :class="{ [`review-card_${mod}`]: mod }"
    @click="openModal"
  >
    <div
      class="review-card__image"
      :style="cardData.preview_image && `background-image: url(${$_basepath + cardData.preview_image})`"
    >
      <span
        v-if="!$_media.sm && mod === 'small'"
        class="review-card__play"
      >
        <AppIcon
          name="play"
          class="review-card__play-icon"
        />
      </span>
    </div>
    <div class="review-card__content">
      <span
        v-if="$_media.sm || mod !== 'small'"
        class="review-card__play"
      >
        <AppIcon
          name="play"
          class="review-card__play-icon"
        />
      </span>
      <p class="review-card__category">Кухня</p>
      <p class="review-card__title">
        <router-link
          :to="cardData.element_link"
          @click.stop
        >
          {{cardData.element_name}}
        </router-link>
      </p>
      <div class="review-card__footer">
        <p class="review-card__author">Владелец: {{cardData.customer}}</p>
        <div class="review-card__watch">
          <span v-if="!$_media.sm && (mod === 'big' || mod === 'small')">Смотреть отзыв</span>
          <AppIcon
            v-if="mod !== 'sample'"
            name="long-arrow"
            class="review-card__arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ReviewCard',
  components: {
    AppIcon
  },
  props: {
    mod: String,
    cardData: Object
  },
  methods: {
    openModal() {
      this.$store.commit('setModal', 'video')
      this.$store.commit('setModalData', { video: this.$_mobile ? this.cardData.video_customer.mobile : this.cardData.video_customer.desktop })
    }
  }
}
</script>

<style lang="scss">
.review-card {
  $b: &;

  position: relative;
  cursor: pointer;

  &:hover {
    #{$b} {
      &__play-icon {
        transform: scale(1.15);
      }

      &__arrow {
        transform: translateX(15px);
      }
    }
  }

  &_sample {
    display: flex;

    &::before {
      content: '';
      padding-top: 70%;
    }

    #{$b} {
      &__content {
        width: 100%;
        min-height: 0;
        height: auto;
        padding: 22px 30px;
      }

      &__category {
        margin-top: 10px;
      }

      &__title {
        font-size: 20px;
      }

      &__footer {
        margin-top: 6px;
      }

      &__author {
        font-size: 13px;
      }
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }

    &::before {
      background-color: #000;
      opacity: 0.2;
    }

    &::after {
      background-image: linear-gradient(0, #12131e, transparent 61%);
      opacity: 0.74;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    min-height: 310px;
    height: 100%;
    padding: 32px;
    font-weight: 500;
  }

  &__play {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: $color-yellow;

    &-icon {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
    }
  }

  &__category {
    margin-top: 20px;
    font-size: 14px;
    color: #aca8c3;
  }

  &__title {
    font-size: 22px;
    color: $color-green;

    a {
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 10px;
  }

  &__author {
    font-size: 14px;
    color: #fff;
  }

  &__watch {
    color: #fff;
  }

  &__arrow {
    width: 44px;
    height: 12px;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  @include media(md) {
    &_small {
      display: flex;

      #{$b} {
        &__image {
          display: flex;
          align-items: flex-end;
          position: relative;
          width: 53%;
          padding: 26px;
        }

        &__play {
          position: relative;
          z-index: 1;
        }

        &__content {
          justify-content: flex-start;
          flex: 1;
          margin-left: 20px;
          min-height: 138px;
          padding: 10px 0;
        }

        &__category {
          margin-top: 0;
        }

        &__title {
          font-size: 16px;
        }

        &__footer {
          display: block;
          margin-top: 4px;
        }

        &__author {
          margin-top: 0;
          color: $color-primary;
        }

        &__watch {
          margin-top: 30px;
          margin-left: 0;
          color: $color-green;
        }

        &__arrow {
          margin-left: 7px;
          width: 38px;
        }
      }
    }

    &_big {
      #{$b} {
        &__content {
          min-height: 285px;
          padding: 28px 32px 28px 48px;
        }

        &__title {
          font-size: 22px;
        }

        &__footer {
          margin-top: 8px;
        }

        &__arrow {
          margin-left: 22px;
        }
      }
    }

    &_sample {
      &::before {
        display: none;
      }

      #{$b} {
        &__content {
          min-height: 260px;
          height: 100%;
          padding: 26px 32px;
        }

        &__category {
          margin-top: 14px;
        }

        &__title {
          font-size: 22px;
        }

        &__footer {
          margin-top: 16px;
        }
      }
    }

    &__content {
      min-height: 310px;
      padding: 32px 30px;
    }

    &__title {
      font-size: 20px;
    }

    &__watch {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
    }
  }

  @include media(lg) {
    &_small {
      #{$b} {
        &__image {
          width: 56%;
        }

        &__content {
          min-height: 186px;
          padding: 30px 0;
        }

        &__title {
          margin-top: 2px;
          font-size: 18px;
        }

        &__footer {
          margin-top: 10px;
        }

        &__watch {
          margin-top: 40px;
        }

        &__arrow {
          margin-left: 14px;
          width: 44px;
        }
      }
    }

    &_big {
      #{$b} {
        &__content {
          min-height: 392px;
          padding: 36px 54px 36px 48px;
        }

        &__footer {
          margin-top: 18px;
        }
      }
    }

    &_sample {
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.21);
      }
    }

    &__content {
      min-height: 395px;
      padding: 44px 40px;
    }
  }

  @include media(xl) {
    &_small {
      #{$b} {
        &__image {
          width: 53%;
        }

        &__content {
          margin-left: 40px;
          min-height: 210px;
        }

        &__footer {
          margin-top: 16px;
        }

        &__watch {
          margin-top: 56px;
        }
      }
    }

    &_big {
      #{$b} {
        &__content {
          min-height: 450px;
          padding: 36px 82px 54px 48px;
        }
      }
    }

    &_sample {
      #{$b} {
        &__content {
          min-height: 300px;
          padding: 35px 40px;
        }
      }
    }

    &__content {
      min-height: 480px;
      padding: 40px 60px 40px 40px;
    }
  }
}
</style>
