<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
        <div
            class="relative hidden bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center md:block"
        >
            <div class="bg-gradient absolute inset-0 z-0 opacity-60"></div>
        </div>
        <div class="bg-gray-900 px-6 py-16 md:col-span-2 lg:col-span-1">
            <div class="max-w-xl">
                <div class="space-y-2">
                    <div class="bg-gradient text-gradient font-medium">
                        Une question ? Quelque chose ?
                    </div>
                    <div
                        class="text-4xl font-bold uppercase text-white sm:text-5xl"
                    >
                        Nous sommes à votre disposition
                    </div>
                    <div class="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eget lacus ullamcorper, euismod felis nec,
                        aliquet dolor. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nullam eget lacus ullamcorper, euismod
                        felis nec, aliquet dolor.
                    </div>
                </div>
                <NuxtLink to="/contact" class="mt-6 inline-block"
                    ><Button>NOUS CONTACTER</Button></NuxtLink
                >
            </div>
        </div>
    </div>
</template>
