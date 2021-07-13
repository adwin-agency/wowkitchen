<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 10 20"
    class="bookmark"
  >
    <path
      class="bookmark__fill"
      d="M0.8,1v16.8L5,13.5l4.2,4.3V1H0.8z"
    />
    <path
      class="bookmark__stroke"
      d="M0,0v20l5-5.1l5,5.1V0H0z M8,15.1c-2.1-2.2-0.9-0.9-3-3.1c-2.1,2.2-0.9,0.9-3,3.1V6h6V15.1z M8,4  H2V2h6V4z"
    />
  </svg>
</template>

<script>
export default {
  name: 'AppBookmark'
}
</script>

<style lang="scss">
.bookmark {
  $b: &;

  @keyframes bookmark {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  &.is-active {
    #{$b} {
      &__stroke {
        animation: bookmark .3s ease;
      }

      &__fill {
        transform: scale(1);
      }
    }
  }

  &__stroke {
    transform-origin: center;
  }

  &__fill {
    transform: scale(0);
    transform-origin: 50% 80%;
    transition: transform .3s ease;
  }
}
</style>
