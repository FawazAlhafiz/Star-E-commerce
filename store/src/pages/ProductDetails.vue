<template>
    <div>
        <h1>Product Details</h1>
        <p>Product Name: {{ productName }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { createDocumentResource } from 'frappe-ui';

const route = useRoute();
const productName = route.params.name;

const productResource = createDocumentResource({
    doctype: 'Product',
    name: productName,
    auto: true,
    onSuccess(data) {
        console.log('Product data loaded:', data);
    },
    onError(error) {
        console.error('Error loading product data:', error);
    }
});

</script>