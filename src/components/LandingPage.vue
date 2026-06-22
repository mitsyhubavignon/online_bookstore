<script setup>
</script>
<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/carousel-1.jpg" cover ></v-carousel-item>
                   <v-carousel-item src="/carousel-2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-3.jpg"cover></v-carousel-item>
                    <v-carousel-item src="/carousel-4.jpg"cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container >
    <!-- About Us -->
     <v-container class="bg-secondary" max-width="100%">
        <v-row>
            <v-col class>
                <div class="text-display-medium mb-12">Welcome to Soma!</div>
<div class="text-title fint-weight-light text medium-emphasis mb-8 text-black ">This is your ultimate happy place.</div>
                <div class="text-title fint-weight-light text medium-emphasis mb-8 text-black">A perfect space designed to help book lovers discover new ideas, explore different genres, and connect with fellow readers across the globe. Whether you are searching for your next great fiction escape, looking to expand your knowledge with in-depth non-fiction, or simply eager to share your favorite literary reviews and thoughts, we are thrilled to have you join us on this exciting literary journey.</div>
            </v-col>
        </v-row>
     </v-container>
     <!-- Our Bestsellers -->
      <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-car>
                    <v-img src="/book1.jpg"cover></v-img>
                    <v-card-title>Ugly Love </v-card-title>
                    <v-card-subtitle>by Colleen Hoover</v-card-subtitle>
                    <V-btn to="/cart">Add to Cart</V-btn>
                </v-car>
            </v-col>
            <v-col md="3">
                <v-car>
                    <v-img src="/book2.jpg"cover></v-img>
                    <v-card-title>The Love Hypothesis</v-card-title>
                    <v-card-subtitle>by Ali Hazelwood</v-card-subtitle>
                    <V-btn to="/cart">Add to Cart</V-btn>
                </v-car>
            </v-col>
           <v-col md="3">
                <v-car>
                    <v-img src="/book3.jpg"cover></v-img>
                    <v-card-title>If He Had Been With ME</v-card-title>
                    <v-card-subtitle>by Laura Nowlin</v-card-subtitle>
                    <V-btn to="/cart">Add to Cart</V-btn>
                </v-car>
            </v-col> 
                <v-col md="3">
                <v-car>
                    <v-img src="/book4.jpg"cover></v-img>
                    <v-card-title> THE HATE U Give </v-card-title>
                    <v-card-subtitle>by Angie Thomas</v-card-subtitle>
                    <V-btn to="/cart">Add to cart</V-btn>
                </v-car>
            </v-col> 
        </v-row>
      </v-container class="bg-primary"max-width>
      <!-- Footer -->
        <!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Elite Readers Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@EliteReadersonline.com</p>
                <p>Phone: 254717342789</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
    </template>

<v></v>