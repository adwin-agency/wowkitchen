<template>
  <div class="service-step">
    <span class="service-step__num">{{stepData.num}}</span>
    <div class="service-step__content">
      <p class="service-step__title">{{stepData.title}}</p>
      <template v-if="Array.isArray(stepData.desc)">
        <p
          v-for="(item, index) in stepData.desc"
          :key="index"
          class="service-step__desc"
        >
          {{item}}
        </p>
      </template>
      <p
        v-else
        class="service-step__desc"
      >
        {{stepData.desc}}
      </p>
      <AppButton
        v-if="stepData.btn"
        :title="stepData.btn.title"
        :modalName="stepData.btn.modalName"
        color="pink"
        class="service-step__btn"
      />
    </div>
    <div
      v-if="stepData.stat"
      class="service-step__stat"
    >
      <AppIcon
        v-if="stepData.stat.icon"
        :name="stepData.stat.icon"
        class="service-step__stat-icon"
        :class="{[`service-step__stat-icon_${stepData.stat.iconmod}`]: stepData.stat.iconmod}"
      />
      <p
        v-else
        class="service-step__stat-num"
      >
        {{stepData.stat.num}}<span
          v-if="stepData.stat.unit"
          class="service-step__stat-unit"
          :class="{[`service-step__stat-unit_${stepData.stat.unitmod}`]: stepData.stat.unitmod}"
        >{{stepData.stat.unit}}</span>
      </p>
      <p class="service-step__stat-title">{{stepData.stat.title}}</p>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'ServiceStep',
  components: {
    AppButton,
    AppIcon
  },
  props: {
    stepData: Object
  }
}
</script>

<style lang="scss">
.service-step {
  position: relative;

  &__num {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    flex-shrink: 0;
    margin-top: 5px;
    margin-right: 20px;
    border-radius: 14px 0 14px 0;
    width: 38px;
    height: 38px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    background-color: $color-green;
  }

  &__title {
    padding-left: 60px;
    font-weight: bold;
    font-size: 18px;
  }

  &__desc {
    margin-top: 20px;
    font-size: 13px;
    line-height: (32/16);

    & + & {
      margin-top: 10px;
    }
  }

  &__btn {
    margin-top: 26px;
    width: 300px;
    max-width: 100%;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    &-icon {
      width: 152px;
      height: 95px;
      margin-bottom: 10px;

      &_small {
        width: 87px;
        height: 87px;
      }
    }

    &-num {
      font-weight: bold;
      font-size: 90px;
      line-height: 1;
      color: $color-green;
    }

    &-unit {
      position: relative;
      margin-left: -20px;
      font-size: 36px;
      color: $color-primary;

      &_top {
        top: -38px;
      }

      &_left {
        margin-left: -55px;
      }

      &_right {
        margin-left: 0;
      }
    }

    &-title {
      width: 220px;
      text-align: center;
      font-size: 13px;
      line-height: (18/13);
    }
  }

  @include media(md) {
    display: flex;
    align-items: flex-start;

    &__num {
      position: static;
      margin-right: 40px;
    }

    &__content {
      margin-right: auto;
      width: calc(100% - 400px);
    }

    &__title {
      font-size: 20px;
      padding-left: 0;
    }

    &__desc {
      font-size: 14px;
    }

    &__stat {
      align-items: flex-start;
      width: 220px;

      &-icon {
        width: 182px;
        height: 115px;

        &_small {
          width: 87px;
          height: 87px;
        }
      }

      &-num {
        font-size: 106px;
      }

      &-unit {
        &_top {
          top: -48px;
        }

        &_left {
          margin-left: -62px;
        }
      }

      &-title {
        width: auto;
        padding-right: 20px;
        text-align: left;
      }
    }
  }

  @include media(lg) {
    &__content {
      width: calc(100% - 500px);
    }
    &__title {
      font-size: 24px;
    }

    &__desc {
      margin-top: 30px;
      font-size: 16px;
    }
  }
}
</style>
