import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id: 1,
                firstname: "Lea",
                lastname: "Blanc",
                email: "leablanc@example.com",
                phone: "0711223344",
                location: "Mombasa",
                address: "123, Main Street"
            },
            1:{
                id: 2,
                firstname: "john",
                lastname: "Louis",
                email: "johnlouis@example.com",
                phone: "072211335",
                location: "Nakuru",
                address: "123, Main Street"
            },
            2:{
                id: 3,
                firstname: "Chris",
                lastname: "Martin",
                email: "martinchris@example.com",
                phone: "075588991",
                location: "Nairobi",
                address: "123, Main Street"
            },
            3:{
                id: 4,
                firstname: "Bella",
                lastname: "Blaire",
                email: "blairebella@example.com",
                phone: "079988771",
                location: "Mombasa",
                address: "123, Main Street"
            },
           4:{
                id: 5,
                firstname: "Emily",
                lastname: "Jude",
                email: "emilyjude@example.com",
                phone: "072345678",
                location: "Mombasa",
                address: "123, Main Street"
            },
             5:{
                id: 6,
                firstname: "Sarah",
                lastname: "Chills",
                email: "sarahc@example.com",
                phone: "073216547",
                location: "Mombasa",
                address: "123, Main Street"
            },
            6:{
                id: 7,
                firstname: "Anne",
                lastname: "Mitsy",
                email: "mitsy@example.com",
                phone: "075623412",
                location: "Mombasa",
                address: "123, Main Street"
            },

        }

        return{
            users
        }
   },
   actions:{

   },
   persist: true,
})