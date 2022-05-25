<template>
    <div
        class="m-auto max-w-2xl bg-white px-4 py-10 dark:bg-gray-800 sm:rounded sm:px-8 sm:shadow"
    >
        <!-- Fetch and display the Markdown document from current path -->
        <ContentDoc class="prose prose-gray max-w-none dark:prose-invert">
            <!-- Slot if document is not found -->
            <template #not-found>
                <h1 class="text-2xl">Page not found</h1>
            </template>
        </ContentDoc>
    </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
    @apply no-underline;
    &:hover {
        @apply border-b border-neutral-600 dark:border-neutral-300;
    }
}
</style>
