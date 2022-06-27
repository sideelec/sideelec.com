<template>
    <div class="mt-auto">
        <Contact v-if="$route.fullPath !== '/contact'" />
        <footer class="border-t border-gray-200 bg-gray-50">
            <div
                class="custom-container flex flex-col-reverse items-center justify-between p-4 md:flex-row"
            >
                <div class="mt-2 text-sm text-gray-500 md:mt-0">
                    &copy; {{ new Date().getFullYear() }} SIDEELEC. Tous droits
                    réservés. Site réalisé par
                    <NuxtLink
                        to="https://florian-lefebvre.dev"
                        target="_blank"
                        class="font-semibold text-primary-500 underline"
                        >Florian LEFEBVRE</NuxtLink
                    >.
                </div>
                <div class="flex items-center space-x-4">
                    <NuxtLink
                        v-for="{ name, href } in legalLinks"
                        :to="href"
                        class="text-sm text-gray-500 transition-colors hover:text-gray-600"
                        >{{ name }}</NuxtLink
                    >
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const legalLinks: { name: string; href: string }[] = [
    {
        name: "Mentions légales",
        href: "/legal/mentions-legales",
    },
    {
        name: "Politique de confidentialité",
        href: "/legal/politique-de-confidentialite",
    },
];
</script>
