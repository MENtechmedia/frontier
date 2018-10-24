<template>
    <div class="dropdown__select--option-container">
        <div class="dropdown__select--option hover:shadow-md rounded-lg">
            <slot></slot>
        </div>
    </div>

</template>

<style lang="scss">
    .dropdown__select--option-container {
        width: 100%;
        height: 40px;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;


        .dropdown__select--option {
            width: 100%;
            position: absolute;
            transition: all 0.2s;
            padding-top: 10px;
            padding-bottom: 10px;
            background: white;
        }

        &:hover .dropdown__select--option {
            cursor: pointer;
            transition: all 0.2s;
            z-index: 20;
            transform: scale(1.07, 1.07);
        }
    }
</style>

<script>
    export default {
        mounted() {
            console.log('mounted dropdown-select-option');
        }
    }
</script>