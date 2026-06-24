import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
             0:{
                id: 1,
                customer_id: 2,
                book_id: 4,
                quantity: 1,
                total_paid:1800,
                status: "processing",
                
            },
            1:{
                id: 2,
                customer_id: 9,
                book_id: 3,
                quantity: 3,
                total_paid:3500,
                status: "processing",
                
            },
            2:{
                id: 3,
                customer_id: 4,
                book_id: 1,
                quantity: 4,
                total_paid:4000,
                status: "fulfilled",
                
            },
            3:{
                id: 4,
                customer_id: 7,
                book_id: 6,
                quantity: 5,
                total_paid:2800,
                status: "processing",
                
            },
            4:{
                id: 5,
                customer_id: 5,
                book_id: 7,
                quantity: 1,
                total_paid:1800,
                status: "fulfilled",
                
            },
            5:{
                id: 6,
                customer_id: 8,
                book_id: 9,
                quantity: 2,
                total_paid:1400,
                status: "processing",
                
            },
            6:{
                id: 7,
                customer_id: 6,
                book_id: 3,
                quantity: 1,
                total_paid:2000,
                status: "processing",
                
            },
        }

        return{
            orders
        }
   },
   actions:{
       updateOrders(payload) {
           this.orders.push(payload)
       },
   },
   persist: true,
})