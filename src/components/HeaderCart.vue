<template>    
    <div 
        href="#" 
        class="header__cart mx-auto"
        @click.stop="openCart"
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
                    <h2 class="product__name">{{ productTitle }}</h2>
                    <span class="single__price">${{ oldPrice*discount/100}} x {{ amount }} &nbsp;</span>             
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
    <div 
      class="back-cart-layer"
      v-if="cartOpen"  
      @click="closeCart"
    >
    </div>
</template>

<script>
    export default {
    name: 'HeaderCart',
    data () {
      return {
        items: 1,
        cartOpen: false,
        productName: 'Sneaker Company',
        productTitle: 'Fall Limited Edition Sneakers',
        productDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
they’ll withstand everything the weather can offer.`,
        oldPrice: '250.00',
        discount: 50,
        amount: 3
      }
    },
    methods: {
      openCart () {
        this.cartOpen = true
      },
      closeCart () {
        this.cartOpen = false
      }
    }
}
</script>

<style>
.header {
  position: relative;
}

.cart__content {
  position: absolute;
  top: 50%;
  right: 0;
  width: 420px;
  border-radius: 8px;
  box-shadow: 0 1px 10px rgb(0 0 0 / 40%);
  opacity: 1;
  background-color: #fff;
  cursor: default;
  z-index: 6;
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
  background-color: var(--orange);
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  padding: 16px 0;
  border: none;
}

.header__cart .cart__img {
  opacity: .6;
  cursor: pointer;
}

.header__cart .cart__img:hover {
  opacity: 1;
}

.back-cart-layer {
    position: fixed;
    inset: 0;
    z-index: 1;
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
    left: 50%;
    translate: -50%;
    width: 90%;
  }

}
</style>