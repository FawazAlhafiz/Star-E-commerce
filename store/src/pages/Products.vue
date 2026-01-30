<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">
      ✨ Products 👌
    </h1>
    <hr>
    <h2 class="my-3 text-lg font-semibold">Our Products</h2>

    <div v-if="productslist" class="mt-4 grid grid-cols-4 gap-3">
      <!-- Products List -->
      <ProductCard v-for="product in productslist" :key="product.name" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { createListResource } from 'frappe-ui';
import ProductCard from '@/components/ProductCard.vue';

const productsResource = createListResource({
  doctype: 'Product',
  fields: ['name', 'preview_image', 'price', 'currency'],
  auto: true,
});

// store products in computed object
const productslist = computed(() => productsResource.list.data || []);
</script>
