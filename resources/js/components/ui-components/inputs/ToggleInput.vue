<template>
    <span class="toggle-wrapper" role="checkbox" tabindex="0"
        :aria-checked="value.toString()"
        @click="toggle"
        @keydown.space.prevent="toggle"
    >
      <span class="toggle-background" :style="backgroundStyles"></span>
      <span class="toggle-indicator" :style="indicatorStyles"></span>
    </span>
</template>
<style scoped>
    .toggle-wrapper {
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 2rem;
        width: 4rem;
        border-radius: 9999px;
    }
    .toggle-wrapper:focus {
        outline: 0;
        box-shadow: 0 0 0 4px rgba(52,144,220,.5);
    }

    .toggle-background {
        display: inline-block;
        border-radius: 9999px;
        height: 100%;
        width: 100%;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        transition: background-color .2s ease;
    }

    .toggle-indicator {
        position: absolute;
        top: .25rem;
        left: .25rem;
        height: 1.5rem;
        width: 1.5rem;
        background-color: #fff;
        border-radius: 9999px;
        box-shadow:  0 2px 4px rgba(0,0,0,0.1);
        transition: transform .2s ease;
    }
</style>
<script>
    export default {
        props: ['value'],

        data() {
            return {

            }
        },

        computed: {
            backgroundStyles() {
                return {
                    backgroundColor: this.value ? '#3490dc' : '#dae1e7'
                }
            },
            indicatorStyles() {
                return { transform: this.value ? 'translateX(2rem)' : 'translateX(0)' }
            }
        },

        methods: {
            toggle() {
                this.$emit('input', !this.value);
            }
        },
    }
</script>