<template>
  <b-list-group-item :style="{ color: camel.color }">{{ camel.color }} : {{ camel.position }}</b-list-group-item>
</template>

<script>
export default {
  name: 'camel-item',
  props: ['camel']
}
</script>

<style scoped>
</style>
