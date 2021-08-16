<template>
  <div class="favorites">
    <div class="container">
      <h2 class="favorites__title">Подборки</h2>
      <div class="favorites__container">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="favorites__element"
        >
          <router-link :to="item.url" target="_blank">
            <img
              class="favorites__image"
              :src="$_basepath + item.image"
              alt
            >
          </router-link>
          <div class="favorites__box">
            <p class="favorites__category">{{item.type}}</p>
            <p class="favorites__name">
              <router-link :to="item.url" target="_blank">{{item.name}}</router-link>
            </p>
            <!-- <p class="favorites__price">{{item.price}} ₽</p> -->
            <!-- <p
              v-if="item.oldPrice"
              class="favorites__discount"
            >{{item.oldPrice}} ₽</p>             -->
          </div>
          <button
            type="button"
            class="favorites__remove"
            @click="removeFavorite(item)"
          >
            <AppIcon
              name="close"
              class="favorites__remove-icon"
            />
          </button>
        </div>
      </div>
      <p class="favorites__text">Хотите рассчитать стоимость выбранных позиций с учётом габаритов вашего помещения?</p>
      <p class="favorites__text">Наш менеджер свяжется с вами в ближайшее время.</p>
      <AppButton
        title="Рассчитать мой проект"
        modalName="calc"
        class="favorites__button"
        @click="handleCalcBtnClick"
      />
      <AppButton
        title="Продолжить просмотр"
        class="favorites__button"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Favorites',
  components: {
    AppButton,
    AppIcon
  },
  emits: ['close'],
  computed: {
    items() {
      return this.$store.state.favoriteItems
    }
  },
  methods: {
    removeFavorite(item) {
      this.$store.commit('setFavoriteItem', item)
    },
    
    handleCalcBtnClick() {
      if (!this.items.length) {
        return
      }

      const names = []
      const urls = []

      for (let item of this.items) {
        names.push(item.name)
        urls.push('https://wowkitchen.ru' + item.url)
      }

      const obj = {
        names: names.join(','),
        urls: urls.join(',')
      }

      this.$store.commit('setModalFavorites', obj)
    }
  }
}
</script>

<style lang="scss">
.favorites {
  padding: $header-bar-height 0 20px;
  background-color: #fff;

  &__title {
    font-size: 18px;
    font-weight: bold;
    line-height: 0.778;
    margin-top: 30px;
  }

  &__container {
    margin-top: 22px;
    padding: 32px 0 32px;
    border-top: 1px solid $color-lightgray;
    border-bottom: 1px solid $color-lightgray;
  }

  &__box {
    margin-left: 18px;
    padding-top: 10px;
  }

  &__element {
    display: flex;
    position: relative;
    margin-bottom: 20px;
  }

  &__image {
    width: 105px;
    height: 85px;
    object-fit: cover;
  }

  &__category {
    font-size: 12px;
    color: $color-lightviolet;
  }

  &__name {
    font-size: 13px;
    margin-bottom: 6px;
  }

  &__price {
    font-size: 18px;
    font-weight: bold;
  }

  &__discount {
    font-size: 14px;
    text-decoration: line-through;
    color: $color-lightviolet;
  }

  &__text {
    margin-top: 25px;
    font-size: 14px;
    text-align: center;

    & + & {
      margin-top: 14px;
    }
  }

  &__button {
    margin-top: 20px;
    width: 100%;
  }

  &__remove {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    &-icon {
      width: 16px;
      height: 16px;
      fill: #ababab;
    }
  }

  @include media(md) {
    padding-top: $header-bar-height-md;

    .container {
      padding: 0 80px;
    }

    &__title {
      margin-top: 45px;
    }

    &__container {
      margin-top: 16px;
      border-top: none;
      min-height: 400px;
    }

    &__image {
      width: 118px;
      height: 95px;
    }

    &__box {
      margin-left: 24px;
    }

    &__name {
      margin-bottom: 12px;
      font-size: 16px;
    }

    &__remove {
      right: -4px;
    }

    &__button {
      display: flex;
      margin: 15px auto 0;
      width: auto;
      min-width: 300px;
    }
  }

  @include media(lg) {
    padding-top: $header-bar-height-lg + $nav-panel-height-lg;
  }

  @include media(lg) {
    padding-top: $header-bar-height-xl + $nav-panel-height-xl;
  }
}
</style>
