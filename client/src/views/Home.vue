<template>
  <div>
    <b-jumbotron header="DIT341 Frontend" lead="Welcome to Your DIT341 Frontend Vue.js App">
      <p>Message from the server: {{message}}</p>
      <b-button variant="primary" href="/camels">List Camels</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import Api from '@/Api'

export default {
  name: 'home',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.getMessage()
  },
  methods: {
    getMessage () {
      Api().get('/')
      .then(response => {
        this.message = response.data.message
      })
      .catch(error => {
        this.message = error
      })
    }
  }
}
</script>
