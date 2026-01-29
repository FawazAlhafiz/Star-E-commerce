<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">
      ✨ Products 👌
    </h1>
    
    <div v-if="productslist">
      <!-- Products List -->
      
      <div v-for="product in productslist" :key="product.name" class="text-gray-600">
        <img :src="product.preview_image" alt="Product Image" class="w-24 h-24"/>
        <p>{{ product.name }}</p>
        <span>Price: {{ formatCurrency(product.price, product.currency) }}</span>
      </div>

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
