<template>
  <div class="hello">
    <h1>List of {{ camels.length }} camels</h1>
    <b-list-group>
      <camel-item v-for="camel in camels" :key="camel._id" :camel="camel"></camel-item>
    </b-list-group>
  </div>
</template>

<script>
import Api from '@/Api'
import CamelItem from '@/components/CamelItem'

export default {
  name: 'Camels',
  data () {
    return {
      camels: []
    }
  },
  mounted () {
    this.getCamels()
  },
  methods: {
    getCamels () {
      Api().get('camels')
      .then(reponse => {
        this.camels = reponse.data.camels
      })
      .catch(error => {
        this.camels = []
        console.log(error)
      })
      .then(() => {
        // This code is always executed (after success or error).
      })
    }
  },
  components: {
    CamelItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
