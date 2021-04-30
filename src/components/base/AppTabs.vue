<template>
  <div class="tabs">
    <div class="tabs__list">
      <button
        v-for="(item, index) in tabs"
        :key="index"
        type="button"
        class="tabs__item"
        :class="{'is-active': activeTab === item}"
      >{{item}}</button>
    </div>
    <div class="tabs__line"></div>
    <div
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
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppTabs',
  components: {
    AppIcon
  },
  props: {
    tabs: Array,
    search: Boolean
  }
}
</script>

<style lang="scss">
.tabs {
  &__list {
    display: flex;
  }

  &__item {
    margin-right: 20px;
    padding: 0 12px 12px;
    border-bottom: 4px solid transparent;
    font-size: 14px;

    &:last-child {
      margin-right: 0;
    }

    &.is-active {
      font-weight: 500;
      border-color: $color-lightviolet;
    }
  }

  &__line {
    border-bottom: 3px solid $color-lightgray;
  }

  &__search {
    display: flex;
    align-items: center;
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
    }
  }
}
</style>
