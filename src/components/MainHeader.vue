<template>
    <header class="header mx-3 mx-md-0">
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

      <a href="/" class="header__logo"><img src="images/logo.svg" alt="">
      </a>

      <ul class="header__menu">
        <li class="menu__item" v-for="link in links" :key="link.label">
          <a href="#" class="menu__link">{{ link.label }}</a>
        </li>
      </ul>

      <HeaderCart></HeaderCart>

      <a href="" class="header__profile">
        <img src="images/image-avatar.png" class="header__profile__img" alt="">
      </a>
    </header>
</template>

<script>
import HeaderCart from './HeaderCart.vue'

export default {
    name: 'MainHeader',
    components: {
      HeaderCart
    },
    data () {
      return {
        menuOpen: false,
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

@media screen and (max-width: 769px) {
  .header {
    grid-template-columns: 10fr 2fr 1fr;
    position: relative;
    border: none;
    margin: 2rem 0 1.5rem;
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

</style>