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
  apiKey: "AIzaSyAKZ3-kZVrTONUTfubfp__dwpliEF0FkfE",
  authDomain: "vue-e-commerce-72baf.firebaseapp.com",
  projectId: "vue-e-commerce-72baf",
  storageBucket: "vue-e-commerce-72baf.appspot.com",
  messagingSenderId: "836233888029",
  appId: "1:836233888029:web:2e2a47de15ea9ca5bae1f4",
  
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
