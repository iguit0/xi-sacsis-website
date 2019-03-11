<template>
  <div class="home">
    <h1 class="title">CTLP</h1>
    <h2 class="subtitle">Clube de Tiro Lagoa da Prata</h2>
    <hr>
    <b-btn to="/admin" variant="warning" class="mr-1">Admin</b-btn>
    <b-btn to="/sobre-nos" variant="primary" class="mr-1">Sobre nós</b-btn>
    <b-btn to="/noticias" variant="success" class="mr-1">Notícias</b-btn>
  </div>
</template>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
