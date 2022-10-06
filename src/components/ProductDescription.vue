<template>
    <div class="col-6 description p-5">

        <h2 class="company-title pt-5 pb-2">
            {{ productName }}
        </h2>
        <h3 class="product-title pb-3">
            {{ productTitle }}
        </h3>

        <p class="product-description">
            {{ productDescription }}
        </p>

        <div class="price-discount">
            <p class="main-price">
                ${{ ((oldPrice*50)/100).toFixed(2) }}
            </p>
            <p class="discount">
                {{ discount }}%
            </p>
        </div>

        <p class="old-price">
            ${{ oldPrice }}
        </p>

        <div class="qty-wrapper">
            <div class="counter-wrapper">
                <button 
                    class="counter-button decrease"
                    @click="amount--"
                >
                    <img src="images/icon-minus.svg" alt="Decrease" class="minus">
                </button>
                <p class="amount">
                 {{ amount }}
                </p>
                <button 
                    class="counter-button increase"
                    @click="amount++"
                >
                    <img src="images/icon-plus.svg" alt="Increase" class="plus">
                </button>
            </div>
            <button class="btn btn-dark add-to-cart">
                <img src="images/icon-cart.svg" alt="Add to cart">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                productName: 'Sneaker Company',
                productTitle: 'Fall Limited Edition Sneakers',
                productDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.`,
                oldPrice: '250.00',
                discount: 50,
                amount: 1
            }
        }
    }
</script>

<style scoped>
    .add-to-cart img {
      filter: invert(1);
      mix-blend-mode: plus-lighter;
      margin-right: .5rem;
    }
    .company-title {
      color: #f2812c;
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
      color: #f2812c;
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
      display: grid;
      grid-template-columns: 3fr 5fr;
      gap: 20px;
    }
    
    .counter-wrapper {
      display: flex;
      justify-content: space-around;
      border-radius: 8px;
      background-color: #f7f8fd;
    }
  
    .counter-button {
      border: none;
      background-color: transparent;
    }
  
    .counter-button:hover {
      opacity: .6;
    }
    
    .amount {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 0;
      margin: 0;
    }
  
    .add-to-cart {
      background-color: #f2812c;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 12px;
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
  
  </style>