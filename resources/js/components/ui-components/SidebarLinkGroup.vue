<template>
    <div class="mb-8">
        <!--users are forced to set a title for the link group-->
        <p class="uppercase font-bold text-snuff mb-4"> {{ title }} </p>

        <!-- all sidebar links are passed through the slot -->
        <slot></slot>

        <router-link to="/dashboard" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2 mt-10">
            <i class="material-icons text-saffron mr-4">backspace</i>
            <span class="text-london-hue">
                    Back to dashboard
                </span>
        </router-link>

    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>