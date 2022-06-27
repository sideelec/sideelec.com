<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
        <div
            class="relative hidden bg-cover bg-center md:block"
            :style="{ backgroundImage: `url('${contact.image}')` }"
        >
            <div class="bg-gradient absolute inset-0 z-0 opacity-60"></div>
        </div>
        <div class="bg-gray-900 px-6 py-16 md:col-span-2 lg:col-span-1">
            <div class="max-w-xl">
                <div class="space-y-2">
                    <div class="bg-gradient text-gradient font-medium">
                        {{ contact.subtitle }}
                    </div>
                    <div
                        class="text-4xl font-bold uppercase text-white sm:text-5xl"
                    >
                        {{ contact.title }}
                    </div>
                    <div class="text-gray-400">
                        {{ contact.description }}
                    </div>
                </div>
                <NuxtLink to="/contact" class="mt-6 inline-block"
                    ><Button class="uppercase">{{
                        contact.contact
                    }}</Button></NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { contact } from "~/assets/content/global.json";
</script>
