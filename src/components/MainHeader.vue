<template>
    <header class="header">
      <Transition name="layer">
        <div 
          class="back-menu-layer"
          v-if="menuOpen"  
          @click="toggleMenuMobile"
        >
        </div>
      </Transition>
        
      <div 
        class="menu-button"
        :class="{ closeButton: menuOpen }"
        @click="toggleMenuMobile"
      >
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </div>

      <Transition name="menu">
        <div 
        class="mobile-menu" 
        v-if="menuOpen"
        >
          <ul class="mobile-header__menu">
            <li 
            class="mobile-menu__item" 
            v-for="link in links" 
            :key="link.label"
            >
              <a href="#" class="mobile-menu__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </Transition>

      <a href="/" class="header__logo"><img src="../assets/images/logo.svg" alt="">
      </a>

      <ul class="header__menu">
        <li class="menu__item" v-for="link in links" :key="link.label">
          <a href="#" class="menu__link">{{ link.label }}</a>
        </li>
      </ul>

      <div 
        href="#" 
        class="header__cart"
        @click.stop="toggleCart"
      >
        <img class="cart__img" src="../assets/images/icon-cart.svg" alt="">
      
        <transition name="cart">
          <div 
            class="cart__content"
            v-if="cartOpen"
          >
            <h2 class="cart__title">Cart</h2>
            <div class="cart__summary">
              <div 
                v-if="items > 0"
                class="cart__items"
              >
                <div class="product__wrap">
                  <img class="product__thumb" src="../assets/images/image-product-1-thumbnail.jpg" alt="">
                  <div class="product__info">                    
                    <h2 class="product__name">Fall Limited Edition Sneakers</h2>
                    <span class="single__price">$125.00 x 3 &nbsp;</span>             
                    <span class="total__price">$375.00</span>
                  </div>
                  <img class="icon__delete" src="../assets/images/icon-delete.svg">
                </div>
                <button class="btn btn-primary button__checkout">Checkout</button>
              </div>
              <h3
                v-else
                class="cart__message"
              >
                Your cart is empty.
              </h3>
            </div>          
          </div>
        </transition>
      </div>

      <a href="" class="header__profile">
        <img src="../assets/images/image-avatar.png" class="header__profile__img" alt="">
      </a>
    </header>
</template>

<script>
    export default {
        name: 'MainHeader',
        data () {
          return {
            items: 10,
            menuOpen: false,
            cartOpen: true,
            links: [
              { label: 'Collections' },
              { label: 'Men' },
              { label: 'Women' },
              { label: 'About' },
              { label: 'Contact' }
            ],            
          }
        },
        methods: {
          toggleMenuMobile () {
            this.menuOpen = !this.menuOpen
          },
          toggleCart () {
            this.cartOpen = !this.cartOpen
          }
        }
    }
</script>

<style scoped>

.header {
  display: grid;
  grid-template-columns: 2fr 11fr 1fr 1fr;
  margin: 3rem 0 0;
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
  transition: 0.3s all ease;
}

.menu__link:hover {
  color: #333;
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
  position: relative;
  cursor: pointer;
}

.header__cart .cart__img {
  opacity: .6;
}

.header__cart .cart__img:hover {
  opacity: 1;
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

.menu-button {
  display: none;
}

.cart__content {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50%;
  width: 420px;
  border-radius: 8px;
  box-shadow: 0 1px 10px rgb(0 0 0 / 40%);
  opacity: 1;
  background-color: #fff;
}

.cart__title {
  font-weight: 700;
  font-size: 22px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 32px 24px;
}

.cart__summary {
  padding: 24px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.product__wrap {
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  gap: 12px;
  padding-bottom: 24px;
}

.product__thumb {
  border-radius: 8px;
  max-width: 70px;
}

.product__info {
}

.product__name {
  font-size: 18px;
  font-weight: 400;
}

.single__price {
  font-size: 18px;
}

.total__price {
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.icon__delete {
  display: table;
  margin: auto;
}

.button__checkout {
  background-color: #f2812c;
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  padding: 16px 0;
  border: none;
}

.cart__items {

}

.cart__message {
}

@media screen and (max-width: 992px) {
  .header {
    grid-template-columns: 10fr 2fr 1fr;
    position: relative;
    border: none;
  }

  .header__menu {
    display: none;
  }

  .menu-button {
    display: block;
    float: left;
    width: 22px;
    height: 25px;
    padding-top: 6px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .header__logo {
    display: block;
    float: left;
    width: 100%;
    margin-left: 36px;
  }

  .menu-line {
    position: absolute;
    height: 4px;
    width: 25px;
    background-color:#999;
    transition: .3s all ease;
  }

  .menu-line:nth-child(2) {
    top: 14px;
  }

  .menu-line:nth-child(3) {
    top: 22px;
  }

  .menu-button.closeButton .menu-line:nth-child(1){
    rotate: 45deg;
    top: 14px;
  }

  .menu-button.closeButton .menu-line:nth-child(2){
    rotate: -45deg;
  }

  .menu-button.closeButton .menu-line:nth-child(3){
    display: none;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 0;
  }

  .mobile-header__menu {
    list-style: none;
    width: 60vw;
    height: 100vh;
    padding: 10vh 0 0 10vw;
  }

  .mobile-menu__item {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }
  
  .mobile-menu__link {
    color: #333;
    text-decoration: none;
    font-weight: 700;
  }

  .back-menu-layer {
    position: fixed;
    inset: 0;
    opacity: .6;
    background-color: #333;
  }
  
}
/* Transições */

.layer-enter-active, .layer-leave-active {
  transition: .3s all ease;
}

.layer-enter-from, .layer-leave-to {
  opacity: 0;
}

.menu-enter-active, .menu-leave-active  {
  transition: .3s all ease;
}

.menu-enter-from, .menu-leave-to {
  left: -100%;
}

.cart-enter-active, .cart-leave-active {
  transition: .3s all ease;
}

.cart-enter-from, .cart-leave-to {
  opacity: 0;
}
</style>