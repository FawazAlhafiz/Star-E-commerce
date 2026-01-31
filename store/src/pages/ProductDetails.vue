<template>
    <div>
        <h1>Product Details</h1>
        <p>Product Name: {{ name }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { name } = route.params;

</script>