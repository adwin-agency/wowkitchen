<template>
  <router-link
    :to="{name: 'article', params: {code: cardData.url}}"
    class="article-card"
    :class="{ [`article-card_${mod}`]: mod }"
  >
    <div class="article-card__image">
      <img
        :src="$_basepath + cardData.pictures[0]?.medium"
        alt
      >
      <AppIcon
        v-if="cardData.description_text.includes('<video') && ($_media.sm || mod === 'small')"
        name="play"
        class="article-card__play-icon"
      />
    </div>
    <div class="article-card__content">
      <AppIcon
        v-if="cardData.description_text.includes('<video') && (!$_media.sm && mod !== 'small')"
        name="play"
        class="article-card__play-icon"
      />
      <span
        v-if="!($_media.sm && mod === 'sample')"
        class="article-card__tag"
      >
        {{cardData.category_rus}}
      </span>
      <p class="article-card__title">{{cardData.name}}</p>
      <div
        v-if="!($_media.sm && mod === 'sample')"
        class="article-card__footer"
      >
        <span
          v-if="mod === 'large' && cardData.author"
          class="article-card__author"
        >
          {{cardData.author}}
        </span>
        <span
          v-if="cardData.date_public"
          class="article-card__date"
        >
          {{cardData.date_public}}
        </span>
        <span
          v-if="cardData.time_read"
          class="article-card__note"
        >
          {{cardData.time_read}}
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
  </router-link>
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

  display: block;
  position: relative;

  &_small {
    #{$b} {
      &__image {
        border-radius: 0;
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
        padding-top: 62.5%;
        border-radius: 12px;
        overflow: hidden;

        img {
          position: absolute;
          left: 0;
          top: 0;
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

      &__title {
        margin-top: 0;
        font-weight: 500;
        font-size: 13px;
        line-height: (15/13);
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
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: $color-yellow;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    margin-top: 0;
    min-height: 330px;
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
    font-size: 18px;
    line-height: (24/18);
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
          position: relative;
          width: 53%;
          height: 100%;
          min-height: 130px;
          border-radius: 12px;
          overflow: hidden;

          img {
            position: absolute;
            left: 0;
            top: 0;
          }
        }

        &__play-icon {
          position: absolute;
          left: 20px;
          bottom: 14px;
          width: 42px;
          height: 42px;
          margin-bottom: 0;
          z-index: 1;
        }

        &__content {
          flex: 1;
          margin-left: 14px;
          min-height: auto;
          padding: 0;
          color: $color-primary;
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
          color: #000;
          background-color: $color-lightgray;
        }

        &__footer {
          margin-top: 10px;
          color: #9f9f9f;
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
          min-height: 452px;
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

    &_related {
      #{$b} {
        &__image {
          position: absolute;
          height: 100%;
        }

        &__content {
          margin-top: 0;
          min-height: 300px;
          padding: 38px;
          color: $color-lightgray;
        }

        &__title {
          margin-top: 16px;
          font-weight: bold;
          font-size: 14px;
          line-height: (18/14);
        }

        &__footer {
          margin-top: 15px;
        }

        &__date {
          margin-right: 12px;

          &::after {
            margin-left: 12px;
          }
        }
      }
    }

    &_sample {
      #{$b} {
        &__image {
          position: absolute;
          height: 100%;
        }

        &__content {
          margin-top: 0;
          min-height: 300px;
          padding: 38px;
          color: $color-lightgray;
        }

        &__play-icon {
          position: static;
          margin-bottom: 20px;
        }

        &__title {
          margin-top: 16px;
          font-weight: bold;
          font-size: 14px;
          line-height: (18/14);
        }

        &__footer {
          margin-top: 15px;
        }

        &__date {
          margin-right: 12px;

          &::after {
            margin-left: 12px;
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
        &__content {
          min-height: 447px;
        }

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

    &_related {
      #{$b} {
        &__content {
          min-height: 315px;
          padding: 32px 38px;
        }

        &__title {
          margin-top: 28px;
        }
      }
    }

    &_sample {
      #{$b} {
        &__content {
          min-height: 315px;
          padding: 32px 38px;
        }

        &__title {
          margin-top: 28px;
        }
      }
    }

    &_nav {
      #{$b}__content {
        min-height: 220px;
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
          min-height: 546px;
          padding: 48px 64px;
        }

        &__title {
          max-width: 650px;
          font-size: 24px;
          line-height: (28/24);
        }
      }
    }

    &_related {
      #{$b} {
        &__content {
          min-height: 400px;
          padding: 38px;
        }

        &__title {
          margin-top: 16px;
          font-size: 18px;
          line-height: (22/18);
        }

        &__footer {
          margin-top: 18px;
        }
      }
    }

    &_sample {
      #{$b} {
        &__content {
          min-height: 400px;
          padding: 38px;
        }

        &__title {
          margin-top: 16px;
          font-size: 18px;
          line-height: (22/18);
        }

        &__footer {
          margin-top: 18px;
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
