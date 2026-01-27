<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">
      ✨ Products 👌
    </h1>
    
    <div v-if="productsResource.data">
      <p v-for="product in productsResource.list.data" :key="product.name" class="text-gray-600">
        {{ product.name }} - {{ product.price }} {{ product.currency }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';
const productsResource = createListResource({
  doctype: 'Product',
  fields: ['name', 'preview_image', 'price', 'currency'],
  auto: true,
});

</script>
