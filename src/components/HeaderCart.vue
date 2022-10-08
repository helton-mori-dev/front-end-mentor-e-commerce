<template>    
    <div 
        href="#" 
        class="header__cart"
        @click.stop="toggleCart"
    >
        <img class="cart__img" src="images/icon-cart.svg" alt="">
        
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
                    <img class="product__thumb" src="images/image-product-1-thumbnail.jpg" alt="">
                    <div class="product__info">                    
                    <h2 class="product__name">Fall Limited Edition Sneakers</h2>
                    <span class="single__price">$125.00 x 3 &nbsp;</span>             
                    <span class="total__price">$375.00</span>
                    </div>
                    <img class="icon__delete" src="images/icon-delete.svg">
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
</template>

<script>
    export default {
    name: 'HeaderCart',
    data () {
      return {
        items: 0,
        cartOpen: false
      }
    },
    methods: {
      toggleCart () {
        this.cartOpen = !this.cartOpen
      }
    }
}
</script>

<style>

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

.header__cart .cart__img {
  opacity: .6;
}

.header__cart .cart__img:hover {
  opacity: 1;
}

.cart-enter-active, .cart-leave-active {
  transition: .3s all ease;
}

.cart-enter-from, .cart-leave-to {
  opacity: 0;
}

@media (max-width: 769px) {
  .cart__content {
    position: fixed;
    top: 100px;

  }

}
</style>