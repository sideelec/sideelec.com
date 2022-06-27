<template>
    <div class="sticky top-0 border-b border-gray-200 bg-white">
        <Popover class="relative" v-slot="{ close }">
            <div
                class="custom-container flex items-center justify-between px-4 py-3"
            >
                <div class="flex items-center space-x-6">
                    <div class="flex items-center space-x-2">
                        <img class="h-10" src="/logo.png" />
                        <span class="text-2xl font-bold text-primary-500"
                            >SIDEELEC</span
                        >
                    </div>
                    <div class="hidden items-center space-x-4 md:flex">
                        <NuxtLink
                            v-for="{ href, name } in links"
                            :to="href"
                            class="font-medium text-gray-500 transition-colors hover:text-gray-600"
                            >{{ name }}</NuxtLink
                        >
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <NuxtLink to="/contact">
                        <Button size="small">CONTACT</Button>
                    </NuxtLink>
                    <PopoverButton
                        class="inline-flex items-center justify-center rounded-lg bg-gray-200 p-1.5 text-gray-800 transition-all hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
                    >
                        <span class="sr-only">Open menu</span>
                        <MenuIcon class="h-5 w-5" aria-hidden="true" />
                    </PopoverButton>
                </div>
            </div>
            <transition
                enter-active-class="duration-200 ease-out"
                enter-from-class="scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="duration-100 ease-in"
                leave-from-class="scale-100 opacity-100"
                leave-to-class="scale-95 opacity-0"
            >
                <PopoverPanel
                    focus
                    class="fixed inset-0 z-50 flex origin-center transform items-center justify-center bg-white p-4 transition md:hidden"
                >
                    <PopoverButton
                        class="absolute top-4 right-4 inline-flex items-center justify-center rounded-md bg-gray-200 p-1.5 text-gray-800 transition-all hover:bg-gray-300 focus:ring-2 focus:ring-primary-500"
                    >
                        <span class="sr-only">Close menu</span>
                        <XIcon class="h-5 w-5" aria-hidden="true" />
                    </PopoverButton>
                    <div
                        class="flex flex-col items-center justify-center space-y-6 text-xl"
                    >
                        <NuxtLink
                            v-for="{ href, name } in links"
                            :to="href"
                            @click.native="() => close()"
                            class="animated-underline relative inline-flex items-center space-x-1 font-medium text-gray-500"
                            :class="{
                                'bg-gradient text-gradient font-bold':
                                    href === '/'
                                        ? $route.path === '/'
                                        : $route.path.startsWith(href),
                            }"
                        >
                            <span>{{ name }}</span>
                        </NuxtLink>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </div>
</template>

<script setup lang="ts">
import { PopoverButton, PopoverPanel, Popover } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const links: { name: string; href: string }[] = [
    {
        name: "Accueil",
        href: "/",
    },
    {
        name: "Solutions",
        href: "/solutions",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "L'entreprise",
        href: "/l-entreprise",
    },
    {
        name: "Nouveautés",
        href: "/nouveautes",
    },
];
</script>
