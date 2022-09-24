<template>
  
  <div class="container g-0">
    <MainHeader></MainHeader>
    <ContentContainer></ContentContainer>   
    <MainFooter></MainFooter> 
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ContentContainer from './components/ContentContainer.vue';
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    ContentContainer,
    MainFooter
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

</style>
