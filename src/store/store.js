import {
    createStore
} from 'vuex'

export const store = createStore({
    state() {
        return {
            productName: "Sneaker Company",
            productTitle: "Fall Limited Edition Sneakers",
            productDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.`,
            discount: 50,
        }
    }
})