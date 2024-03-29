<template>
  <div class="filters">
    <div class="filters__inner">
      <div class="filters__header">
        <p
          v-if="$_media.sm"
          class="filters__heading"
        >
          Фильтры
        </p>
        <div
          v-if="$_media.sm && selection.length"
          class="filters__selection"
        >
          <button
            v-for="(item, index) in selection"
            :key="index"
            type="button"
            class="filters__tag is-active"
            @click="removeTag(item.group)"
          >
            {{item.title}}
            <span class="filters__tag-remove"></span>
          </button>
          <button
            type="button"
            class="filters__tag filters__tag_reset"
            @click="resetTags"
          >
            Сбросить всё
          </button>
        </div>
      </div>
      <div
        v-if="categories"
        class="filters__categories"
      >
        <button
          v-for="(category, index) in categories"
          :key="index"
          type="button"
          class="filters__category"
          :class="{'is-active': category.value === 'all' ? !activeOptions.category : activeOptions.category === category.value}"
          @click="toggleCategory(category.value)"
        >
          {{category.title}}
        </button>
      </div>
      <div class="filters__groups">
        <div
          v-for="(group, index) in groups"
          :key="index"
          class="filters__group"
        >
          <p class="filters__title">{{group.title}}</p>
          <div class="filters__tags">
            <button
              v-for="(item, index) in group.items"
              :key="index"
              type="button"
              :class="[
                'filters__tag',
                {'filters__tag_color': item.color},
                {'is-active': item.value === 'all' ? !activeOptions[group.id] : activeOptions[group.id] === item.value}
              ]"
              :style="item.color && `background-color: ${item.value}`"
              @click="toggleTag(group.id, item.value)"
            >
              <AppIcon
                v-if="item.icon"
                :name="item.icon"
                class="filters__tag-icon"
              />
              {{item.title}}
              <span
                v-if="item.value !== 'all'"
                class="filters__tag-remove"
              ></span>
            </button>
          </div>
        </div>
      </div>
      <button
        v-if="$_media.sm"
        type="button"
        class="filters__close"
        @click="closeFilters"
      >
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'Filters',
  components: {
    AppIcon
  },
  props: {
    categories: Array,
    groups: Array
  },
  emits: ['change', 'close'],
  data() {
    return {
      activeOptions: {}
    }
  },
  computed: {
    selection() {
      const arr = []

      if (this.groups) {
        for (let key in this.activeOptions) {
          const groupItems = this.groups.find(item => item.id === key).items
          const option = groupItems.find(
            item => item.value === this.activeOptions[key]
          )

          if (option) {
            arr.push({ group: key, title: option.title })
          }
        }
      }

      return arr
    }
  },
  watch: {
    $route() {
      this.initActiveOptions()
    }
  },
  created() {
    this.initActiveOptions()
  },
  methods: {
    initActiveOptions() {
      const query = this.$route.query

      const activeOptions = {}

      for (let key in query) {
        if (this.categories?.find(item => item.value === query[key])) {
          activeOptions[key] = query[key]
        }

        if (this.groups?.find(item => item.id === key && item.items.find(i => i.value === query[key]))) {
          activeOptions[key] = query[key]
        }
      }

      this.activeOptions = { ...activeOptions }
      this.$emit('change', Object.keys(activeOptions).length)
    },

    toggleCategory(category) {
      if (!this.activeOptions.category && category === 'all') {
        return
      }

      if (this.activeOptions.category === category || category === 'all') {
        delete this.activeOptions.category
      } else {
        this.activeOptions.category = category
      }

      this.applyFilters()
    },

    toggleTag(group, value) {
      if (!this.activeOptions[group] && value === 'all') {
        return
      }

      if (this.activeOptions[group] === value || value === 'all') {
        delete this.activeOptions[group]
      } else {
        for (let key in this.activeOptions) {
          if (key !== group) {
            delete this.activeOptions[key]
          }
        }

        this.activeOptions[group] = value
      }

      this.applyFilters()
    },

    removeTag(group) {
      delete this.activeOptions[group]
      this.applyFilters()
    },

    resetTags() {
      this.activeOptions = {}
      this.applyFilters()
    },

    applyFilters() {
      const query = { ...this.activeOptions }

      this.$router.push({ name: this.$route.name, query: query })
      this.$emit('close')
    },

    closeFilters() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.filters {
  $b: &;

  &__inner {
    position: relative;
    height: 100%;
    padding-bottom: 70px;
    overflow-y: auto;
  }

  &__header {
    padding: 25px 40px 15px;
    border-bottom: 2px solid $color-lightviolet;
  }

  &__heading {
    padding-right: 30px;
    font-weight: bold;
    font-size: 18px;
  }

  &__categories {
    display: flex;
    flex-direction: column;
    margin-top: 26px;
    padding: 0 40px;
  }

  &__category {
    border-radius: 4px;
    padding: 14px 30px;
    font-weight: bold;
    font-size: 11px;
    text-align: left;
    text-transform: uppercase;
    color: $color-lightviolet;

    &.is-active {
      color: $color-lightgray;
      background-color: $color-green;
    }
  }

  &__selection {
    display: flex;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  &__group {
    padding: 20px 40px;
    border-bottom: 1px solid #d8d8d8;

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 13px;
    color: $color-lightviolet;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    margin-right: -5px;
  }

  &__tag {
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 100px;
    height: 34px;
    padding: 0 18px;
    font-weight: 500;
    font-size: 11px;
    color: $color-lightviolet;
    background-color: #fff;

    &_reset {
      font-weight: bold;
      color: $color-lightgray;
      background-color: $color-lightviolet;
    }

    &_color {
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;

      #{$b}__tag-remove {
        margin-left: 0;
      }

      &.is-active {
        box-shadow: 0 0 0 4px $color-lightviolet;
      }
    }

    &.is-active {
      font-weight: bold;
      color: $color-lightgray;
      background-color: $color-green;

      #{$b}__tag-remove {
        display: inline-block;
      }
    }
  }

  &__tag-icon {
    width: 15px;
    height: 15px;
    margin-right: 18px;
    fill: currentColor;
    stroke: currentColor;
  }

  &__tag-remove {
    display: none;
    position: relative;
    width: 10px;
    height: 10px;
    margin-left: 10px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 2px;
      background-color: $color-lightgray;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  &__btn {
    position: absolute;
    left: 40px;
    bottom: 10px;
    width: calc(100% - 80px);
  }

  &__close {
    position: absolute;
    top: 26px;
    right: 30px;
    width: 22px;
    height: 22px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 1px;
      background-color: $color-lightviolet;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  @include media(md) {
    padding: 40px;

    &__inner {
      padding-bottom: 0;
      overflow-y: visible;
    }

    &__header {
      padding: 0;
      border-bottom: none;
    }

    &__categories {
      margin-top: 0;
      padding: 0;
    }

    &__category {
      padding: 14px 20px;
    }

    &__groups {
      margin-top: 36px;

      &:first-child {
        margin-top: 0;
      }
    }

    &__group {
      margin-bottom: 50px;
      padding: 0;
      border-bottom: none;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__tags {
      margin-right: -8px;
    }

    &__tag {
      margin-right: 8px;
      margin-bottom: 8px;
    }

    &__tag-icon {
      margin-right: 22px;
    }

    &__tag-remove {
      margin-left: 6px;
    }
  }
}
</style>
