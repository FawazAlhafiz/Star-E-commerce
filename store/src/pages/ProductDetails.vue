<template>
<div>
    <div class="p-4">
        <div v-if="productDoc">
            <h1 class="font-black text-3xl">
                {{ productDoc.name }}
            </h1>

            <div class="sm:flex sm:gap-2">
                <!-- Image Carousel -->
                <div class="flex flex-col w-fit gap-3">
                    <div :class='[ 
                            "p-1 border-2 rounded cursor-pointer border-gray-800/25 hover:border-gray-800",
                            currenPreviewImageUrl === image.image_url ? "border-gray-800/90": "" 
                        ]'
                        v-for="image in productDoc.images" :key="image.image_url"
                        @click="currenPreviewImageUrl = image.image_url"
                    >
                        <img class="h-16" :src="image.image_url" alt="Product Image Thumbnail"/>
                    </div>
                </div>

                <!-- Current Image Preview -->
                <img :src="currenPreviewImageUrl" alt="Product Preview Image" class="sm:max-w-lg rounded border-2 border-gray-800/25" />
            </div>
        
        </div>
    </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { createDocumentResource } from 'frappe-ui';

const route = useRoute();
const productName = route.params.name;

const productResource = createDocumentResource({
    doctype: 'Product',
    name: productName,
    auto: true,
    onSuccess(doc) {
        if (doc && doc.preview_image) {
            currenPreviewImageUrl.value = doc.preview_image;
        }
    },
});

const productDoc = computed(() => productResource.doc || {});

const currenPreviewImageUrl = ref('');

</script>