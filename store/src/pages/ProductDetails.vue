<template>
<div>
    <div class="p-4">
        <div v-if="productDoc">
            <h1 class="font-black text-3xl">
                {{ productDoc.name }}
            </h1>

            <div class="flex flex-col w-fit gap-3">
                <img v-for="image in productDoc.images" :key="image.image_url" :src="image.image_url" alt="Product Image Thumbnail" 
                class="h-16 border-2 border-gray-800/25 rounded cursor-pointer hover:border-gray-800"
                />
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { createDocumentResource } from 'frappe-ui';

const route = useRoute();
const productName = route.params.name;

const productResource = createDocumentResource({
    doctype: 'Product',
    name: productName,
    auto: true, 
});

const productDoc = computed(() => productResource.doc || {});

</script>