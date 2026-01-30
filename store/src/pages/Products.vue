<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">
      ✨ Products 👌
    </h1>
    <hr>
    <h2 class="my-3 text-lg font-semibold">Our Products</h2>

    <div v-if="productslist" class="mt-4 grid grid-cols-4 gap-3">
      <!-- Products List -->
      <a v-for="product in productslist" :key="product.name" href="#"
          class="shadow-md rounded-sm p-3 flex flex-col justify-between" >
        <div>
          <img :src="product.preview_image" alt="Product Image" class="max-w-[100%] aspect-square object-contain"/>
          <p class="text-gray-800 text-base">{{ product.name }}</p>
        </div>
        <span class="font-bold text-gray-900">{{ formatCurrency(product.price, product.currency) }}</span>
      </a>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { createListResource } from 'frappe-ui';
import { formatCurrency } from '@/utils.js';

const productsResource = createListResource({
  doctype: 'Product',
  fields: ['name', 'preview_image', 'price', 'currency'],
  auto: true,
});

// store products in computed object
const productslist = computed(() => productsResource.list.data || []);
</script>
