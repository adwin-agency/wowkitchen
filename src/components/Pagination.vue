<template>
  <div class="pagination">
    <router-link
      :to="{query: {...$route.query, page: currentPage - 1}}"
      class="pagination__prev"
      :class="{'is-disabled': currentPage === 1}"
    >
      <AppIcon
        name="arrow"
        class="pagination__icon"
      />
      Назад
    </router-link>
    <router-link
      v-for="n in pages"
      :key="n"
      :to="{query: {...$route.query, page: n}}"
      active-class=""
      class="pagination__btn"
      :class="{'is-active': currentPage === n}"
    >
      {{n}}
    </router-link>
    <router-link
      :to="{query: {...$route.query, page: currentPage + 1}}"
      class="pagination__next"
      :class="{'is-disabled': currentPage === pages}"
    >
      Вперёд
      <AppIcon
        name="arrow"
        class="pagination__icon"
      />
    </router-link>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Pagination',
  components: {
    AppIcon
  },
  props: {
    pages: Number,
    currentPage: Number
  }
}
</script>

<style lang="scss">
.pagination {
  $b: &;

  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #7F7F7F;
  padding-top: 52px;

  &__prev,
  &__next {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #000;
    transition: opacity .3s ease;

    &.is-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  &__prev {
    margin-right: 115px;
    #{$b}__icon {
      transform: rotate(180deg);
    }
  }

  &__next {
    margin-left: 115px;
  }

  &__icon {
    margin: 0 24px;
    width: 14px;
    height: 9px;
    color: currentColor;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 12px;
    transition: background-color .3s ease, color .3s ease;

    &.is-active {
      background-color: $color-primary;
      color: #fff;
      pointer-events: none;
    }
  }
}
</style>
