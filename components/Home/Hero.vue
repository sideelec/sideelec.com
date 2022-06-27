<template>
    <div class="bg-gradient-to-tr from-gray-900 to-gray-800 py-24">
        <div class="custom-container flex items-center justify-between px-4">
            <div>
                <h1 class="text-6xl font-bold uppercase text-white">
                    {{ hero.title }}
                </h1>
                <p class="mt-4 max-w-lg text-lg text-gray-400">
                    {{ hero.description }}
                </p>
                <div class="mt-8 flex items-center space-x-4">
                    <NuxtLink to="/#content"
                        ><Button>{{ hero.cta.knowMore }}</Button></NuxtLink
                    >
                    <NuxtLink to="/contact"
                        ><Button type="gray">{{
                            hero.cta.contact
                        }}</Button></NuxtLink
                    >
                </div>
            </div>
            <div>IMAGE</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { hero } from "~/assets/content/home.json";
</script>
