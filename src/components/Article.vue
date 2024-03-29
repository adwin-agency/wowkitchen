<template>
  <div
    ref="article"
    class="article"
    :class="{'is-active': isActiveContent}"
  >
    <div class="article__intro">
      <img
        :src="info.pictures && $_basepath + info.pictures[0].large"
        alt
        class="article__intro-img"
      >
      <div class="container">
        <h1 class="article__intro-title">{{info.name}}</h1>
      </div>
    </div>
    <div class="article__container">
      <div class="article__wrap">
        <div class="container">
          <div class="article__inner">
            <div class="article__section-container">
              <article class="article__section">
                <h2 class="article__section-title">{{info.name}}</h2>
                <div
                  class="article__section-previews"
                  v-html="info.previews_text"
                ></div>
                <div
                  v-if="info.content.length"
                  class="article__section-content"
                >
                  <h4>Содержание</h4>
                  <ol>
                    <li
                      v-for="(item, index) in info.content"
                      :key="index"
                    >
                      <a
                        :href="`#${index + 1}`"
                        @click.prevent="handleAnchorClick(index + 1)"
                      >{{item}}</a>
                    </li>
                  </ol>
                </div>
                <div
                  class="article__desc"
                  v-html="info.description_text"
                ></div>

                <!-- <img
                src="@/assets/img/articles/article-img/37.jpg"
                alt="image"
              >
              <div>
                <img
                  src="@/assets/img/articles/article-img/39.png"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/38.png"
                  alt="image"
                >
              </div>

              <h3>Преимущества этой цветовой гаммы</h3>
              <ol>
                <li>
                  <b>Практичность.</b>Зеленый цвет умеет маскировать загрязнения, даже если речь идет о светлых оттенках.
                  Про ежедневную уборку можно забыть!
                </li>
                <div>
                  <h5>Почитать по теме</h5>
                  <a href="#">Глянцевые или матовые фасады: основная разница во внешнем виде и уходе</a>
                </div>
                <li>
                  50 оттенков. Как вы понимаете, не только серый может похвастаться своей <b>вариативностью</b> (спасибо одноименному фильму).
                  Зеленый цвет благодаря многообразию оттенков может найти нужный вариант даже самому искушенному покупателю.
                  Тона могут быть как холодными, так и теплыми.
                </li>
                <img
                  src="@/assets/img/articles/article-img/43.jpg"
                  alt="image"
                >
                <div>
                  <img
                    src="@/assets/img/articles/article-img/41.png"
                    alt="image"
                  >
                  <img
                    src="@/assets/img/articles/article-img/42.png"
                    alt="image"
                  >
                </div>
                <li>
                  <b>Нейтралитет.</b> Зеленый цвет отлично сочетается практически со всеми цветами радуги. В случае с кухней, это несомненный плюс.
                </li>
              </ol>
              <img
                src="@/assets/img/articles/article-img/46.jpg"
                alt="image"
              >
              <h3>Возможные сложности</h3>
              <ol>
                <li>
                  Потребность в ярких акцентах. Без наличия таковых зеленый цвет может смотреться достаточно скучно.
                </li>
                <div>
                  <img
                    src="@/assets/img/articles/article-img/47.jpg"
                    alt="image"
                  >
                  <img
                    src="@/assets/img/articles/article-img/48.jpg"
                    alt="image"
                  >
                </div>
                <li>
                  Подходит не всем стилям. Однако если грамотно продумать каждую деталь и каждый акцент в гарнитуре, есть шанс, что зеленый будет гармонично смотреться даже в классическом интерьере.
                </li>
                <img
                  src="@/assets/img/articles/article-img/49.jpg"
                  alt="image"
                >
                <li>
                  Необходимо внимательно следить за соотношением зеленых оттенков. При неправильном сочетании холодных и теплых оттенков, гарнитур может потерять целостность и будет смотреться раздроблено.
                  Проблемы можно избежать, если подойти к делу ответственно и прислушаться к советам дизайнеров.
                  Например, они говорят, что теплые тона оттенки лучше смотрятся у входа, тогда как холодные здорово впишутся в глубину гарнитура.
                </li>
                <div>
                  <img
                    src="@/assets/img/articles/article-img/54.jpg"
                    alt="image"
                  >
                  <img
                    src="@/assets/img/articles/article-img/53.jpg"
                    alt="image"
                  >
                </div>
              </ol>

              <h3>Богатая цветовая палитра</h3>
              <p>Как мы уже писали выше, зеленый цвет достаточно многогранен. Поэтому и цветовых сочетаний может быть великое множество. Рассмотрим основные:
              </p>
              <h4>Яркий зелёный</h4>
              <p>Благодаря своей насыщенности, ярко зеленая кухня будет смотреться достаточно свежо и броско. Ему в пару отлично подойдут темные или пастельные тона.
              </p>
              <img
                src="@/assets/img/articles/article-img/57.jpg"
                alt="image"
              >
              <div>
                <img
                  src="@/assets/img/articles/article-img/56.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/58.jpg"
                  alt="image"
                >
              </div>

              <h4>Тёмно-зелёный</h4>
              <p>Хорошо подходит для больших помещений. Гарнитур будет смотреться изысканно, модно и даже аристократично. Темно-зеленый оттенок самодостаточен, однако в качестве акцентов можно использовать светлые оттенки.
              </p>
              <div>
                <img
                  src="@/assets/img/articles/article-img/60.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/59.jpg"
                  alt="image"
                >
              </div>

              <h4>Изумрудный</h4>
              <p>
                Не обязательно быть волшебником, чтобы выбрать для своего гарнитура именно это цветовое решение.
                Изумрудный подходит для традиционных стилей. Он достаточно сдержан, поэтому хорошо будет смотреться в маленьких помещениях и на студиях.
              </p>
              <img
                src="@/assets/img/articles/article-img/61.jpg"
                alt="image"
              >
              <img
                src="@/assets/img/articles/article-img/62.jpg"
                alt="image"
              >

              <h4>Оливковый</h4>
              <p>Современный оттенок, который смотрится свежо и необычно. Ему не нужны дополнительный акценты и детали.</p>
              <div>
                <img
                  src="@/assets/img/articles/article-img/50.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/55.jpg"
                  alt="image"
                >
              </div>
              <p>При желании, зеленый цвет можно комбинировать с черными, желтыми, красными и бирюзовыми тонами.</p>
              <div>
                <img
                  src="@/assets/img/articles/article-img/64.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/65.jpg"
                  alt="image"
                >
              </div>
              <p>
                Что касается стилей, в которых зеленый будет смотреться гармонично, то их достаточно много — хай-тек, минимализм, лофт, классика,
                кантри и даже скандинавия.
              </p>
              <div>
                <img
                  src="@/assets/img/articles/article-img/70.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/68.jpg"
                  alt="image"
                >
              </div>
              <img
                src="@/assets/img/articles/article-img/67.jpg"
                alt="image"
              >
              <div>
                <img
                  src="@/assets/img/articles/article-img/71.jpg"
                  alt="image"
                >
                <img
                  src="@/assets/img/articles/article-img/69.jpg"
                  alt="image"
                >
              </div> -->
              </article>
              <div class="article__tags">
                <a
                  class="article__tag"
                  href="#"
                >От эксперта</a>
                <a
                  class="article__tag"
                  href="#"
                >Лайфхаки</a>
                <a
                  class="article__tag"
                  href="#"
                >Планировки</a>
              </div>
              <div class="article__stats">
                <p class="article__stats-author article__stats-el">Автор<span class="article__stats-author-name">{{info.author}}</span></p>
                <p class="article__stats-date article__stats-el">Дата публикации<span class="article__stats-date-value">{{info.date_public}}</span></p>
                <div class="article__stats-views article__stats-el">
                  <img
                    class="article__stats-views-icon"
                    src="@/assets/img/articles/icons/view_simple.svg"
                    alt="image-views"
                  >
                  <span class="article__stats-views-count">{{info.views}}</span>
                </div>
              </div>
              <ArticleShare
                v-if="$_media.sm"
                :shareTitle="info.name"
                :shareUrl="info.url"
                class="article__share"
              />
            </div>
            <div
              v-if="!$_media.sm"
              class="article__aside"
            >
              <div class="article__aside-inner">
                <ArticleAside
                  :info="info"
                  :cards="cards"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StickySidebar from 'sticky-sidebar'
import ArticleAside from './ArticleAside.vue'
import ArticleShare from './ArticleShare.vue'

export default {
  name: 'Article',
  components: {
    ArticleAside,
    ArticleShare
  },
  props: {
    info: Object,
    cards: Array
  },
  data() {
    return {
      isActiveContent: false,
      isAnim: false,
      touchY: null
    }
  },
  computed: {
    scrollLock() {
      return this.$store.getters.scrollLock
    }
  },
  watch: {
    info() {
      setTimeout(() => {
        this.initImages()
      })
    }
  },
  mounted() {
    this.$store.commit('setIntroEffect', true)
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('touchstart', this.handleTouchstart)
    window.addEventListener('touchend', this.handleTouchend)

    if (!this.$_media.sm) {
      this.initSidebar()
    }

    setTimeout(() => {
      this.initImages()
    })
  },
  unmounted() {
    if (window.sidebar) {
      window.sidebar.destroy()
      window.sidebar = null
    }

    this.$store.commit('setIntroEffect', false)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('touchstart', this.handleTouchstart)
    window.removeEventListener('touchend', this.handleTouchend)
  },
  methods: {
    disableContent() {
      this.isAnim = true
      this.$store.commit('setIntroEffect', true)
      this.isActiveContent = false

      setTimeout(() => {
        this.isAnim = false
      }, 500)
    },

    enableContent() {
      this.isAnim = true
      this.isActiveContent = true

      setTimeout(() => {
        this.$store.commit('setIntroEffect', false)
      }, 200)

      setTimeout(() => {
        this.isAnim = false
      }, 500)
    },

    initSidebar() {
      window.sidebar = new StickySidebar('.article__aside', {
        topSpacing: this.$_media.md ? 70 : this.$_media.lg ? 130 : 170,
        bottomSpacing: 30,
        containerSelector: '.article__inner',
        innerWrapperSelector: '.article__aside-inner'
      })

      window.sidebar.isSidebarFitsViewport = function () {
        var offset = this.scrollDirection === 'down' ? this.dimensions.lastBottomSpacing : this.dimensions.lastTopSpacing
        return this.dimensions.sidebarHeight + offset < this.dimensions.viewportHeight
      }
    },

    handleResize() {
      if (this.$_media.sm) {
        if (window.sidebar) {
          window.sidebar.destroy()
          window.sidebar = null
        }
      } else {
        if (window.sidebar) {
          window.sidebar.options.topSpacing = this.$_media.md ? 70 : this.$_media.lg ? 130 : 170
        } else {
          this.initSidebar()
        }
      }
    },

    handleTouchstart(e) {
      this.touchY = e.touches[0].clientY
    },

    handleTouchend(e) {
      if (this.isAnim || this.scrollLock) {
        return
      }

      const deltaY = e.changedTouches[0].clientY - this.touchY

      if (deltaY < 0 && !this.isActiveContent) {
        this.enableContent()
      } else if (deltaY > 0 && window.scrollY < 50 && this.isActiveContent) {
        this.disableContent()
      }
    },

    handleWheel(e) {
      if (this.isAnim || this.scrollLock) {
        return
      }

      if (e.deltaY > 0 && !this.isActiveContent) {
        this.enableContent()
      } else if (e.deltaY < 0 && window.scrollY < 50 && this.isActiveContent) {
        this.disableContent()
      }
    },

    initImages() {
      // START DEVELOPE CODE

      const container = document.querySelector('.article__section')
      const desc = document.querySelector('.article__desc')
      const images = container.querySelectorAll('img')
      const blocks = desc.querySelectorAll('div')

      function addImageClass(element) {
        if (element.naturalWidth < element.naturalHeight) {
          element.classList.remove('article__desc-horizontal')
          element.classList.add('article__desc-vertical')
        } else {
          element.classList.remove('article__desc-vertical')
          element.classList.add('article__desc-horizontal')
        }

        window.sidebar?.updateSticky()
      }

      images.forEach(element => {
        addImageClass(element)
        element.addEventListener('load', function () {
          addImageClass(element)
        })
      })
      blocks.forEach(element => {
        const tags = element.childNodes
        for (let tag of tags) {
          if (tag.tagName === 'IMG') {
            element.classList.add('article__desc-grid')
          }
        }
      })

      // END DEVELOPE CODE
    },

    handleAnchorClick(id) {
      const targetOffset = document.getElementById(id).getBoundingClientRect().top + window.scrollY
      const headerHeight = document.querySelector('.header').offsetHeight

      window.scrollTo(0, targetOffset - headerHeight)
    }
  }
}
</script>

<style lang="scss">
.article {
  $b: &;

  &.is-active {
    #{$b} {
      &__intro {
        opacity: 0;
        transform: translateY(-100%) scale(0.9);
      }

      &__container {
        opacity: 1;
        transform: none;
      }
    }
  }

  &__intro {
    display: flex;
    align-items: flex-end;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 40px 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.2;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0, rgb(18, 19, 30) 0%, rgba(15, 19, 47, 0) 100%);
      opacity: 0.58;
      z-index: 1;
    }

    &-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-title {
      position: relative;
      color: #fff;
      font-size: 26px;
      font-weight: bold;
      line-height: 1.44;
      z-index: 2;
    }
  }

  &__container {
    opacity: 0;
    transform: translateY(400px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &__wrap {
    padding-top: 40px;
  }

  &__stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 655px;
    margin-top: 5px;

    &-el {
      font-size: 13px;
      margin-bottom: 20px;
      margin-right: 10px;
    }

    &-views-icon {
      width: 20px;
      height: 20px;
    }

    &-author {
      &-name {
        font-weight: bold;
        padding-left: 10px;
        display: inline-block;
      }
    }

    &-date {
      &-value {
        font-weight: bold;
        padding-left: 10px;
        display: inline-block;
      }
    }

    &-views {
      display: flex;
      align-items: center;

      &-icon {
        display: inline-block;
      }

      &-count {
        padding-left: 10px;
        font-size: 13px;
        font-weight: bold;
        line-height: 1.538;
      }
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__tag {
    padding: 7px 17px;
    margin-right: 15px;
    margin-bottom: 15px;
    background-color: $color-lightviolet;
    font-size: 14px;
    color: #fff;
  }

  &__share {
    display: flex;
    align-items: center;
    color: $color-lightviolet;

    &-title {
      margin-right: 40px;
      font-weight: 500;
      font-size: 13px;
    }

    &-btns {
      display: flex;
    }

    &-btn {
      margin-right: 22px;

      &:last-child {
        margin-right: 0;
      }
    }

    &-icon {
      width: 25px;
      height: 25px;
      fill: currentColor;
    }
  }

  @include media(md) {
    &__intro {
      &-title {
        font-size: 36px;
      }
    }

    &__wrap {
      padding-top: 50px;
    }

    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__stats {
      margin-top: 15px;
    }

    &__aside {
      margin-left: 50px;
      width: 290px;
      flex-shrink: 0;
    }

    &__aside-inner {
      padding-top: 28px;
    }
  }

  @include media(lg) {
    &__intro {
      &-title {
        font-size: 50px;
      }
    }

    &__wrap {
      padding-top: 65px;
    }

    &__aside {
      margin-left: 80px;
      width: 320px;
    }

    &__aside-inner {
      padding-top: 18px;
    }
  }

  @include media(xl) {
    &__intro-title {
      margin-left: 80px;
    }

    &__wrap {
      padding-top: 95px;
    }

    &__section-container {
      margin-left: 80px;
    }

    &__aside {
      margin-left: 260px;
      width: 380px;
    }
  }
}
// Start New css block
.article__section {
  &-title {
    font-weight: bold;
    line-height: 1.44;
    margin-bottom: 25px;
    font-size: 26px;

    @include media(md) {
      font-size: 35px;
      margin-bottom: 35px;
    }

    @include media(lg) {
      font-size: 50px;
      margin-bottom: 65px;
    }
  }
  &-previews {
    font-size: 14px;
    line-height: 2.125;
    margin: 10px 0;

    @include media(md) {
      margin: 15px 0;
      font-size: 16px;
    }
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    position: relative;
    margin: 30px auto 0;
    // Рамка (ссылки + закругленный угол)
    & h4 {
      margin-right: auto;
      margin-bottom: 0;
      margin-top: 0;
      padding: 40px 0 20px 0;

      @include media(md) {
        margin-right: auto;
        margin-bottom: 0;
        padding: 50px 0 0 55px;
      }

      @include media(lg) {
        padding: 0;
        margin-left: auto;
      }
    }

    & h5 {
      padding-top: 20px;
      padding-bottom: 15px;
      margin-right: 40px;
      @include media(md) {
        margin-left: -40px;
        margin-left: auto;
        padding: 27px 0 27px 20px;
      }
    }

    & a {
      margin-right: auto;
    }

    & > h4 + ol {
      padding: 0;
      margin-left: 15px;
      &:last-child {
        margin-bottom: 25px;
      }
      @include media(md) {
        &:last-child {
          margin-bottom: 0;
        }
      }
      @include media(md) {
        padding: 35px 0 35px 55px;
      }

      @include media(lg) {
        padding: 55px 0 55px 55px;
      }

      margin-right: auto;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -9999px;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 10000vw;
        background-color: $color-lightgray;
        z-index: -1;

        @include media(md) {
          width: auto;
          left: 0;
          border-bottom-right-radius: 80px;
        }
      }
      & li {
        padding-bottom: 15px;
        margin: 0;
        padding-left: 0;
        color: $color-lightgreen;
        list-style-type: decimal;

        @include media(lg) {
          padding-bottom: 15px;
        }
        &::before {
          display: none;
        }

        & a {
          text-decoration: underline;
        }
      }
    }
  }
}
// End New css block
.article__desc {
  margin-top: 30px;
  margin-bottom: 15px;
  h2 {
    font-weight: bold;
    line-height: 1.44;
    margin-bottom: 25px;
    font-size: 26px;

    @include media(md) {
      font-size: 35px;
      margin-bottom: 35px;
    }

    @include media(lg) {
      font-size: 50px;
      margin-bottom: 65px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 40px;

    @include media(md) {
      font-size: 24px;
      margin-top: 60px;
      margin-bottom: 30px;
    }

    @include media(lg) {
      margin-top: 80px;
      // margin-bottom: 50px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.889;
    margin-bottom: 20px;

    @include media(md) {
      margin-top: 50px;
      margin-bottom: 32px;
    }
    @include media(lg) {
      margin-top: 70px;
      // margin-bottom: 50px;
    }
  }

  p {
    font-size: 14px;
    line-height: 2.125;
    margin: 10px 0;

    @include media(md) {
      margin: 15px 0;
      font-size: 16px;
    }
  }

  li {
    font-size: 14px;

    @include media(md) {
      font-size: 16px;
    }
  }

  ol {
    list-style-type: none;
    counter-reset: num;
    margin: 0 0 0 38px;
    & img {
      transform: translateX(-38px);
      width: calc(100% - -38px);
    }
    & div {
      transform: translateX(-38px);
      width: calc(100% - -38px);
    }
    & li {
      position: relative;
      margin: 20px 0 30px;
      padding-left: 15px;
      line-height: 2.143;

      @include media(md) {
        padding-left: 20px;
      }

      @include media(lg) {
        padding-left: 30px;
      }

      &::before {
        content: counter(num);
        counter-increment: num;
        display: inline-block;
        position: absolute;
        top: 0;
        left: -38px;
        width: 38px;
        height: 38px;
        background: $color-lightgreen;
        padding-top: 6px;
        color: #fff;
        text-align: center;
        line-height: 28px;
        font-size: 18px;
        border-bottom-right-radius: 14px;
        border-top-left-radius: 14px;
      }
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    position: relative;
    margin: 30px auto;

    // Рамка (прямоугольная)
    & > h5 {
      padding: 20px 0 12px;
      margin-right: 20px;
      @include media(sm) {
        padding: 0 27px;
      }
    }
    & > h5 + a {
      font-size: 14px;
      line-height: 1.286;
      text-decoration: underline;
      color: $color-lightgreen;
      padding-bottom: 20px;

      @include media(sm) {
        max-width: 300px;
        margin-right: auto;
        padding: 27px 0 27px 20px;
      }

      @include media(lg) {
        max-width: 520px;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -9999px;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 10000vw;
        border-radius: 8px;
        background-color: $color-lightgray;
        z-index: -1;
        @include media(md) {
          width: auto;
          left: 0;
        }
      }
    }
  }
  @include media(md) {
    &__intro {
      width: auto;
      padding: 70px 0;
    }
  }
  //article__section-vertical
  &-vertical {
    width: 100%;
    height: auto;
    max-width: 550px;
    max-height: 785px;
    object-fit: cover;
    margin: 15px auto;
  }
  &-horizontal {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 15px auto;
  }
  //article__section-grid
  &-grid {
    display: grid !important;
    // grid-template-columns: minmax(min-content , auto) minmax(min-content, auto);
    grid-gap: 15px;
    margin: 15px auto !important;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(min-content, auto) minmax(min-content, auto);

    @include media(xxs) {
      grid-template-columns: minmax(min-content, auto) minmax(min-content, auto);
      grid-template-rows: 1fr;
    }
    & img {
      width: 100% !important;
      height: 100%;
      transform: translateX(0) !important;
      margin: 0;
      max-width: none;
      max-height: 550px;
    }
  }
}
</style>
