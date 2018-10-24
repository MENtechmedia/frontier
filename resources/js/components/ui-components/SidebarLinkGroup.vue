<template>
    <div class="mb-8">
        <!--users are forced to set a title for the link group-->
        <p class="uppercase font-bold text-snuff mb-4"> {{ title }} </p>

        <!-- all sidebar links are passed through the slot -->
        <slot></slot>

    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>