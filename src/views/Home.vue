<template>
  <div class="home">
    <div class="container is-desktop">
      <img style="max-width: 50%;" alt="Corp logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this.$store.dispatch("updateAuthHeader");
    this.axios.get('https://influencesysapi.thecorporateer.com/currentCorporateer/', {
      headers: this.$store.state.authHeader
    }).then((response) => this.$store.dispatch("updateCurrentCorporateer", response.data))
    this.$store.dispatch("setCurrentInfluences");
    this.$store.dispatch("setSender");
    this.$store.dispatch("setReceiver");
  }
}
</script>
