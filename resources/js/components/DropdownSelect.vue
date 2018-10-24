<template>
    <div class="">
        <div @click="toggle" class="flex  items-center inline-block cursor-pointer">
            <slot name="dropdown-text"></slot>

            <span :class="{'dropdown__select--toggle-down': show}"
                  class="dropdown__select--toggle-rested px-2 text-white flex justify-center items-center mt-1">
                <i class="material-icons">keyboard_arrow_right</i>
            </span>
        </div>

        <transition name="slide-fade">
            <div v-show="show" class="dropdown__select--select rounded-lg shadow-md bg-white mt-3 relative pb-5">

                <div class="bg-minsk-light px-3 py-2 rounded-t mb-5 w-full">
                    <p class="text-xs text-center text-white py-2 font-bold"> Select a different website </p>
                </div>


                <slot></slot>


            </div>
        </transition>
    </div>
</template>

<style lang="scss">
    .dropdown__select--select {
        width: 100%;
        position: absolute;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dropdown__select--toggle-down {
        transform: rotate(90deg);
        transition: all .4s;
    }

    .dropdown__select--toggle-rested {

        transition: all .4s;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

<script>
    export default {

        data() {
            return {
                show: false,
            }
        },

        mounted() {
            console.log('mounted dropdown-select-option');
        },

        methods: {
            toggle() {
                this.show = !this.show;
            }
        }
    }
</script>