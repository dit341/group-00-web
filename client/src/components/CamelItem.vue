<template>
  <b-list-group-item :style="{ color: camel.color }">
    <img alt="Camel" src="../assets/camel.jpg">
    <svg-icon size="20" viewBox="0 0 552.83 552.83" :color="camel.color">
      <camel-icon/>
    </svg-icon>
    {{ camel.color }} is at position {{ camel.position }}
    <b-button type="button" class="close" @click="$emit('delete-camel', camel._id)">&times;</b-button>
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
img {
  width: 33px;
  margin-right: 10px;
}
</style>
