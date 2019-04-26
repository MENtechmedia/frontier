<template>
    <div class="input-group color-picker-component">
<!--        <input type="text"-->
<!--               class="mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block inline-block"-->
<!--               title="Color Picker"-->
<!--               :value="colorString"-->
<!--               @focus="showPicker(item)"-->
<!--               @change="updateFromInput"-->
<!--               autocomplete="new-password"-->
<!--        />-->
        <span class="input-group-addon color-picker-container">
            <span class="current-color inline-block cursor-pointer ml-4"
                  :style="'background-color: ' + colorString"
                  @click="showPicker(item)"
            ></span>
                <material-picker :value="colors"
                                 @input="updateFromPicker"
                                 v-if="picker === 'material' && displayPicker"></material-picker>

                <compact-picker :value="colors"
                                @input="updateFromPicker"
                                v-if="picker === 'compact' && displayPicker"></compact-picker>

                <swatches-picker :value="colors"
                                 @input="updateFromPicker"
                                 v-if="picker === 'swatches' && displayPicker"></swatches-picker>

                <slider-picker :value="colors"
                               @input="updateFromPicker"
                               v-if="picker === 'slider' && displayPicker"></slider-picker>

                <sketch-picker :value="colors"
                               @input="updateFromPicker"
                               v-if="picker === 'sketch' && displayPicker"></sketch-picker>

                <chrome-picker :value="colors"
                               @input="updateFromPicker"
                               v-if="picker === 'chrome' && displayPicker"></chrome-picker>

                <photoshop-picker :value="colors"
                                  @input="updateFromPicker"
                                  v-if="picker === 'photoshop' && displayPicker"></photoshop-picker>

        </span>
        <span v-show="displayPicker">
            <p @click="closePicker" class="text-periwinkle-gray-dark cursor-pointer" style="position: relative; bottom: 25px; left: 10px; z-index: 100;">X</p>
        </span>
    </div>
</template>
<style lang="scss">
    .color-picker-component{
        .current-color {
            width: 16px;
            height: 16px;
            background-color: #000;
        }

        .vue-color__chrome {
            position: absolute;
            left: 0;
            top: calc(100% + 10px);
            z-index: 100;
        }
    }
</style>
<script>
    /**
     * Color Picker.
     */

    // Import dependencies.
    import {Material} from 'vue-color';
    import {Compact} from 'vue-color';
    import {Swatches} from 'vue-color';
    import {Slider} from 'vue-color';
    import {Sketch} from 'vue-color';
    import {Chrome} from 'vue-color';
    import {Photoshop} from 'vue-color';

    export default {
        components: {
            'material-picker': Material,
            'compact-picker': Compact,
            'swatches-picker': Swatches,
            'slider-picker': Slider,
            'sketch-picker': Sketch,
            'chrome-picker': Chrome,
            'photoshop-picker': Photoshop,
        },
        name: 'ColorPicker',
        props: {
            value: null,
            picker: {
                type: String,
                required: true,
            },
            item: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                colors: {},
                displayPicker: false,
            }
        },
        computed: {
            colorType() {
                return this.item.colorType;
            },

            colorString() {
                if (!this.colors[this.colorType]) {
                    return '';
                }

                if (this.item.colorType === 'hex') {
                    return this.colors.hex;
                }

                return this.colorType + '(' + Object.values(this.colors[this.colorType]).join(',') + ')';
            },
        },
        methods: {
            showPicker(item) {
                if (item.color) {
                    this.colors = item.color;
                }

                this.displayPicker = true;
            },

            closePicker() {
                this.displayPicker = false;
            },

            updateFromPicker(value) {
                this.colors = value;
                this.$emit('input', value.hex);
                console.log('changed by picker');
            },

            updateFromInput(event) {
                this.colors.hex = event.target.value;
                this.$emit('input', event.target.value);
                console.log('changed by input');
            },
        },
    }
</script>


