<template>
  <div class="login">
    <div class="container is-desktop">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title title is-4 is-centered">
            Login
          </p>
        </header>
        <div class="card-content">
          <div class="columns is-widescreen">
            <div class="column is-4  is-offset-4">
              <form @submit.prevent="handleLogin">
                <b-field label="Username">
                  <b-input v-model="username"></b-input>
                </b-field>
                <b-field label="Password">
                  <b-input type="password"
                           v-model="password"
                           password-reveal>
                  </b-input>
                </b-field>
                <p v-if="error" class="help is-danger">Email or Password are not correct</p>
                <b-button type="is-info" :loading="loading" @click="handleLogin">Login</b-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        loading: false,
        error: false,
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.axios.post('https://influencesysapi.thecorporateer.com/auth', JSON.stringify({
          username: this.username,
          password: this.password
        }), {headers: {'Content-Type': 'application/json'}}).then((response) => {
          localStorage.setItem('user', JSON.stringify({ username: this.username, token: response.data.token }))
          this.$router.push('/');
          console.log(response);
        }).catch((error) => {
          this.loading = false;
          this.error = true;
          console.log(error)
        })
      }
    },
    created() {
      localStorage.removeItem('user');
      this.$store.dispatch("updateCurrentCorporateer", {})
    }
  }
</script>

<style scoped>

</style>
