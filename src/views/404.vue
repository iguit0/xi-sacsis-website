<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
      </div>
      <h2>Oops! Não achamos essa página</h2>
      <p>A página que você está procurando pode ter sido removida caso seu endereço tenha mudado ou esteja temporariamente indisponível.</p>
      <v-btn dark depressed round to="/">
        <v-icon class="mr-1">fa fa-home</v-icon>Voltar a página inicial
      </v-btn>
      <div class="notfound-social">
        <a
          href="https://www.facebook.com/sacsisufv/"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: #FFA000;"
        >
          <v-btn fab dark color="#ff6f68">
            <v-icon color="#efefef">fab fa-facebook</v-icon>
          </v-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kanit:200");

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#notfound {
  position: relative;
  height: 85vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding: 15px;
}

.notfound .notfound-404 {
  position: relative;
  height: 210px;
}

.notfound .notfound-404 h1 {
  font-family: "Kanit", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 186px;
  font-weight: 200;
  margin: 0px;
  background: linear-gradient(130deg, #ffa34f, #ff6f68);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
}

.notfound h2 {
  font-family: "Kanit", sans-serif;
  font-size: 33px;
  font-weight: 200;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 18px;
  letter-spacing: 3px;
}

.notfound p {
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  font-weight: 200;
  margin-top: 0px;
  margin-bottom: 18px;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    position: relative;
    height: 168px;
  }

  .notfound .notfound-404 h1 {
    font-size: 142px;
  }

  .notfound h2 {
    font-size: 22px;
  }
}
</style>
