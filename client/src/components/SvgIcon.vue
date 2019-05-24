<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="getWidth"
    :height="getHeight"
    :viewBox="getViewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{name}} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      default: 'camel'
    },
    width: {
      type: [Number, String],
      default: undefined
    },
    height: {
      type: [Number, String],
      default: undefined
    },
    size: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: 'black' // 'currentColor' for inherited
    },
    viewBox: {
      type: String,
      default: undefined
    }
  },
  computed: {
    getWidth () {
      return this.width || this.size
    },
    getHeight () {
      return this.height || this.size
    },
    getViewBox () {
      return this.viewBox || `0 0 ${this.width} ${this.height}`
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
