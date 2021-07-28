<template>
  <div class="sizing-step">
    <span class="sizing-step__num">{{stepData.num}}</span>
    <div class="sizing-step__content">
      <p class="sizing-step__title">{{stepData.title}}</p>
      <template v-if="Array.isArray(stepData.desc)">
        <p
          v-for="(item, index) in stepData.desc"
          :key="index"
          class="sizing-step__desc"
        >
          {{item}}
        </p>
      </template>
      <p
        v-else
        class="sizing-step__desc"
      >
        {{stepData.desc}}
      </p>
      <AppButton
        v-if="stepData.btn"
        :title="stepData.btn.title"
        :modalName="stepData.btn.modalName"
        color="pink"
        class="sizing-step__btn"
      />
    </div>
    <div class="sizing-step__stat">
      <AppIcon
        v-if="stepData.stat.icon"
        :name="stepData.stat.icon"
        class="sizing-step__stat-icon"
      />
      <p
        v-else
        class="sizing-step__stat-num"
      >
        {{stepData.stat.num}}<span v-if="stepData.stat.unit">{{stepData.stat.unit}}</span>
      </p>
      <p class="sizing-step__stat-title">{{stepData.stat.title}}</p>
    </div>
  </div>
</template>

<script>
import AppButton from './base/AppButton.vue'
import AppIcon from './base/AppIcon.vue'

export default {
  name: 'SizingStep',
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
.sizing-step {
  display: flex;
  align-items: flex-start;

  &__num {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: 5px;
    margin-right: 40px;
    border-radius: 14px 0 14px 0;
    width: 38px;
    height: 38px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    background-color: $color-green;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-weight: bold;
    font-size: 24px;
  }

  &__desc {
    margin-top: 30px;
    font-size: 16px;
    line-height: (32/16);

    & + & {
      margin-top: 10px;
    }
  }

  &__btn {
    margin-top: 26px;
    width: 300px;
  }

  &__stat {
    margin-left: 200px;
    width: 220px;

    &-icon {
      width: 182px;
      height: 115px;
      margin-bottom: 10px;
    }

    &-num {
      font-weight: bold;
      font-size: 106px;
      line-height: 1;
      color: $color-green;

      span {
        margin-left: -20px;
        font-weight: 900;
        font-size: 36px;
        color: $color-primary;
      }
    }

    &-title {
      padding-right: 20px;
      font-size: 13px;
      line-height: (18/13);
    }
  }
}
</style>
