<template>
    <div>

        <router-link :to="{ name: 'ProductDetailsPage', params: { name: product.name } }"
             class="shadow-md rounded-sm p-3 flex flex-col justify-between" >
           <div>
             <img :src="product.preview_image" alt="Product Image" class="max-w-[100%] aspect-square object-contain"/>
             <p class="text-gray-800 text-base">{{ product.name }}</p>
           </div>
           <span class="font-bold text-gray-900">{{ formatCurrency(product.price, product.currency) }}</span>
         </router-link>

    </div>
</template>

<script setup>
import { formatCurrency } from '@/utils.js';

const props = defineProps({
  product: Object
});
</script>