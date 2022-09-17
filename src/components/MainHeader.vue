<template>
    <header class="header">
      <a href="/" class="header__logo"><img src="../assets/images/logo.svg" alt=""></a>
      <ul class="header__menu">
        <li class="menu__item" v-for="link in links" :key="link.label">
          <a href="#" class="menu__link">{{ link.label }}</a>
        </li>
      </ul>
      <a href="" class="header__cart">
        <img src="../assets/images/icon-cart.svg" alt="">
      </a>
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
            links: [
              { label: 'Collections' },
              { label: 'Men' },
              { label: 'Women' },
              { label: 'Women' },
              { label: 'About' },
              { label: 'Contact' }
            ],            
          }
        }
    }
</script>

<style scoped>

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

</style>