import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
    const books = {
        0:{
            id:1,
            image:"/book1.jpg",
            name: "Ugly Love",
            price: 1800,
            description: "a heart-wrenching, spicy romance about Tate Collins and Miles Archer",
            author: "Colleen Hoover ",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"Romance",
            rating:4
        },
        1:{ 
            id:2,
            image:"/book2.jpg",
            name: "The Love Hypothesis",
            price: 2000,
            description: "a STEM-focused contemporary romance.",
            author: "Ali Hazelwood",
            long_description: "Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre: "Romance",
            rating:5
    
        },
        2:{

            id:3,
            image:"book3.jpg",
            name: "If He Had Been With Me",
            price: 1700,
            description: " a viral YA romance and coming-of-age story that explores love, regret, and the agonizing question of what ifs ",
            author: "Laura Nowlin",
            long_description: "Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"Drama/Tragedy",
            rating:5
    
        },
        3:{
            id:4,
            image:"book4.jpg",
            name: "The Hate U Give",
            price: 1750,
            description: "A teen witnesses a police shooting and finds her voice while navigating identity and injustice",
            author: "Angie Thomas",
            long_description: "Things We Leave Unfinished — Georgia Stanton returns to her grandmother’s estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"Fiction",
            rating:4.5,
        },
          4:{
            id:5,
            image:"book5.jpg",
            name: "The Fault In Our Stars",
            price: 1400,
            description: "Two teens with camcer fall in love and face life,love and loss together ",
            author: "John Green",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"Romance",
            rating:5,
    
        },
           5:{
            id:6,
            image:"book6.jpg",
            name: "Check & Mate",
            price: 1200,
            description: "A former chess prodigy returns to the game and clashes-and connect-with a rival ",
            author: "Ali Hazelwood",
            long_description: "Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre: "romance",
            rating:5,
        },
        6:{
            id:7,
            image:"book7.jpg",
            name: "Problematic Summer Romance",
            price: 1800,
            description: "A summer romance anout an unexpected,complicated relationship that develops while the main character is dealing with personal and emotional challenges ",
            author: "Ali Hazelwood",
            long_description:"",
            genre:"romance",
            rating:4.5,
        },
        7:{ 
            id:8,
            image:"book8.jpg",
            name: "Mate",
            price: 1600,
            description: "A paranormal romance involving forbidden attraction and dangerous supernatural politics",
            author: "Ali Hazelwood",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"romance",
            rating:4,
    
        },
    
    8:{     id:9,
            image:"book9.jpg",
            name: "It Ends With Us",
            price: 1650,
            description: "A young woman falls in love while confronting a painful cycle of abuse in her relationship",
            author: "Colleen Hoover",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"romance",
            rating:4.5,
        },
        9:{ 
            id:10,
            image:"book10.jpg",
            name: "Never Never",
            price: 1150,
            description: "Two teens wake up with no memories and must uncover the truth about their relationship",
            author: "Colleen Hoover",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"mystery",
            rating:3,
        },
    
    10:{
            id:11,
            image:"book11.jpg",
            name: "Things We Never Got Over",
            price: 1400,
            description: "A runaway bride starts over in a small town and finds unexpected love and family ",
            author: "Lucy Score",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"romance",
            rating:4,
        },
        11:{
            id:12,
            image:"book12.jpg",
            name: "13 Reasons Why",
            price: 1100,
            description: "A teen receives tapes explaining the reasons behind a classmate's suicide ",
            author: "Angie Thomas",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"young adult",
            rating:4.5,
        },
        12:{
            id:13,
            image:"book13.jpg",
            name: "Numbers",
            price: 1090,
            description: "A girl can see death dates above people's heads and struggles with the burden of knowing the future ",
            author: "Rachel Ward",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"dystopian",
            rating:3,
        },
        13:{ 
            id:14,
            image:"book14.jpg",
            name: "The Things We leave Unfinished",
            price: 1600,
            description: "A dual-timeline romance about love,sacrifice,and unfinished stories across generations",
            author: "Rebecca Yarros",
            long_description:"Things We Leave Unfinished — Georgia Stanton returns to her grandmother's estate after a divorce to restart her life. She meets Noah Harrison, a bestselling author hired to complete her grandmother’s unfinished manuscript. They don’t get along at first, but are forced to work together. As they collaborate, they uncover a WWII love story written by Georgia’s grandmother. The story follows Scarlett Stanton and a fighter pilot named Jameson. Their romance is intense but shaped by war and sacrifice. In the present, Georgia and Noah slowly grow closer while reading Scarlett’s story. Both timelines show love, heartbreak, and emotional healing. Georgia learns to face her past and open up again. The book connects the idea that some love stories are never truly finished.",
            genre:"romance",
            rating:5,
        },
    }
    
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})