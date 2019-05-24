<template>
  <b-list-group-item :style="{ color: camel.color }">
    <svg-icon size="20" viewBox="0 0 552.83 552.83" :color="camel.color"><camel-icon /></svg-icon>
    {{ camel.color }} : {{ camel.position }}
  </b-list-group-item>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import CamelIcon from '@/components/icons/CamelIcon'

export default {
  name: 'camel-item',
  props: ['camel'],
  components: {
    SvgIcon,
    CamelIcon
  }
}
</script>

<style scoped>
</style>
