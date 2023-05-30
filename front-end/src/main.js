import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCart from './pages/ShoppingCart.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetails from './pages/ProductDetails.vue'
import NotFoundPage from './pages/NotFoundPage.vue'


import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCw1_TAN9FGHQ8De6mpx1_1I-pzaBzS7Aw",
    authDomain: "fullstack-vue-2cf8a.firebaseapp.com",
    projectId: "fullstack-vue-2cf8a",
    storageBucket: "fullstack-vue-2cf8a.appspot.com",
    messagingSenderId: "45410002019",
    appId: "1:45410002019:web:ce0d6a98118799a56c4456"
  };

initializeApp(firebaseConfig);




createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCart,
    },{
        path: '/products',
        component: ProductsPage,
    },{
        path: '/products/:productId',
        component: ProductDetails,
    },{
        path: '/',
        redirect:'/products',
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }
]
}))
.mount('#app')
