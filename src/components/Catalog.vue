<template>
  <div
    class="catalog"
    :class="{[`catalog_${type}`]: type !== 'kitchens'}"
  >
    <div class="catalog__side">
      <div class="catalog__side-inner">
        <Filters
          :categories="filterCategories"
          :groups="filterGroups"
          class="catalog__filters"
          :class="{'is-active': activeFilters}"
          @close="closeFilters"
        />
      </div>
    </div>
    <div class="catalog__main">
      <div class="container">
        <div
          ref="controls"
          class="catalog__controls"
        >
          <div
            v-if="sortOptions"
            class="catalog__select"
          >
            <AppSelect
              :options="sortOptions"
              :initial="initialSort"
              @change="$emit('sort-change', $event)"
            />
          </div>
          <button
            type="button"
            class="catalog__filters-btn"
            @click="openFilters"
          >
            <span class="catalog__filters-icon">
              <AppIcon name="filters" />
              <span
                v-if="filtersLength"
                class="catalog__filters-badge"
              >
                {{filtersLength}}
              </span>
            </span>
          </button>
          <button
            v-if="$_media.sm"
            v-show="fixedFiltersBtn"
            type="button"
            class="catalog__filters-btn catalog__filters-btn_fixed"
            :class="[
              {'is-active': activeFixedFiltersBtn}
            ]"
            @click="openFilters"
          >
            <span class="catalog__filters-icon">
              <AppIcon name="filters-mobile" />
              <span
                v-if="filtersLength"
                class="catalog__filters-badge"
              >
                {{filtersLength}}
              </span>
            </span>
            Параметры поиска
          </button>
          <div
            v-if="switcher"
            class="catalog__switcher"
          >
            <button
              type="button"
              class="catalog__switch-btn"
              :class="{'is-active': catalogType === 'grid'}"
              @click="changeCatalogType('grid')"
            >
              <AppIcon
                name="grid"
                class="catalog__switch-icon"
              />
            </button>
            <button
              type="button"
              class="catalog__switch-btn"
              :class="{'is-active': catalogType === 'list'}"
              @click="changeCatalogType('list')"
            >
              <AppIcon
                name="list"
                class="catalog__switch-icon"
              />
            </button>
          </div>
        </div>
        <div
          class="catalog__cards"
          :class="[{'catalog__cards_list': catalogType === 'list'}]"
        >
          <ProductCard
            v-for="(card, index) in cards"
            :key="index"
            :info="card"
            :noPrice="cardType !== 'technic'"
            :cardType="cardType"
            :large="catalogType === 'list'"
            class="catalog__card"
          />
        </div>
        <div
          v-if="$_mobile && showBtn"
          class="catalog__footer"
        >
          <AppButton
            icon="plus"
            color="lightv"
            title="Показать больше"
            class="catalog__show-btn"
            @click="$emit('show-more')"
          />
        </div>
        <Pagination
          v-if="$_desktop && pages > 1"
          :pages="pages"
          :currentPage="currentPage"
          class="catalog__pagination"
          @change-page="$emit('change-page', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StickySidebar from 'sticky-sidebar'
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import AppSelect from './base/AppSelect.vue'
import Filters from './Filters.vue'
import ProductCard from './ProductCard.vue'
import Pagination from './Pagination.vue'

export default {
  name: 'Catalog',
  components: {
    AppButton,
    AppIcon,
    AppSelect,
    Filters,
    ProductCard,
    Pagination
  },
  props: {
    type: String,
    cardType: String,
    switcher: Boolean,
    sortOptions: Array,
    initialSort: String,
    filterCategories: Array,
    filterGroups: Array,
    cards: Array,
    showBtn: Boolean,
    pages: Number,
    currentPage: Number
  },
  emits: ['sort-change', 'show-more', 'change-page'],
  data() {
    return {
      activeFilters: false,
      catalogType: 'grid',
      fixedFiltersBtn: false,
      activeFixedFiltersBtn: false
    }
  },
  computed: {
    filtersLength() {
      return Object.keys(this.$route.query).length
    }
  },
  watch: {
    cards() {
      setTimeout(() => {
        window.sidebar?.updateSticky()
      })
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    if (!this.$_media.sm) {
      this.initSidebar()
    }
  },
  unmounted() {
    if (window.sidebar) {
      window.sidebar.destroy()
      window.sidebar = null
    }

    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openFilters() {
      this.activeFilters = true
      this.$store.commit('setActiveFilters', true)
    },

    closeFilters() {
      this.activeFilters = false
      this.$store.commit('setActiveFilters', false)
    },

    changeCatalogType(type) {
      if (this.catalogType === type) {
        return
      }

      this.catalogType = type

      if (window.sidebar) {
        window.sidebar.updateSticky()
      }
    },

    initSidebar() {
      window.sidebar = new StickySidebar('.catalog__side', {
        topSpacing: this.$_media.md ? 70 : this.$_media.lg ? 100 : 130,
        bottomSpacing: 0,
        containerSelector: '.catalog',
        innerWrapperSelector: '.catalog__side-inner'
      })

      window.sidebar.isSidebarFitsViewport = function () {
        var offset = this.scrollDirection === 'down' ? this.dimensions.lastBottomSpacing : this.dimensions.lastTopSpacing
        return this.dimensions.sidebarHeight + offset < this.dimensions.viewportHeight
      }
    },

    handleResize() {
      if (!this.$_media.sm && this.activeFilters) {
        this.closeFilters()
      }

      if (this.$_mobile && this.catalogType === 'list') {
        this.catalogType = 'grid'
      }

      if (!this.$_media.sm && !window.sidebar) {
        this.initSidebar()
      }

      if (!this.$_media.sm && window.sidebar) {
        window.sidebar.options.topSpacing = this.$_media.md ? 70 : this.$_media.lg ? 100 : 130
      }

      if (this.$_media.sm && window.sidebar) {
        window.sidebar.destroy()
        window.sidebar = null
      }

      if (!this.$_media.sm && this.fixedFiltersBtn) {
        this.fixedFiltersBtn = false
        this.activeFixedFiltersBtn = false
      }
    },

    handleScroll() {
      if (!this.$_media.sm) {
        return
      }

      const controlsTop = this.$refs.controls.getBoundingClientRect().top
      this.fixedFiltersBtn = controlsTop < -100
      this.activeFixedFiltersBtn = controlsTop < -200
    }
  }
}
</script>

<style lang="scss">
.catalog {
  $b: &;

  &_technics {
    #{$b} {
      &__cards {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  &__filters {
    position: fixed;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $color-lightgray;
    transition: transform 0.3s ease;
    z-index: 100;

    &.is-active {
      transform: translateX(-100%);
    }
  }

  &__controls {
    display: flex;
    justify-content: flex-end;
  }

  &__select {
    position: relative;
    width: calc(100% - 70px);
    margin-right: 20px;
  }

  &__filters-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 15px;
    border-radius: 50px;
    background-color: $color-lightgray;

    &_fixed {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: $header-bar-height;
      padding: 0;
      border-radius: 0;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      color: #fff;
      background-color: $color-green;
      transition: transform 0.3s ease;
      z-index: 90;

      #{$b} {
        &__filters-icon {
          width: 28px;
          height: 28px;
          margin-right: 20px;
        }

        &__filters-badge {
          top: -5px;
          right: -5px;
        }
      }

      &.is-active {
        transform: translateY($header-bar-height);
      }
    }
  }

  &__filters-icon {
    position: relative;
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__filters-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -16px;
    right: -16px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 11px;
    background-color: $color-pink;
    color: $color-lightgray;
  }

  &__switcher {
    display: none;
  }

  &__cards {
    margin: 25px (-$container-padding) 0;
  }

  &__card {
    margin-bottom: 45px;
  }

  &__footer {
    text-align: center;
  }

  &__show-btn {
    width: 100%;
  }

  &__pagination {
    margin-top: 40px;
  }

  @include media(md) {
    display: flex;

    &_wardrobes {
      #{$b} {
        &__main {
          .container {
            max-width: 760px;
          }
        }

        &__cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        &__card {
          width: calc(50% - 20px);
          margin-bottom: 70px;
        }
      }
    }

    &_technics {
      #{$b} {
        &__main {
          .container {
            max-width: 730px;
          }
        }
        &__cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        &__card {
          width: calc(50% - 15px);
          margin-bottom: 55px;
        }
      }
    }

    &__side {
      position: relative;
      width: 300px;
      background-color: $color-lightgray;
    }

    &__filters {
      position: relative;
      left: auto;
      top: auto;
      width: auto;
      height: auto;
      transition: none;
      overflow-y: visible;
      z-index: auto;
    }

    &__main {
      flex: 1;
      max-width: calc(50% + 200px);
      padding: 20px 20px 54px;

      .container {
        margin-right: 0;
        max-width: 720px;
      }
    }

    &__select {
      flex: 0 1 auto;
      margin-right: 0;
      width: auto;
      min-width: 230px;
    }

    &__filters-btn {
      display: none;
    }

    &__cards {
      margin-left: 0;
      margin-right: 0;

      &_cupboards {
        display: flex;
        flex-wrap: wrap;
      }
    }

    &__card {
      margin-bottom: 35px;
    }
  }

  @include media(lg) {
    &_wardrobes {
      #{$b} {
        &__main {
          padding-left: 50px;

          .container {
            max-width: 100%;
          }
        }

        &__card {
          width: calc(33.333% - 20px);
          margin-bottom: 55px;
        }
      }
    }

    &_technics {
      #{$b} {
        &__main {
          padding-left: 70px;

          .container {
            max-width: 100%;
          }
        }

        &__card {
          width: calc(33.333% - 30px);
          margin-bottom: 60px;
        }
      }
    }

    &__main {
      max-width: calc(50% + 340px);
      padding: 30px 0 80px 20px;

      .container {
        max-width: $container-max-width-lg;
      }
    }

    &__controls {
      align-items: center;
    }

    &__switcher {
      display: flex;
      margin-left: 32px;
    }

    &__switch-btn {
      width: 36px;
      height: 36px;
      padding: 8px;
      margin-right: 6px;
      border-radius: 2px;
      background-color: $color-lightgray;
      fill: $color-green;
      transition: background-color 0.3s ease, fill 0.3s ease;

      &:last-child {
        margin-right: 0;
      }

      &.is-active {
        background-color: $color-green;
        fill: $color-lightgray;
      }
    }

    &__switch-icon {
      width: 100%;
      height: 100%;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 30px;

      &_list {
        #{$b}__card {
          width: 100%;
          margin-bottom: 125px;
        }
      }
    }

    &__card {
      width: calc(50% - 20px);
      margin-bottom: 60px;
    }
  }

  @include media(xl) {
    &_wardrobes {
      #{$b} {
        &__main {
          padding-left: 70px;
        }

        &__card {
          width: calc(33.333% - 35px);
        }
      }
    }

    &__main {
      max-width: calc(50% + 500px);
      padding: 36px 0 110px 30px;

      .container {
        max-width: $container-max-width-xl;
      }
    }

    &__cards {
      margin-top: 22px;

      &_list {
        #{$b}__card {
          margin-bottom: 145px;
        }
      }
    }

    &__card {
      width: calc(50% - 25px);
      margin-bottom: 68px;
    }

    &__show-btn {
      max-width: 1260px;
    }
  }
}
</style>
