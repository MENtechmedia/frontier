<template>
    <dropdown-select>
        <p slot="dropdown-text" class="text-white font-bold"> briqchain.com</p>
        <dropdown-select-option key="mentechmedia">
            <div class="flex items-center justify-center">
                <div class="w-1/3 text-center px-2 flex items-center justify-center overflow-hidden">
                    <img style="width: 40px" class="inline-block mr-2" src="/images/logo-men.webp"/>
                </div>
                <div class="w-2/3">
                    <p class="inline-block">mentechmedia.nl</p>
                </div>
            </div>
        </dropdown-select-option>

        <dropdown-select-option key="briqchain">
            <div class="flex items-center justify-center">
                <div class="w-1/3 text-center px-2 flex items-center justify-center overflow-hidden">
                    <img style="width: 40px" class="inline-block mr-2" src="/images/Logo-dark.png"/>
                </div>
                <div class="w-2/3">
                    <p class="inline-block">briqchain.com</p>
                </div>
            </div>
        </dropdown-select-option>

    </dropdown-select>
</template>

<script>

    import DropdownSelect from '../DropdownSelect';
    import DropdownSelectOption from '../DropdownSelectOption';

    export default {
        components: {
            DropdownSelect,
            DropdownSelectOption,
        }
    }
</script>