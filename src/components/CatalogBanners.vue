<template>
  <div class="catalog-banners">
    <div class="container">
      <div class="catalog-banners__inner">
        <CatalogSideBanner
          :type="type"
          class="catalog-banners__side" />
        <CatalogMainBanner
          :type="type"
          :title="title"
          class="catalog-banners__main" />
      </div>      
    </div>    
  </div>
</template>

<script>
import CatalogSideBanner from './CatalogSideBanner.vue'
import CatalogMainBanner from './CatalogMainBanner.vue'

export default {
  name: 'CatalogBanners',
  components: {
    CatalogMainBanner,
    CatalogSideBanner
  },
  props: {
    type: String,
    title: String
  }
}
</script>

<style lang="scss">
.catalog-banners {
  &__main {
    margin-top: 25px;
  }

  &__side {
    border-radius: 8px;
  }

  @include media(md) {
    .container {
      max-width: none;
      padding: 0;
    }

    &__inner {
      display: flex;
    }

    &__main {
      flex: 1;
      margin-top: 0;
      margin-right: 10px;
      border-radius: 0 8px 8px 0;
    }

    &__side {
      order: 1;
      width: 400px;
      border-radius: 8px 0 0 8px;
    }
  }

  @include media(lg) {
    &__main {
      margin-right: 20px;
    }

    &__side {
      width: 470px;
    }
  }

  @include media(xl) {
    &__main {
      margin-right: 10px;
    }
    
    &__side {
      width: 500px;
    }
  }
}
</style>
