<template>
    <button :class="classes"><slot /></button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonType = "primary" | "gray" | "white";
type ButtonSize = "small" | "medium";

const { type, size } = defineProps({
    type: {
        type: String as PropType<ButtonType>,
        default: "primary",
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: "medium",
    },
});

const typeClass = {
    primary:
        "bg-gradient text-white hover:from-primary-500 hover:to-primary-400",
    gray: "bg-gray-700 text-gray-100 hover:bg-gray-600",
    white: "bg-white text-gray-700 hover:bg-gray-50",
}[type];
const sizeClass = {
    small: "py-1 px-4",
    medium: "px-6 py-3",
}[size];

const classes: string[] = [
    "font-medium rounded-lg transition-all",
    typeClass,
    sizeClass,
];
</script>
