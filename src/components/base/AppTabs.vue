<template>
  <div class="tabs">
    <div class="tabs__list">
      <div class="tabs__items">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          type="button"
          class="tabs__item"
          :class="[{'tabs__item_b': tab.bold}, {'is-active': activeTab === tab.title}]"
        >{{tab.title}}</button>
      </div>
    </div>
    <div class="tabs__line"></div>
    <!-- <form
      v-if="search"
      class="tabs__search"
    >
      <input
        type="text"
        class="tabs__search-input"
      >
      <button
        type="submit"
        class="tabs__search-btn"
      >
        <AppIcon
          name="search"
          class="tabs__search-icon"
        />
      </button>
    </form> -->
  </div>
</template>

<script>
// import AppIcon from './AppIcon.vue'

export default {
  name: 'AppTabs',
  components: {
    // AppIcon
  },
  props: {
    tabs: Array,
    activeTab: String,
    search: Boolean
  }
}
</script>

<style lang="scss">
.tabs {
  &__list {
    overflow: hidden;
  }

  &__items {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: -20px;
    overflow-x: auto;

    &::before,
    &::after {
      content: '';
      flex-shrink: 0;
      width: calc(50% - 150px);
    }
  }

  &__item {
    flex-shrink: 0;
    margin-right: 20px;
    padding: 0 12px 8px;
    border-bottom: 4px solid transparent;
    font-size: 14px;

    &_b {
      font-weight: bold;
      color: $color-lightviolet;
    }

    &:last-child {
      margin-right: 0;
    }

    &.is-active {
      font-weight: 500;
      border-color: $color-lightviolet;
    }
  }

  &__line {
    margin-top: -2px;
    border-top: 3px solid $color-lightgray;
  }

  &__search {
    display: flex;
    align-items: center;
    margin: 12px auto 0;
    padding: 12px 12px 12px 20px;
    max-width: $container-max-width - $container-padding * 2;
    border-radius: 4px;
    background-color: $color-lightgray;

    &-input {
      flex: 1;
      margin-right: 12px;
      font-size: 14px;
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
    }

    &-icon {
      width: 20px;
      height: 20px;
      fill: $color-lightviolet;
    }
  }

  @include media(md) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    &__list {
      position: relative;
      overflow: visible;
    }

    &__items {
      padding-bottom: 0;
      margin-bottom: 0;
      overflow-x: visible;

      &::before,
      &::after {
        display: none;
      }
    }

    &__item {
      margin-right: 14px;
      padding: 0 8px 12px;
      font-size: 13px;
    }

    &__line {
      order: 1;
      width: 100%;
    }

    &__search {
      margin: 0 0 8px;
      max-width: none;
      padding: 0;
      background-color: transparent;

      &-input {
        display: none;
      }
    }
  }

  @include media(lg) {
    &__item {
      margin-right: 0;
      padding: 0 16px 12px;
      font-size: 14px;
    }

    &__search {
      margin-left: 20px;
      margin-right: 10px;
      flex: 1;
      max-width: 260px;
      padding: 6px 16px 6px 20px;
      background-color: $color-lightgray;

      &-input {
        display: inline-block;
      }
    }
  }

  @include media(xl) {
    &__item {
      margin-right: 20px;
      padding: 0 12px 12px;
    }

    &__search {
      margin-right: 0;
      max-width: 300px;
    }
  }
}
</style>
