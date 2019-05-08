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

                    <div v-if="settings != null">
                        <div class="flex">


                            <div class="w-full">
                                <h1 class=" text-minsk font-black mb-10"> Settings </h1>

                                <div>
                                    <div class="w-2/3">
                                        Email catcher active
                                    </div>
                                    <div class="w-1/3">
                                        <toggle-input class="mb-4" v-model="emailCatcherActive"></toggle-input>
                                    </div>
                                </div>
                                <div>
                                    <div class="w-2/3">
                                        Social proof active
                                    </div>
                                    <div class="w-1/3">
                                        <toggle-input class="mb-4" v-model="socialProofActive"></toggle-input>
                                    </div>
                                </div>

                                <div class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="update()">
                                    Update
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
                settings: null,
                browserPushActive: null,
                emailCatcherActive: null,
                emailCatcherInterval: null,
                referralToolActive: null,
                saveEmailCatcherToSocialProof: null,
                socialProofActive: null,
            }
        },

        mounted() {
            this.all();
        },

        methods: {
            update() {
                axios.put("https://api.frontier.social/api/settings/" + this.settings.id, {
                    emailcatcher_active: this.emailCatcherActive,
                    social_proof_active: this.socialProofActive,
                }).then((response) => {
                    Vue.toasted.success('Settings were updated!', {
                        action : {
                            text : 'Cancel',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                        icon: 'check',
                    });
                    this.all();
                }).catch((error) => {
                    Vue.toasted.danger('Could not update settings!', {
                        action : {
                            text : 'Cancel',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                        icon: 'close',
                    });
                });

            },

            all() {
                axios.get("https://api.frontier.social/api/settings").then((response) => {
                    this.settings = response.data.data['0'];

                    if(this.settings != null) {
                        this.browserPushActive = this.settings.browser_push_active;
                        this.emailCatcherActive = this.settings.emailcatcher_active;
                        this.emailCatcherInterval = this.settings.emailcatcher_interval;
                        this.referralToolActive = this.settings.referral_tool_active;
                        this.saveEmailCatcherToSocialProof = this.settings.save_emailcatcher_to_social_proof;
                        this.socialProofActive = this.settings.social_proof_active;
                    }
                });
            },
        }
    }
</script>