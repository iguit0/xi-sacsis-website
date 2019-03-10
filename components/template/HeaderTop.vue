<template>
  <section class="header-top">
    <b-container fluid style="max-width: 1170px;">
      <b-row class="align-items-center justify-content-between">
        <b-col lg="6" md="6" sm="6">
          <nuxt-link to="/">
            <b-img src="http://www.ctlp.com.br/images/logo.png" class="logo img-responsive"/>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.header-top {
  line-height: 100px;
  padding-top: 5px;
}
.logo {
  height: 170px;
}
@media (max-width: 575px) {
  .header-top {
    width: 50%;
  }
}
@media (max-width: 960px) {
  .header-top .user-dropdown {
    display: none;
  }
}
</style>
