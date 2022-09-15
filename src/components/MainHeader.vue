<template>
    <header class="header">
      <a href="/" class="header__logo"><img src="../assets/images/logo.svg" alt=""></a>
      <ul class="header__menu">
        <li class="menu__item"><a href="#" class="menu__link">Collections</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Men</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Women</a></li>
        <li class="menu__item"><a href="#" class="menu__link">About</a></li>
        <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>
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
        name: 'MainHeader'
    }
</script>