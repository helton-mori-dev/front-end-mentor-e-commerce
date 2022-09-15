<template>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div class="container">
    <header class="header">
      <a href="/" class="header__logo"><img src="./assets/images/logo.svg" alt=""></a>
      <ul class="header__menu">
        <li class="menu__item"><a href="#" class="menu__link">Collections</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Men</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Women</a></li>
        <li class="menu__item"><a href="#" class="menu__link">About</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>
      </ul>
      <a href="" class="header__cart">
        <img src="./assets/images/icon-cart.svg" alt="">
      </a>
      <a href="" class="header__profile">
        <img src="./assets/images/image-avatar.png" class="header__profile__img" alt="">
      </a>
    </header>

    <section class="main container row">
      <div class="col-6 gallery p-5">
        <img style="display: block;" src="/images/image-product-1.jpg" alt="" class="product-image">
        <img src="/images/image-product-2.jpg" alt="" class="product-image">
        <img src="/images/image-product-3.jpg" alt="" class="product-image">
        <img src="/images/image-product-4.jpg" alt="" class="product-image">

      </div>
      <div class="col-6 description px-5">

        <h2 class="company-title">
          Sneaker Company
        </h2>
        <h3 class="product-title">
          Fall Limited Edition Sneakers
        </h3>

        <p class="product-description">
        </p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.

        <p class="main-price">
          $125.00
        </p>
        <p class="discount">
          50%
        </p>
        <p class="old-price">
          $250.00
        </p>

        <p class="amount">
          0
        </p>
        <button class="add-to-cart">
          Add to cart
        </button>
      </div>
    </section>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

.header {
  display: grid;
  grid-template-columns: 2fr 11fr 1fr 1fr;
  padding: 3rem 0 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
}

.header__menu {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin-top: 4px;
  margin-bottom: 0;
  max-width: 50%;
}

.menu__item {
  margin-bottom: 4rem;
}

.menu__item:not(:last-child) {
  margin-right: 2rem;
}

.menu__link {
  text-decoration: none;
  color: #999;
  padding-bottom: 4rem;
  position: relative;
}

.menu__link:after {
  content: '';
  transition: 0.5s all ease;
  height: 0;
}

.menu__link:hover:after {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: #f2812c;
}

.header__cart,
.header__profile {
  display: flex;
  justify-content: center;
  align-items: start;
}

.header__cart {
  padding-top: 5px;
  transition: 0.3s all ease;
}

.header__cart:hover {
  opacity: 0.6;
}

.header__profile {
  margin-top: -10px;
}

.header__profile__img {
  max-width: 50px;
  border-radius: 100%;
  transition: 0.4s all ease;
}

.header__profile__img:hover {
  box-shadow: 0 0 0 4px #f2812c;
}

.product-image {
  display: none;
  width: 100%;
}

.description {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
