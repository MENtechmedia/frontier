<template>

        <div @click="goBack()" class="cursor-pointer flex items-center">
            <div style="width: 25px; height: 25px;"
                 class=" flex items-center justify-center rounded-full inline-block bg-white">
                <i class="material-icons text-minsk-lighter">
                    keyboard_arrow_left
                </i>
            </div>
            <p class="inline-block ml-3 text-white"> Back </p>
        </div>

</template>

<script>
    export default {
        props: ['linkTo'],
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }


</script>