import {
    createStore
} from 'vuex'

export const store = createStore({
    state() {
        return {
            items: [],
            src: "images/image-product-1-thumbnail.jpg",
            productName: "Sneaker Company",
            productTitle: "Fall Limited Edition Sneakers",
            productDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.`,
            discount: 50,
            amount: 1
        }
    },
    mutations: {
        incrementAmount(state) {
            if (state.amount < 99) {
                state.amount++
            }
        },
        decrementAmount(state) {
            if (state.amount > 0) {
                state.amount--
            }
        }
    }
})