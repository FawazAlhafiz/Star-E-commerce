<template>
<div>
    <div class="p-4">
        <div v-if="productDoc">
            <h1 class="font-black font-grey-800 text-3xl">
                {{ productDoc.name }}
            </h1>
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