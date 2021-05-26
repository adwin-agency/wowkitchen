<template>
  <div
    class="article-card"
    :class="{ [`article-card_${mod}`]: mod }"
  >
    <div class="article-card__image">
      <img
        :src="require(`@/assets/img/${cardData.image}`)"
        alt=""
      >
      <AppIcon
        v-if="cardData.video && ($_mobile || mod === 'small')"
        name="play"
        class="article-card__play-icon"
      />
    </div>
    <div class="article-card__content">
      <AppIcon
        v-if="!$_mobile && cardData.video && mod !== 'small'"
        name="play"
        class="article-card__play-icon"
      />
      <span class="article-card__tag">{{cardData.tag}}</span>
      <p class="article-card__title">{{cardData.title}}</p>
      <div class="article-card__footer">
        <span
          v-if="cardData.author"
          class="article-card__author"
        >
          {{cardData.author}}
        </span>
        <span
          v-if="cardData.date"
          class="article-card__date"
        >
          {{cardData.date}}
        </span>
        <span
          v-if="cardData.note"
          class="article-card__note"
        >
          {{cardData.note}}
        </span>
        <span class="article-card__views">
          <AppIcon
            name="view"
            class="article-card__views-icon"
          />
          {{cardData.views}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ArticleCard',
  components: {
    AppIcon
  },
  props: {
    cardData: Object,
    mod: String
  }
}
</script>

<style lang="scss">
.article-card {
  $b: &;

  position: relative;

  &_small {
    #{$b} {
      &__image {
        position: relative;
        height: 100px;
        border-radius: 12px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(0deg, #12131e, transparent 61%);
          opacity: 0.57;
        }
      }

      &__play-icon {
        position: absolute;
        left: 8px;
        bottom: 12px;
        width: 42px;
        height: 42px;
        margin-bottom: 0;
        z-index: 1;
      }

      &__content {
        margin-top: 4px;
        min-height: 0;
        padding: 0;
        color: $color-primary;
      }

      &__tag {
        color: #000;
        background-color: $color-lightgray;
      }

      &__title {
        margin-top: 6px;
        font-weight: 500;
        font-size: 13px;
        line-height: (15/13);
      }

      &__footer {
        margin-top: 10px;
        color: #9f9f9f;
      }
    }
  }

  &_large {
    #{$b} {
      &__content {
        min-height: 320px;
        padding: 32px 12px 24px;
      }

      &__tag {
        margin-bottom: auto;
      }

      &__title {
        font-size: 16px;
        line-height: (18/16);
      }

      &__footer {
        color: #9f9f9f;
      }

      &__author {
        width: 100%;
        margin-bottom: 5px;
        color: $color-lightgray;
      }

      &__views {
        margin-top: 5px;
        width: 100%;

        &-icon {
          fill: #dcdcdc;
        }
      }
    }
  }

  &_sample {
    #{$b} {
      &__image {
        position: relative;
        height: 100px;
        border-radius: 12px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(0deg, #12131e, transparent 61%);
          opacity: 0.57;
        }
      }

      &__play-icon {
        position: absolute;
        left: 8px;
        bottom: 12px;
        width: 42px;
        height: 42px;
        margin-bottom: 0;
        z-index: 1;
      }

      &__content {
        margin-top: 6px;
        min-height: auto;
        padding: 0;
        color: $color-primary;
      }

      &__tag {
        display: none;
      }

      &__title {
        margin-top: 0;
        font-weight: 500;
        font-size: 13px;
        line-height: (15/13);
      }

      &__footer {
        display: none;
      }
    }
  }

  &_related {
    #{$b} {
      &__image {
        position: relative;
        height: 100px;
      }

      &__content {
        margin-top: 6px;
        min-height: auto;
        padding: 0;
        color: $color-primary;
      }

      &__tag {
        color: $color-lightgray;
      }

      &__title {
        margin-top: 3px;
        font-weight: 500;
        font-size: 13px;
        line-height: (15/13);        
      }

      &__footer {
        margin-top: 11px;
      }

      &__date {
        margin-right: 6px;

        &::after {
          margin-left: 6px;
        }
      }
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg, #12131e, transparent 61%);
      opacity: 0.57;
    }
  }

  &__play-icon {
    position: static;
    margin-bottom: 15px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    margin-top: 0;
    min-height: 250px;
    padding: 26px 18px;
    color: $color-lightgray;
  }

  &__tag {
    display: inline-block;
    border-radius: 2px;
    padding: 5px 15px;
    font-size: 10px;
    background-color: $color-lightviolet;
  }

  &__title {
    margin-top: 12px;
    font-weight: bold;
    font-size: 14px;
    line-height: (18/14);
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 14px;
    font-size: 12px;
  }

  &__date {
    display: flex;
    align-items: center;
    margin-right: 12px;

    &::after {
      content: '';
      width: 3px;
      height: 3px;
      margin-left: 12px;
      border-radius: 50%;
      background-color: $color-lightviolet;
    }
  }

  &__views {
    display: flex;
    align-items: center;
  }

  &__views-icon {
    width: 20px;
    height: 12px;
    margin-right: 5px;
    fill: currentColor;
  }

  @include media(md) {
    display: flex;

    &_small {
      #{$b} {
        &__image {
          margin-top: 2px;
          width: 53%;
          height: 100%;
          min-height: 130px;

          img {
            position: absolute;
            left: 0;
            top: 0;
          }
        }

        &__play-icon {
          left: 20px;
          bottom: 14px;
        }

        &__content {
          flex: 1;
          margin-top: 0;
          margin-left: 14px;
        }

        &__title {
          order: -1;
          margin-top: 0;
          margin-bottom: auto;
          font-weight: bold;
          font-size: 14px;
          line-height: (18/14);
        }

        &__tag {
          margin-top: 10px;
        }

        &__views {
          margin-left: 5px;
        }

        &__views-icon {
          fill: #dcdcdc;
        }
      }
    }

    &_large {
      #{$b} {
        &__content {
          padding: 32px 44px 32px;
        }

        &__tag {
          margin-bottom: 0;
        }

        &__title {
          margin-top: 8px;
          font-size: 20px;
          line-height: (28/20);
        }

        &__footer {
          margin-top: 18px;
        }

        &__note {
          margin-right: auto;
        }

        &__views {
          margin-top: 0;
          margin-right: 28px;
          width: auto;

          &-icon {
            fill: #dcdcdc;
          }
        }
      }
    }

    &__content {
      width: 100%;
      min-height: 300px;
      padding: 30px 38px;
    }
  }

  @include media(lg) {
    &:hover {
      #{$b}__image {
        box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.25);
      }
    }

    &_small {
      #{$b} {
        &__image {
          margin-top: 0;
          width: 45%;
        }
      }
    }

    &_large {
      #{$b} {
        &__title {
          max-width: 550px;
        }

        &__footer {
          margin-top: 14px;
        }

        &__note {
          margin-right: 70px;
        }
      }
    }

    &__image {
      transition: box-shadow 0.3s ease;
    }

    &__content {
      min-height: 315px;
      padding: 34px 38px;
    }
  }

  @include media(xl) {
    &_small {
      #{$b} {
        &__image {
          width: 47%;
          min-height: 165px;
        }

        &__content {
          margin-left: 45px;
          padding-bottom: 14px;
        }

        &__title {
          font-size: 16px;
          line-height: (19/16);
        }
      }
    }

    &_large {
      #{$b} {
        &__content {
          padding: 48px 64px;
        }

        &__title {
          max-width: 650px;
          font-size: 24px;
          line-height: (28/24);
        }
      }
    }
    
    &__content {
      min-height: 400px;
    }

    &__title {
      font-size: 18px;
      line-height: (22/18);
    }

    &__footer {
      margin-top: 20px;
    }
  }
}
</style>
