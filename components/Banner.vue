<template>
    <NuxtLink
        :to="banner.link"
        target="_blank"
        class="bg-gradient py-2 text-left text-sm text-gray-50 transition-all duration-300 hover:opacity-80 sm:text-base"
        tabindex="0"
    >
        <div class="custom-container space-x-2 px-4">
            <span class="font-semibold">{{ banner.prefix }}</span>
            <span>{{ banner.content }}</span>
            <span class="font-semibold">En savoir plus</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { banner } from "~/assets/content/global.json";
</script>
