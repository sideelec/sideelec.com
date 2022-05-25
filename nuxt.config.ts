import { defineNuxtConfig } from "nuxt";
import vueJsx from "@vitejs/plugin-vue-jsx";

const config = {
    domain: process.env.DOMAIN,
    url: `https://${process.env.DOMAIN}`,
};

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [],
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
                defer: true,
            },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
        ],
    },
    css: [],
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "vue-plausible",
    ],
    build: {
        transpile: ["@headlessui/vue", "vue-plausible"],
    },
    vite: {
        plugins: [vueJsx({})],
    },
    router: {
        trailingSlash: true,
    },
    publicRuntimeConfig: {
        domain: config.domain,
        url: config.url,
        plausible: {
            domain: config.domain,
        },
    },
    content: {
        highlight: {
            theme: "one-dark-pro",
        },
    },
    tailwindcss: {
        viewer: false,
    },
});
