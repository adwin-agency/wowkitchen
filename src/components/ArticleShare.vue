<template>
  <div class="article-share">
    <p class="article-share__text">Поделиться</p>
    <div
      ref="share"
      class="article-share__box"
    ></div>
    <div class="article-share__box">
      <button
        class="article-share__btn"
        type="button"
        @click="copyLink"
      >
        <img
          class="article-share__icon"
          src="@/assets/img/articles/icons/link_round.svg"
          alt
        >
      </button>
      <span
        class="article-share__tooltip"
        :class="{'is-active': activeTooltip}"
      >Ссылка скопирована</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleShare',
  props: {
    shareTitle: String,
    shareUrl: String
  },
  data() {
    return {
      share: null,
      activeTooltip: false,
      tooltipTimeout: null
    }
  },
  mounted() {
    this.share = window.Ya.share2(this.$refs.share, {
      content: {
        title: this.shareTitle,
        url: 'https://wowkitchen.ru/blog/' + this.shareUrl
      },
      theme: {
        // services: 'vkontakte,facebook',
        services: 'vkontakte',
        bare: true
      }
    })
  },
  unmounted() {
    this.share.destroy()
  },
  methods: {
    copyLink() {
      clearTimeout(this.tooltipTimeout)

      this.activeTooltip = true
      navigator.clipboard.writeText('https://wowkitchen.ru/blog/' + this.shareUrl)

      this.tooltipTimeout = setTimeout(() => {
        this.activeTooltip = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
.article-share {
  display: flex;
  align-items: center;
  margin-top: 30px;

  &__text {
    margin-right: 40px;
    font-size: 13px;
    color: $color-lightviolet;
    font-weight: bold;
  }

  &__box {
    position: relative;

    .ya-share2__list {
      display: flex;
    }

    .ya-share2__item {
      margin-right: 10px;
    }

    .ya-share2__title {
      display: none;
    }

    .ya-share2__icon {
      display: block;
      width: 36px;
      height: 36px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 24px;
    }

    .ya-share2__item_service_vkontakte .ya-share2__icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOTYuNDk2cHgiIGhlaWdodD0iOTYuNDk2cHgiIHZpZXdCb3g9IjAgMCA5Ni40OTYgOTYuNDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ni40OTYgOTYuNDk2OyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNOTIuNDk5LDY1LjE3OGMtMi44NzMtMy40NDYtNi4yNTQtNi4zODctOS40NTMtOS41MWMtMi44ODYtMi44MTUtMy4wNjgtNC40NDgtMC43NDgtNy42OTcNCgkJYzIuNTMyLTMuNTQ2LDUuMjU1LTYuOTU2LDcuODEtMTAuNDg2YzIuMzg1LTMuMjk5LDQuODIzLTYuNTg5LDYuMDc4LTEwLjUzOWMwLjc5Ni0yLjUxMywwLjA5Mi0zLjYyMy0yLjQ4NS00LjA2Mw0KCQljLTAuNDQ0LTAuMDc3LTAuOTAzLTAuMDgxLTEuMzU1LTAuMDgxbC0xNS4yODktMC4wMThjLTEuODgzLTAuMDI4LTIuOTI0LDAuNzkzLTMuNTksMi40NjJjLTAuODk5LDIuMjU2LTEuODI2LDQuNTEtMi44OTcsNi42ODcNCgkJYy0yLjQzLDQuOTM2LTUuMTQ0LDkuNzA3LTguOTQ5LDEzLjc0N2MtMC44MzksMC44OTEtMS43NjcsMi4wMTctMy4xNjksMS41NTNjLTEuNzU0LTAuNjQtMi4yNzEtMy41My0yLjI0Mi00LjUwN2wtMC4wMTUtMTcuNjQ3DQoJCWMtMC4zNC0yLjUyMS0wLjg5OS0zLjY0NS0zLjQwMi00LjEzNWwtMTUuODgyLDAuMDAzYy0yLjEyLDAtMy4xODMsMC44MTktNC4zMTUsMi4xNDVjLTAuNjUzLDAuNzY2LTAuODUsMS4yNjMsMC40OTIsMS41MTcNCgkJYzIuNjM2LDAuNSw0LjEyMSwyLjIwNiw0LjUxNSw0Ljg0OWMwLjYzMiw0LjIyMywwLjU4OCw4LjQ2MywwLjIyNCwxMi43MDNjLTAuMTA3LDEuMjM4LTAuMzIsMi40NzMtMC44MTEsMy42MjkNCgkJYy0wLjc2OCwxLjgxNy0yLjAwOCwyLjE4Ny0zLjYzNywxLjA2OWMtMS40NzUtMS4wMTItMi41MTEtMi40NC0zLjUyNS0zLjg3NGMtMy44MDktNS4zODItNi44NDgtMTEuMTg2LTkuMzI2LTE3LjI4NQ0KCQljLTAuNzE2LTEuNzYyLTEuOTUxLTIuODMtMy44MTgtMi44NTljLTQuNTg3LTAuMDczLTkuMTc1LTAuMDg1LTEzLjc2MiwwLjAwNGMtMi43NiwwLjA1Mi0zLjU4MywxLjM5Mi0yLjQ1OSwzLjg5NA0KCQljNC45OTYsMTEuMTEzLDEwLjU1NywyMS45MTcsMTcuODE2LDMxLjc1OWMzLjcyNyw1LjA1MSw4LjAwNiw5LjUxLDEzLjUzNCwxMi42N2M2LjI2NSwzLjU4MiwxMy4wMDksNC42NiwyMC4xMTIsNC4zMjgNCgkJYzMuMzI2LTAuMTU2LDQuMzI1LTEuMDIxLDQuNDc5LTQuMzM2YzAuMTA0LTIuMjY4LDAuMzYxLTQuNTIzLDEuNDgtNi41NjFjMS4wOTgtMiwyLjc2MS0yLjM4MSw0LjY3OC0xLjEzNw0KCQljMC45NTksMC42MjMsMS43NjcsMS40MTYsMi41MywyLjI1MmMxLjg3MiwyLjA0OCwzLjY3Nyw0LjE1OCw1LjYyLDYuMTM3YzIuNDM3LDIuNDgsNS4zMjQsMy45NDUsOC45NTQsMy42NDZMOTMuNzQ0LDc1LjUNCgkJYzIuMjY0LTAuMTQ4LDMuNDM4LTIuOTI0LDIuMTM4LTUuNDUxQzk0Ljk2OSw2OC4yNzksOTMuNzcxLDY2LjcwMyw5Mi40OTksNjUuMTc4eiIgZmlsbD0iI2FjYThjMyIvPg0KPC9nPg0KPC9zdmc+DQo=);
    }

    .ya-share2__item_service_facebook .ya-share2__icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi40MSIgaGVpZ2h0PSIyMy43OCIgdmlld0JveD0iMCAwIDEyLjQxIDIzLjc4Ij4NCiAgPHBhdGggaWQ9IkZvcm1hXzEiIGRhdGEtbmFtZT0iRm9ybWEgMSIgY2xhc3M9ImNscy0xIiBkPSJNMjQ1OS4yLDIzODkuOTVoLTIuMjRjLTEuNzYsMC0yLjEuODMtMi4xLDIuMDV2Mi43aDQuMmwtMC4wMSw0LjIzaC00LjE5djEwLjg0aC00LjM4di0xMC44NGgtMy42NnYtNC4yM2gzLjY2di0zLjEyYzAtMy42MSwyLjIyLTUuNTgsNS40NS01LjU4aDMuMjd2My45NWgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0NDYuODEgLTIzODYpIiBmaWxsPSIjYWNhOGMzIi8+DQo8L3N2Zz4NCg==);
    }
  }

  &__tooltip {
    position: absolute;
    right: -20px;
    bottom: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    white-space: nowrap;
    color: #fff;
    background-color: $color-green;
    opacity: 0;
    pointer-events: none;
    transform: translateY(15px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      right: 20px;
      top: 100%;
      border: 8px solid;
      border-color: $color-green transparent transparent transparent;
    }

    &.is-active {
      opacity: 1;
      transform: none;
    }
  }
}
</style>
