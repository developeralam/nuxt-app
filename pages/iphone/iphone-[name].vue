<template>
    <div class="flex justify-center mt-20">
        <div class="grid grid-cols-2 gap-4">
            <div>
                
                <img :src="`/images/iphone-${route.params.name}.jpg`" alt="">
            </div>
            <div>
                <h1>Iphone {{ $route.params.name }}</h1>
                <button @click="addToCart" class="bg-indigo-600">
                    <span v-if="isInCart()">Remove From Cart</span>
                    <span v-else>Add To Cart</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup reactive>
const route = useRoute()
const cart = useCart()
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Iphone ${route.params.name}` : 'Nuxt App';
    }
})
const fullname = computed(() => {
    return `iphone-${route.params.name}`
})
function isInCart() {
    return !!cart.value.find((ct) => ct.name == fullname.value)
}
function addToCart() {
    if (!isInCart()) {
        cart.value.push({
            name: fullname
        })
    } else {
        cart.value = cart.value.filter((ct) => ct.name != fullname.value)
    }
}

</script>