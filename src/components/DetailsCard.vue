<template>
  <div class="details-card">
    <div class="details-card__box">
      <span class="details-card__count">{{currentSlide}} из {{slides}}</span>
      <p class="details-card__type">Кухня</p>
      <p class="details-card__title">
        {{info?.name}}
        <button
          v-if="$_media.sm"
          type="button"
          class="details-card__favorite"
          @click="toggleFavorite(info)"
        >
          <AppBookmark
            class="details-card__favorite-icon"
            :class="{'is-active': isFavorite}"
          />
        </button>
      </p>
      <div
        v-if="!noPrice"
        class="details-card__cost"
      >
        <div class="details-card__prices">
          <p class="details-card__price">{{info?.price}} ₽</p>
          <!-- <p
            v-if="info.old_price"
            class="details-card__old-price"
          >
            {{info.old_price}} ₽
          </p> -->
          <p class="details-card__price-note">цена за кухонный гарнитур</p>
        </div>
        <!-- <span
          v-if="info.discount"
          class="details-card__discount"
        >
          -{{info.discount}}%
        </span> -->
      </div>
      <div class="details-card__btns">
        <AppButton
          :title="noPrice ? 'Узнать стоимость' : 'Рассчитать кухню'"
          modalName="calc"
          class="details-card__btn"
          @click="handleBtnClick"
        />
        <AppButton
          color="gray"
          title="Вызвать дизайнера"
          modalName="designer"
          class="details-card__btn details-card__btn_add"
          @click="handleBtnClick"
        />
        <AppShare
          v-if="$_media.sm"
          :shareTitle="info?.name"
          :shareUrl="$route.path"
          class="details-card__share"
        />
      </div>
      <p class="details-card__note">Обе эти услуги совершенно <span>бесплатны!</span></p>
    </div>
    <div
      v-if="!$_media.sm"
      class="details-card__actions"
    >
      <button
        type="button"
        class="details-card__action"
        @click="toggleFavorite(info)"
      >
        <AppBookmark
          class="details-card__action-icon"
          :class="{'is-active': isFavorite}"
        />
        <span>В подборку</span>
      </button>
      <AppShare
        titled
        :shareTitle="info?.name"
        :shareUrl="$route.path"
        class="details-card__share"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppBookmark from './base/AppBookmark.vue'
import AppShare from './base/AppShare.vue'
import useFavorites from '../composition/favorites'

export default {
  name: 'DetailsCard',
  components: {
    AppButton,
    AppBookmark,
    AppShare
  },
  props: {
    info: Object,
    noPrice: Boolean,
    slides: Number,
    currentSlide: Number
  },
  setup(props) {
    const { isFavorite, toggleFavorite } = useFavorites(props)
    return {
      isFavorite,
      toggleFavorite
    }
  },
  methods: {
    handleBtnClick() {
      if (!this.info) {
        return
      }
      
      const { name, id } = this.info
      this.$store.commit('setProductData', { name, id, product: 'kitchen' })
    }
  }
}
</script>

<style lang="scss">
.details-card {
  &__box {
    position: relative;
  }

  &__count {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    padding: 10px 20px;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    background-color: rgba(172, 168, 195, 0.4);
  }

  &__type {
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    color: $color-lightviolet;
  }

  &__title {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
  }

  &__favorite {
    margin-left: 24px;

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__cost {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
  }

  &__old-price {
    margin-top: -4px;
    font-weight: 500;
    font-size: 16px;
    color: $color-lightviolet;
    text-decoration: line-through;
  }

  &__discount {
    margin-left: 40px;
    border-radius: 20px 0 20px 0;
    padding: 9px 16px;
    font-weight: bold;
    font-size: 18px;
    color: $color-lightgray;
    background-color: $color-pink;
  }

  &__price-note {
    font-size: 12px;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 18px;
  }

  &__btn {
    flex: 1 0 100%;
    margin-bottom: 16px;

    &_add {
      margin-bottom: 0;
      flex: 1 1 auto;
    }
  }

  &__share {
    margin: 0 15px;

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  &__note {
    margin-top: 14px;
    text-align: center;
    font-size: 12px;
    color: $color-lightviolet;

    span {
      font-weight: bold;
    }
  }

  @include media(md) {
    &__box {
      border-radius: 8px;
      padding: 40px 40px 25px;
      background-color: #fff;
      box-shadow: 0px 20px 38px 0px rgba(53, 53, 53, 0.11);
    }

    &__count {
      width: 130px;
      padding: 18px 20px;
      border-radius: 0 0 0 50px;
      font-size: 15px;
    }

    &__note {
      margin-top: 20px;
    }

    &__actions {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    &__action {
      display: flex;
      align-items: center;
      margin: 0 18px;
      font-size: 10px;
      color: #8b8b8b;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }

      &-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: $color-lightviolet;
      }
    }
  }

  @include media(lg) {
    &__box {
      padding: 40px 30px 25px;
    }

    &__title {
      font-size: 22px;
    }

    &__price {
      font-size: 26px;
    }

    &__old-price {
      margin-top: -2px;
      font-size: 18px;
    }

    &__discount {
      margin-left: 20px;
    }

    &__actions {
      margin-top: 30px;
    }
  }

  @include media(xl) {
    &__box {
      padding: 52px 50px 35px;
    }

    &__cost {
      margin-top: 20px;
    }

    &__btns {
      margin-top: 26px;
    }

    &__actions {
      margin-top: 50px;
    }
  }
}
</style>
