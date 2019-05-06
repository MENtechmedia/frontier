<template>
    <div>

        <input v-if="type === 'text' || type === 'number'"
                :type="type"
                class="w-full outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
               :class="errors.length > 0 ? 'border border-red' : ''"
               :placeholder="placeholder"
               :value="value"
               @blur="hideErrors"
               @click="update"
               @input="update"/>

        <textarea v-if="type === 'textarea'"
                  class="w-full outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                  :placeholder="placeholder"
                  @blur="hideErrors"
                  @click="update"
                  @input="update">
        </textarea>

        <div class="absolute bg-red-dark text-white rounded mt-2">
            <p class="py-2 px-2" v-for="error in errors">
                {{ error }}
            </p>
        </div>
    </div>

</template>
<script>
    import collect from 'collect.js';

    export default {
        props: [
            'inputError',
            'type',
            'placeholder',
            'value',
            'validationRules',
        ],

        data() {
            return {
                errors: [],
                validationRulesArray: [],
            }
        },

        mounted() {
            if(this.validationRules !== undefined) {
                this.validationRulesArray = this.validationRules.split("|");
            }
        },

        methods: {
            update(event) {
                let newValue = event.target.value;

                this.validateRules(newValue);

                this.$emit('input', newValue);
            },

            hideErrors() {
                this.errors = [];
            },

            validateRules(newValue) {
                if(this.validationRulesArray.length === 0)
                    return;

                this.errors = [];

                collect(this.validationRulesArray).each((validationRule) => {
                    if(validationRule.includes('required')) {
                        if(newValue == "") {
                            this.errors.push('Field is required!');
                        }
                    }

                    if(validationRule.includes('min:')) {
                        let minRule = validationRule.split(":");
                        if(newValue == "" || newValue.length < minRule[1]) {
                            this.errors.push('Field requires a minimum length of ' + minRule[1]  + '!');
                        }
                    }

                });

                if(this.errors.length === 0) {
                    this.$emit('validated', false);
                } else {
                    this.$emit('validated', true);
                }
            }
        },
    }
</script>