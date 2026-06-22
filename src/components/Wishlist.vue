<script setup>
import { useWishlistStore} from '../stores/wishlist'
const wishlistStore = useWishlistStore ()
const wishlist = wishlistStore.wishlist

const removeItem = (id) => {
    wishlistStore.removeFromWishlist(id)
}
console.log(wishlistStore)
</script>

<template>
    <v-container>
     <h1>Wishlist</h1>
     <div v-if="wishlistStore.wishlist.length === 0">
       No books in your wishlist yet.
     </div>
     <v-row>
        <v-col
        v-for="book in wishlistStore.wishlist"
        :key="book.id"
        cols="12"
        md="4"
        >
        <v-card>  

            <v-img 
            :scr="book.image"
            height="250"
            cover
            />
            <v-card_title>{{  book.title }}</v-card_title>
            <v-card-text>{{ book.author }}</v-card-text>
            <v-card-actions>
                <v-btn 
                color="red"
                @click="removeItem(book.id)"
                >
                Remove
                </v-btn>
            </v-card-actions>
        </v-card>
            
        </v-col>
     </v-row>
    </v-container>
    
    </template>
