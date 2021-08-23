<template>
  <div
    class="share"
    @click="toggleShare"
  >
    <div
      class="share__box"
      :class="{'is-active': isActive}"
    >
      <button
        class="share__btn"
        type="button"
      >
        <AppIcon
          name="share"
          class="share__icon"
        />
      </button>
      <div
        ref="share"
        class="share__list"
        :style="!$_media.sm ? `filter: url(#share-blur${id})` : ''"
      >
        <!-- <a
          href="#"
          class="share__item"
        >
          <AppIcon
            name="facebook"
            class="share__icon"
          />
        </a>
        <a
          href="#"
          class="share__item"
        >
          <AppIcon
            name="vk"
            class="share__icon"
          />
        </a> -->
      </div>
      <svg
        v-if="!$_media.sm"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="share__filter"
      >
        <defs>
          <filter :id="`share-filter${id}`">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur
              in="goo"
              stdDeviation="3"
              result="shadow"
            />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset
              in="shadow"
              dx="1"
              dy="1"
              result="shadow"
            />
            <feBlend
              in2="shadow"
              in="goo"
              result="goo"
            />
            <feBlend
              in2="goo"
              in="SourceGraphic"
              result="mix"
            />
          </filter>
          <filter :id="`share-blur${id}`">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend
              in2="goo"
              in="SourceGraphic"
              result="mix"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <span
      v-if="titled"
      class="share__title"
    >Поделиться</span>
    <!-- <div ref="share"></div> -->
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppShare',
  components: {
    AppIcon
  },
  props: {
    titled: Boolean,
    shareTitle: String,
    shareUrl: String
  },
  data() {
    return {
      id: null,
      isActive: false,
      share: null
    }
  },
  created() {
    this.id = Date.now()
  },
  mounted() {
    this.share = window.Ya.share2(this.$refs.share, {
      content: {
        title: this.shareTitle,
        url: 'https://wowkitchen.ru' + this.shareUrl
      },
      theme: {
        services: 'facebook,vkontakte',
        bare: true
      }
    })
  },
  unmounted() {
    this.share.destroy()
  },
  methods: {
    toggleShare() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.share {
  $b: &;
  $pi: 3.14;
  $menu-items: 2;
  $open-distance: 50px;
  $opening-angle: $pi - 2.3;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    #{$b}__btn {
      transform: scale(1.1);
    }
  }

  &__box {
    position: relative;

    &.is-active {
      #{$b}__btn {
        transition-timing-function: linear;
        transition-duration: 200ms;
        transform: scale(0.9);
      }

      #{$b}__item,
      .ya-share2__item {
        @for $i from 1 through $menu-items {
          $angle: (($pi - $opening-angle)/2)+ (($opening-angle/($menu-items - 1)) * ($i - 1));

          &:nth-child(#{$i}) {
            transition-duration: 80ms+ (80ms * $i);
            transform: translate3d(cos($angle) * $open-distance, sin($angle) * $open-distance, 0);
          }
        }
      }
    }
  }

  &__btn,
  &__item,
  .ya-share2__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $color-lightgray;
  }

  &__btn {
    position: relative;
    width: 36px;
    height: 36px;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.01);
    z-index: 1;
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: $color-lightviolet;
  }

  &__list {
    position: absolute;
    left: 50%;
    top: 0;
    width: 110px;
    height: 90px;
    transform: translateX(-50%);
    pointer-events: none;

    .ya-share2__title {
      display: none;
    }

    .ya-share2__icon {
      display: block;
      width: 36px;
      height: 36px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 20px;
    }

    .ya-share2__item_service_vkontakte .ya-share2__icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOTYuNDk2cHgiIGhlaWdodD0iOTYuNDk2cHgiIHZpZXdCb3g9IjAgMCA5Ni40OTYgOTYuNDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ni40OTYgOTYuNDk2OyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNOTIuNDk5LDY1LjE3OGMtMi44NzMtMy40NDYtNi4yNTQtNi4zODctOS40NTMtOS41MWMtMi44ODYtMi44MTUtMy4wNjgtNC40NDgtMC43NDgtNy42OTcNCgkJYzIuNTMyLTMuNTQ2LDUuMjU1LTYuOTU2LDcuODEtMTAuNDg2YzIuMzg1LTMuMjk5LDQuODIzLTYuNTg5LDYuMDc4LTEwLjUzOWMwLjc5Ni0yLjUxMywwLjA5Mi0zLjYyMy0yLjQ4NS00LjA2Mw0KCQljLTAuNDQ0LTAuMDc3LTAuOTAzLTAuMDgxLTEuMzU1LTAuMDgxbC0xNS4yODktMC4wMThjLTEuODgzLTAuMDI4LTIuOTI0LDAuNzkzLTMuNTksMi40NjJjLTAuODk5LDIuMjU2LTEuODI2LDQuNTEtMi44OTcsNi42ODcNCgkJYy0yLjQzLDQuOTM2LTUuMTQ0LDkuNzA3LTguOTQ5LDEzLjc0N2MtMC44MzksMC44OTEtMS43NjcsMi4wMTctMy4xNjksMS41NTNjLTEuNzU0LTAuNjQtMi4yNzEtMy41My0yLjI0Mi00LjUwN2wtMC4wMTUtMTcuNjQ3DQoJCWMtMC4zNC0yLjUyMS0wLjg5OS0zLjY0NS0zLjQwMi00LjEzNWwtMTUuODgyLDAuMDAzYy0yLjEyLDAtMy4xODMsMC44MTktNC4zMTUsMi4xNDVjLTAuNjUzLDAuNzY2LTAuODUsMS4yNjMsMC40OTIsMS41MTcNCgkJYzIuNjM2LDAuNSw0LjEyMSwyLjIwNiw0LjUxNSw0Ljg0OWMwLjYzMiw0LjIyMywwLjU4OCw4LjQ2MywwLjIyNCwxMi43MDNjLTAuMTA3LDEuMjM4LTAuMzIsMi40NzMtMC44MTEsMy42MjkNCgkJYy0wLjc2OCwxLjgxNy0yLjAwOCwyLjE4Ny0zLjYzNywxLjA2OWMtMS40NzUtMS4wMTItMi41MTEtMi40NC0zLjUyNS0zLjg3NGMtMy44MDktNS4zODItNi44NDgtMTEuMTg2LTkuMzI2LTE3LjI4NQ0KCQljLTAuNzE2LTEuNzYyLTEuOTUxLTIuODMtMy44MTgtMi44NTljLTQuNTg3LTAuMDczLTkuMTc1LTAuMDg1LTEzLjc2MiwwLjAwNGMtMi43NiwwLjA1Mi0zLjU4MywxLjM5Mi0yLjQ1OSwzLjg5NA0KCQljNC45OTYsMTEuMTEzLDEwLjU1NywyMS45MTcsMTcuODE2LDMxLjc1OWMzLjcyNyw1LjA1MSw4LjAwNiw5LjUxLDEzLjUzNCwxMi42N2M2LjI2NSwzLjU4MiwxMy4wMDksNC42NiwyMC4xMTIsNC4zMjgNCgkJYzMuMzI2LTAuMTU2LDQuMzI1LTEuMDIxLDQuNDc5LTQuMzM2YzAuMTA0LTIuMjY4LDAuMzYxLTQuNTIzLDEuNDgtNi41NjFjMS4wOTgtMiwyLjc2MS0yLjM4MSw0LjY3OC0xLjEzNw0KCQljMC45NTksMC42MjMsMS43NjcsMS40MTYsMi41MywyLjI1MmMxLjg3MiwyLjA0OCwzLjY3Nyw0LjE1OCw1LjYyLDYuMTM3YzIuNDM3LDIuNDgsNS4zMjQsMy45NDUsOC45NTQsMy42NDZMOTMuNzQ0LDc1LjUNCgkJYzIuMjY0LTAuMTQ4LDMuNDM4LTIuOTI0LDIuMTM4LTUuNDUxQzk0Ljk2OSw2OC4yNzksOTMuNzcxLDY2LjcwMyw5Mi40OTksNjUuMTc4eiIgZmlsbD0iI2FjYThjMyIvPg0KPC9nPg0KPC9zdmc+DQo=);
    }

    .ya-share2__item_service_facebook .ya-share2__icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi40MSIgaGVpZ2h0PSIyMy43OCIgdmlld0JveD0iMCAwIDEyLjQxIDIzLjc4Ij4NCiAgPHBhdGggaWQ9IkZvcm1hXzEiIGRhdGEtbmFtZT0iRm9ybWEgMSIgY2xhc3M9ImNscy0xIiBkPSJNMjQ1OS4yLDIzODkuOTVoLTIuMjRjLTEuNzYsMC0yLjEuODMtMi4xLDIuMDV2Mi43aDQuMmwtMC4wMSw0LjIzaC00LjE5djEwLjg0aC00LjM4di0xMC44NGgtMy42NnYtNC4yM2gzLjY2di0zLjEyYzAtMy42MSwyLjIyLTUuNTgsNS40NS01LjU4aDMuMjd2My45NWgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0NDYuODEgLTIzODYpIiBmaWxsPSIjYWNhOGMzIi8+DQo8L3N2Zz4NCg==);
    }
  }

  &__item,
  .ya-share2__item {
    position: absolute;
    left: 37px;
    width: 36px;
    height: 36px;
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    pointer-events: all;

    &:hover {
      background-color: $color-gray;
    }

    @for $i from 1 through $menu-items {
      &:nth-child(#{$i}) {
        transition-duration: 10ms+ (60ms * ($i));
      }
    }
  }

  &__filter {
    display: none;
  }

  &__title {
    margin-left: 10px;
    font-size: 10px;
    color: #8b8b8b;
  }
}
</style>
