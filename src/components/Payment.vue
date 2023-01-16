<template>
  <div class="payment">
    <div class="payment__main">
      <div class="container container_side-fixed">
        <router-link
          :to="{name: 'pay'}"
          custom
          v-slot="{href, navigate}"
        >
          <AppButton
            :href="href"
            title="Оплата онлайн"
            bordered
            class="payment__btn"
            @click="navigate"
          />
        </router-link>
        <div class="payment__section">
          <h2 class="payment__heading">Оплата наличными</h2>
          <p class="payment__desc">Для вашего удобства, оплата происходит в несколько этапов. Первая оплата производится при заключении договора представителю нашей компании.</p>
          <p class="payment__desc">Последующие можно произвести как наличными в нашем офисе, так и
            <a
              href="#"
              @click="scrollToForm"
            >
              онлайн на сайте.
            </a>
          </p>
          <div class="payment__features">
            <div class="payment__feature">
              <span class="payment__feature-num"><sub>от</sub>30<sup>%</sup></span>
              <span class="payment__feature-desc">сумма первого платежа</span>
            </div>
          </div>
        </div>
        <div class="payment__section">
          <h2 class="payment__heading">Оплата картой</h2>
          <p class="payment__desc">Для фанатов оплаты картой - оплат по реквизитам. Мы принимаем к оплате VISA и MasterCard.</p>
          <p class="payment__desc">Расплатиться таким образом вы можете как в салоне, так и дома - у наших выездных дизайнеров есть терминалы.</p>
          <div class="payment__systems">
            <p class="payment__systems-title">Мы принимаем</p>
            <div class="payment__systems-list">
              <AppIcon
                name="visa-color"
                class="payment__system payment__system_visa"
                viewBox="0 0 282 92.637756"
              />
              <AppIcon
                name="maestro-color"
                class="payment__system payment__system_maestro"
                viewBox="0 0 256 199"
              />
              <AppIcon
                name="mastercard-color"
                class="payment__system payment__system_mastercard"
                viewBox="0 0 256 199"
              />
              <img
                src="@/assets/img/mir-color.svg"
                alt=""
                class="payment__system payment__system_mir"
              >
            </div>
          </div>
        </div>
        <div class="payment__section">
          <h2 class="payment__heading">Рассрочка</h2>
          <p class="payment__desc">Мы предлагаем беспроцентную рассрочку на срок от 3 до 8 месяцев. А так же кредиты от банков-партнёров на 12 или 24 месяца</p>
          <AppButton
            title="Оставить заявку"
            size="small"
            modalName="designer"
            class="payment__btn"
          />
          <div class="payment__features">
            <div class="payment__feature">
              <span class="payment__feature-num"><sub>от</sub>2<sub>часов</sub></span>
              <span class="payment__feature-desc">на одобрение заявки</span>
            </div>
            <div class="payment__feature">
              <span class="payment__feature-num">16</span>
              <span class="payment__feature-desc">банков-партнёров</span>
            </div>
            <div class="payment__feature">
              <span class="payment__feature-num">0<sup>%</sup></span>
              <span class="payment__feature-desc">рассрочка без первого взноса</span>
            </div>
          </div>
        </div>
        <!-- <div
          ref="form"
          class="payment__section"
        >
          <h2 class="payment__heading">Оплата онлайн</h2>
          <PaymentForm class="payment__form" />
        </div> -->
      </div>
    </div>
    <Interesting payment />
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'
import Interesting from './Interesting.vue'
// import PaymentForm from './PaymentForm.vue'

export default {
  name: 'Payment',
  components: {
    AppIcon,
    AppButton,
    // PaymentForm,
    Interesting
  },
  methods: {
    scrollToForm(e) {
      e.preventDefault()

      const formOffset = this.$refs.form.getBoundingClientRect().top + window.scrollY
      const topSpace = document.querySelector('.app-header').clientHeight + 50
      const scrollTo = formOffset - topSpace
      const cosParameter = (window.scrollY - scrollTo) / 2
      let scrollCount = 0,
        oldTimestamp = null

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / 500

          if (scrollCount >= Math.PI) {
            return
          }

          window.scrollTo(0, scrollTo + cosParameter + cosParameter * Math.cos(scrollCount))
        }

        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>

<style lang="scss">
.payment {
  $b: &;

  &__main {
    padding-top: 45px;
    border-bottom: 2px solid #fff;
  }

  &__section {
    margin-top: 55px;
  }

  &__desc {
    margin-top: 14px;
    font-size: 14px;
    line-height: calc(30/14);

    a {
      font-weight: bold;
      color: $color-green;
    }

    & + & {
      margin-top: 10px;
    }
  }

  &__features {
    margin-top: 14px;
  }

  &__feature {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }

    &-num {
      width: 115px;
      margin-right: 10px;
      font-weight: bold;
      font-size: 50px;
      color: $color-green;

      sub {
        vertical-align: initial;
        font-size: 20px;
      }

      sup {
        vertical-align: top;
        font-size: 30px;
      }
    }

    &-desc {
      flex: 1;
      max-width: 140px;
      font-weight: 500;
      font-size: 13px;
      line-height: calc(18/13);
    }
  }

  &__systems {
    margin-top: 25px;

    &-title {
      font-weight: 600;
      font-size: 16px;
    }

    &-list {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  }

  &__system {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }

    &_visa {
      width: 55px;
    }

    &_maestro,
    &_mastercard {
      margin-bottom: -4px;
      width: 50px;
    }

    &_mir {
      width: 65px;
    }
  }

  &__desc + &__btn {
    margin-top: 16px;
  }

  &__btn {
    width: 100%;

    & + #{$b}__features {
      margin-top: 34px;
    }
  }

  &__form {
    margin-top: 20px;
  }

  @include media(md) {
    &__main {
      padding: 35px 0 85px;
      border-bottom: none;
    }

    &__section {
      margin-top: 65px;
    }

    &__desc {
      max-width: 630px;
    }

    &__features {
      display: flex;
    }

    &__feature {
      display: inline-block;
      margin-right: 110px;
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }

      &-num {
        margin-right: 0;
        width: auto;
      }

      &-desc {
        display: block;
        margin-top: -4px;
      }
    }

    &__systems {
      display: flex;
      align-items: center;
      margin-top: 35px;

      &-title {
        margin-right: 25px;
      }

      &-list {
        margin-top: 0;
      }
    }

    &__desc + &__btn {
      margin-top: 32px;
    }

    &__btn {
      width: auto;
      min-width: 225px;

      & + #{$b}__features {
        margin-top: 24px;
      }
    }

    &__form {
      margin-top: 35px;
      max-width: 700px;
    }
  }

  @include media(lg) {
    &__main {
      padding: 50px 0 75px;
    }

    &__section {
      margin-top: 75px;
    }

    &__heading {
      font-size: 24px;
      line-height: calc(32/24);
    }

    &__desc {
      margin-top: 24px;
      max-width: 770px;
      font-size: 16px;
      line-height: calc(32/16);
    }

    &__features {
      margin-top: 24px;
    }

    &__feature {
      &-num {
        font-size: 60px;

        sub {
          font-size: 30px;
        }

        sup {
          font-size: 34px;
        }
      }

      &-desc {
        margin-top: 5px;
      }
    }

    &__systems {
      &-title {
        margin-right: 50px;
      }
    }

    &__system {
      margin-right: 30px;

      &_visa {
        width: 75px;
      }

      &_maestro,
      &_mastercard {
        width: 65px;
      }

      &_mir {
        width: 78px;
      }
    }

    &__desc + &__btn {
      margin-top: 28px;
    }

    &__form {
      margin-top: 30px;
    }
  }

  @include media(xl) {
    &__main {
      padding: 70px 0 55px;
    }

    &__section {
      margin-top: 95px;
    }

    &__desc {
      max-width: 920px;
    }

    &__features {
      margin-top: 45px;
    }

    &__btn + #{$b}__features {
      margin-top: 34px;
    }
  }
}
</style>
