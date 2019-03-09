<template>
  <footer class="footer">
    Desenvolvido
    <span class="mr-1 ml-1">por</span>
    <a href="https://github.com/iguit0" target="_blank" rel="noopener">Igor Alves</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  grid-area: footer;
  background-color: #ddd;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}

.footer a {
  text-decoration: none;
  color: #1e469a;
  font-weight: bold;
}
</style>