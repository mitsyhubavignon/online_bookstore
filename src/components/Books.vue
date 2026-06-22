<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart';
import {useWishlistStore} from '../stores/wishlist'

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books
const wishlistStore = useWishlistStore ()
// wishlistStore.addToWishlist(book)

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}
//cart
const cartStore = useCartStore()
const quantity = ref(1)
function buy (book){
    book.quantity = quantity.value
      cartStore.updateCart(book)
}

      </script>
<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 text-center">
                    Browse Books
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="book in books">
                <v-card class="h-100 d-flex-column" width="250">
                    <v-img :src="book.image" height="200px" class=" mt-4"></v-img>
                    <v-card-title>{{ book.name }}</v-card-title>
                    <v-card-subtitle>{{ book.price }}</v-card-subtitle>
                    <v-card-text>{{book.description }}</v-card-text>
                    <v-card-text>by {{ book.author }} </v-card-text>
                
                <v-card_action>
                  <V-btn color="primary" variant="elevated" @click="buy(book)">Add to cart</V-btn>  
                  <v-btn color="primary"  variant="elevated" @click="view(book)">View Book</v-btn>
                  <v-btn color="primary" variant="elevated" @click="addToWishlist(book)">Add to wishlist</v-btn>
                </v-card_action>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </template>