<template>
  <div class="article-card">
    <div class="article-card__image">
      <img
        :src="require(`@/assets/img/${cardData.image}`)"
        alt=""
      >
      <AppIcon
        v-if="$_mobile && cardData.video"
        name="play"
        class="article-card__play-icon"
      />
    </div>
    <div class="article-card__content">
      <AppIcon
        v-if="!$_mobile && cardData.video"
        name="play"
        class="article-card__play-icon"
      />
      <span class="article-card__tag">{{cardData.tag}}</span>
      <p class="article-card__title">{{cardData.title}}</p>
      <div class="article-card__footer">
        <span class="article-card__date">{{cardData.date}}</span>
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
    cardData: Object
  }
}
</script>

<style lang="scss">
.article-card {
  $b: &;

  &__image {
    position: relative;
    height: 100px;
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
      content: "";
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
    z-index: 1;
  }

  &__content {
    margin-top: 6px;
  }

  &__tag {
    display: none;
  }

  &__title {
    font-weight: 500;
    font-size: 13px;
    line-height: (15/13);
  }

  &__footer {
    display: none;
  }

  @include media(md) {
    position: relative;

    &__image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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
      min-height: 300px;
      padding: 30px 40px;
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
      align-items: center;
      margin-top: 14px;
    }

    &__date {
      display: flex;
      align-items: center;
      margin-right: 12px;
      font-size: 12px;

      &::after {
        content: "";
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
      font-size: 12px;
    }

    &__views-icon {
      width: 20px;
      height: 12px;
      margin-right: 5px;
      fill: currentColor;
    }
  }

  @include media(lg) {
    &:hover {
      #{$b}__image {
        box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.25);
      }
    }

    &__image {
      transition: box-shadow .3s ease;
    }

    &__content {
      min-height: 315px;
      padding: 34px 38px;
    }
  }

  @include media(xl) {
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
