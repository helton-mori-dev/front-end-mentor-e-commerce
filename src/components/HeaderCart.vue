<template>
  <div href="#" class="header__cart mx-auto" @click.stop="openCart">
    <img class="cart__img" src="images/icon-cart.svg" alt="" />
    <span class="cart__total">{{ items.length }}</span>
    <transition name="cart">
      <div class="cart__content" v-if="cartOpen">
        <h2 class="cart__title">Cart</h2>
        <div class="cart__summary">
          <div v-if="items.length > 0" class="cart__items">
            <div
              class="product__wrap"
              v-for="(item, index) in items"
              :key="index"
            >
              <img class="product__thumb" :src="src" alt="" />
              <div class="product__info">
                <h2 class="product__name">{{ item.productTitle }}</h2>
                <span class="single__price">
                  {{
                    items[index].newPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  }}
                  x {{ items[index].amount }}
                </span>
                <span class="total__price">
                  &nbsp;{{
                    items[index].total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  }}
                </span>
              </div>
              <img 
                class="icon__delete" 
                src="images/icon-delete.svg" 
                @click="deleteItem(index)"
              />
            </div>
            <button class="btn btn-primary button__checkout">Checkout</button>
          </div>
          <h3 v-else class="cart__message">Your cart is empty.</h3>
        </div>
      </div>
    </transition>
  </div>
  <div class="back-cart-layer" v-if="cartOpen" @click="closeCart"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderCart",
  data() {
    return {
      cartOpen: false,
    };
  },
  computed: {
    ...mapState([
      "src",
      "items",
      "productName",
      "productTitle",
      "productDescription",
      "discount",
      "amount",
    ]),
  },
  methods: {
    openCart() {
      this.cartOpen = true;
    },
    closeCart() {
      this.cartOpen = false;
    },
    deleteItem(index){
      this.items.splice(index,1)
    }
  },
};
</script>

<style>
.header {
  position: relative;
}

.cart__content {
  position: absolute;
  top: 50%;
  right: 0;
  width: 430px;
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

.cart__total {
  background-color: var(--orange);
  color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -6px;
  right: -15px;
  left: auto;
  font-weight: 600;
  font-size: .75rem;
  min-width: 26px;
  text-align: center;
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
  cursor: pointer;
  transition: .3s all ease;
}

.icon__delete:hover {
  opacity: .5;
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

.header__cart {
  position: relative;
}

.header__cart .cart__img {
  opacity: 0.6;
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

.cart-enter-active,
.cart-leave-active {
  transition: 0.3s all ease;
}

.cart-enter-from,
.cart-leave-to {
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