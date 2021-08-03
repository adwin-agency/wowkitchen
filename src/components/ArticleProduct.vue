<template>
  <div class="article-product">
    <p class="article-product__category">Кухня</p>
    <p class="article-product__title">{{info.name}}</p>
    <div class="article-product__features">
      <p class="article-product__feature"><span>Стиль</span>{{info.style}}</p>
      <p class="article-product__feature"><span>Фасад</span>{{info.facade}}</p>
    </div>
    <AppButton
      title="Рассчитать проект"
      bordered
      modalName="calc"
      class="article-product__btn"
      @click="handleBtnClick"
    />
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'

export default {
  name: 'ArticleProduct',
  components: {
    AppButton
  },
  props: {
    info: Object
  },
  methods: {
    handleBtnClick() {
      const { name, id } = this.info
      this.$store.commit('setProductData', { name, id })
    }
  }
}
</script>

<style lang="scss">
.article-product {
  border-top: 1px solid $color-lightviolet;
  padding-top: 20px;

  &__category {
    font-size: 14px;
    color: #000;
  }

  &__title {
    margin-top: 2px;
    font-weight: bold;
    font-size: 28px;
    color: #000;
  }

  &__features {
    margin-top: 10px;
  }

  &__feature {
    font-size: 12px;
    line-height: (24/12);
    color: #7f7f7f;

    span {
      margin-right: 24px;
      font-weight: 500;
    }
  }

  &__btn {
    margin-top: 22px;
    width: 250px;
  }
}
</style>
