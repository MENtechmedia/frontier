<template>
    <div class="">
        <div class="flex items-center mb-4">
            <div @click="toggleRepeatable()" :class="{'bg-minsk': toggled }" class="p-2 transition-normal-in-out-quad cursor-pointer shadow-md inline-block rounded"></div>
            <span class="ml-6"> Repeatable</span>
        </div>

        <transition name="slide-fade">
            <div v-if="toggled" class="flex items-center w-full justify-between">

                <!--custom content goes here-->
                <slot></slot>

            </div>
        </transition>
    </div>
</template>

<script>


    export default {
        data() {

            return {
                toggled: false,
            }
        },

        methods: {
            toggleRepeatable() {
                this.toggled = !this.toggled;
            }
        }
    }
</script>