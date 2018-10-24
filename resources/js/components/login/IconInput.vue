<template>
    <div class="login__input flex mb-6">
        <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
            {{ icon }}
        </i>
        <input :type="type" class="w-full px-6 py-2 appearance-none rounded focus:outline-none  shadow-md text-black text-xs " :placeholder="placeholder" />
    </div>
</template>


<script>
    export default {
        props: ['placeholder', 'icon', 'type']
    }

</script>