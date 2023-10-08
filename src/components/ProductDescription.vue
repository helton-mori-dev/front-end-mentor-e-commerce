<template>
  <div class="col-sm-12 col-md-6 description py-sm-0 p-md-5 px-4">
    <h2 class="company-title pt-5 pb-2">
      {{ productName }}
    </h2>
    <h3 class="product-title pb-3">
      {{ productTitle }}
    </h3>

    <p class="product-description">
      {{ productDescription }}
    </p>

    <div class="mobile-price-container">
      <div class="price-discount">
        <p class="main-price">
          {{
            newPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
        <p class="discount">{{ discount }}%</p>
      </div>

      <p class="old-price">
        {{
          oldPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </p>
    </div>

    <div class="qty-wrapper">
      <div class="counter-wrapper">
        <button class="counter-button decrease" @click="decreaseAmount()">
          <img src="images/icon-minus.svg" alt="Decrease" class="minus" />
        </button>
        <input class="amount" v-model="amount" />
        <button class="counter-button increase" @click="increaseAmount()">
          <img src="images/icon-plus.svg" alt="Increase" class="plus" />
        </button>
      </div>
      <button class="btn add-to-cart" @click="addTocart">
        <img src="images/icon-cart.svg" alt="Add to cart" />
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return { oldPrice: 250 };
  },
  methods: {
    ...mapMutations({
      decreaseAmount: "setDecrement",
      increaseAmount: "setIncrement",
    }),
    addTocart() {
      const item = {
        productTitle: this.productTitle,
        newPrice: this.newPrice,
        amount: this.amount,
        total: this.newPrice * this.amount,
      };
      this.items.push(item);
    },
  },
  computed: {
    ...mapState([
      "items",
      "productName",
      "productTitle",
      "productDescription",
      "discount",
      "amount",
    ]),
    newPrice() {
      return (this.oldPrice * this.discount) / 100;
    },
  },
};
</script>

<style scoped>
.add-to-cart img {
  filter: invert(1);
  mix-blend-mode: plus-lighter;
  margin-right: 0.5rem;
}
.company-title {
  color: var(--orange);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.product-title {
  font-weight: 700;
  font-size: 3rem;
}

.product-description {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.price-discount {
  display: flex;
  justify-content: flex-start;
  line-height: 1;
}

.main-price {
  font-weight: 700;
  font-size: 2rem;
  margin-right: 1rem;
}

.discount {
  color: var(--orange);
  background-color: #ffeddc;
  line-height: 1rem;
  border-radius: 10px;
  padding: 7px;
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 2px;
}

.old-price {
  text-decoration: line-through;
  font-weight: 700;
  color: #ccc;
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 2rem;
}

.qty-wrapper {
  display: flex;
}

.counter-wrapper {
  display: flex;
  justify-content: space-around;
  border-radius: 12px;
  background-color: #f7f8fd;
  width: 35%;
  margin-right: 5%;
}

.amount {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
  margin: 0;
  max-width: 100px;
  text-align: center;
  background-color: transparent;
  border: none;
}

.amount:focus {
  outline: none;
}

.add-to-cart {
  background-color: var(--orange);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  letter-spacing: 2px;
  width: 60%;
}

.qty-wrapper .add-to-cart:hover {
  background-color: var(--orange);
  opacity: 0.6;
  color: #fff;
}

.counter-button {
  border: none;
  background-color: transparent;
  padding: 0;
}

.counter-button:hover {
  opacity: 0.6;
}

@media (max-width: 992px) {
  .mobile-price-container {
    display: flex;
  }

  .qty-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .counter-wrapper {
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    width: 100%;
  }

  .add-to-cart {
    padding: 1.8rem 0;
    width: 100%;
  }

  .old-price {
    text-align: right;
  }
}
</style>