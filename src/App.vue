<template>
  <div id="app">
    <div id="nav" class="navigation-bar mb-5">
      <div class="container">
        <b-row align-v="center">
          <b-col class="text-left">
            <div class="company-logo mb-2">
              <img src="https://cdn.bisnow.net/bisnow-logos/bisnow-white.svg" />
            </div>
          </b-col>
          <b-col class="text-right">
            <router-link to="/">Home</router-link> |
            <router-link to="/contacts">Contacts</router-link>
          </b-col>
        </b-row>
      </div>
    </div>
    <router-view />
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

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

// a {
//   color: #f58320 !important;
// }
#nav {
  padding: 30px;
  text-decoration: none !important;
  a {
    font-weight: bold;
    color: #2c3e50 !important;

    &.router-link-exact-active {
      // color: #f58320;
      color: #fff !important;
    }
  }
}
// custom styles
.navigation-bar {
  background: #f58320;
}
// .form-input overrides
.form-control {
  border: none !important;
  border-bottom: 1px solid #f58320 !important;
  border-radius: 0px !important;
}
.btn-secondary {
  background-color: #f58320 !important;
  border: #f58320 !important;
}
</style>
