<template>
  <div id="app">
    <div id="nav" class="navigation-bar mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="company-logo mb-2">
            <img src="https://cdn.bisnow.net/bisnow-logos/bisnow-white.svg" />
          </div>
        </div>
        <div class="col-md-6">
          <router-link to="/">Home</router-link> |
          <router-link to="/contacts">Contacts</router-link>
        </div>
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

a {
  color: #f58320 !important;
}
#nav {
  padding: 30px;
  text-decoration: none !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      // color: #f58320;
      color: #fff;
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
