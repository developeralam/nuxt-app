<template>
<div class="nav bg-purple-700 flex justify-between py-2 px-2">
    <div class="flex">
        <NuxtLink to="/" class="text-white pr-4">Home</NuxtLink>
        <NuxtLink to="/iphone" class="text-white pr-4">Iphone</NuxtLink>
        <NuxtLink to="/about" class="text-white pr-4">About</NuxtLink>
        <p class="text-white pl-4">Cart ({{ cart.length }})</p>
        <p class="text-white pl-4">Total Route Visited: {{ pageVisitCount}}</p>
    </div>
    <div class="flex">
        <div v-if="auth.isAuthenticated">
            <NuxtLink to="/profile" class="text-white pl-4">Profile</NuxtLink>
            <button @click="logout" class="text-white pl-4">Logout</button>
        </div>
        <NuxtLink v-else to="/login" class="text-white pl-4">Login</NuxtLink>
        
    </div>
</div>
</template>
<script setup>
const cart = useCart()
const auth = useAuth()
const pageVisitCount = usePageVisitCount();
function logout() {
    auth.value.isAuthenticated = false;
}
</script>