<template>
  <div id="app">
    <b-navbar :id="'nav'" :type="'is-dark'" :close-on-click="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img :src="require('@/assets/logo.png')"
               alt="CORP">
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/'}">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/profile'}">
          Profile
        </b-navbar-item>
        <b-navbar-dropdown label="Influence" :collapsible="true">
          <b-navbar-item tag="router-link" :to="{ path: '/influence'}">
            Details
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/history'}">
            History
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-bottom: 2rem;
}
</style>
