<template>
    <div class="page shadow-md">
        <base-header></base-header>

        <div class="container mx-auto flex mt-24">

            <div class="w-1/5 h-12">
                <dashboard-menu></dashboard-menu>
            </div>

            <!--Document-->
            <div class="w-4/5 ">
                <content-section>
                    <div>
                        <div class="flex">

                            <div class="w-full">
                                <h1 class=" text-minsk font-black mb-10"> Subscription </h1>

                                <div class="mb-6">
                                    <div class="w-2/3">
                                        You currently have a <i class="text-saffron"><strong>free</strong></i> subscription.
                                    </div>
                                </div>

                                <div>
                                    <div class="w-2/3 mb-2">
                                        Upgrade to paid subscription. We will charge you € 25,- on a monthly basis.
                                    </div>
                                    <div class="w-1/3">
                                        <toggle-input v-model="paidSubscription"></toggle-input>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <div class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="update()">
                                        Update
                                    </div>
                                </div>

                                <div>
                                    <div class="w-2/3">
                                        <i>We believe that Frontier can contribute so much to your company, we offer the option to cancel your Frontier subscription
                                        at any given time. From that moment onward, we will not charge you anymore.
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </content-section>
            </div>

        </div>

    </div>
</template>

<script>
    import BaseHeader from '../BaseHeader.vue';
    import ContentSection from '../../ContentSection.vue';
    import ToggleInput from '../../ui-components/inputs/ToggleInput';
    import DashboardMenu from '../DashboardMenu';

    export default {
        components: {
            BaseHeader,
            ContentSection,
            ToggleInput,
            DashboardMenu
        },

        data() {
            return {
                paidSubscription: false,
            }
        },

        mounted() {
            this.all();
        },

        methods: {
            update() {

            },

            all() {

            },
        }
    }
</script>