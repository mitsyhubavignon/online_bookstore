import { defineStore } from 'pinia'
export const useWishlistStore = defineStore('wishlist',{
    state: () => ({
        wishlist: []
    }),
    actions: {
        addToWishlist (book) {
            const exists = this.wishlist.find(
                item => item.id === book.id
            )
            if (!exists) {
                thi.swishlist.push(book)
            }
        },
        removeFromWishlist(id) {
            this.wishlist = this.wishlist.filter(
                item => item.id !== id
            )
        }
    }
})