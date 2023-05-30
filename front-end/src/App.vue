<template>
<Navbar :user="user" />
<div class="page-wrap">
<router-view :user="user"></router-view>
</div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
   },
   data() {
    return {
      user: null,
    }
   },
   created() {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
    this.user = user;
    });

   }
}
</script>


