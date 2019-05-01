<template>
    <div class="page shadow-md">
        <tool-header tool="Email catcher" title="catchers"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <email-catcher-sidebar></email-catcher-sidebar>

            </div>

            <!-- Content goes here -->
            <div class="w-4/5">
                <content-section>

                    <div class="flex">


                        <div class="w-1/3">
                            <h1 class=" text-minsk font-black mb-10"> Catchers </h1>

                            <input v-model="name" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type name"/>

                            <input v-model="label" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type label"/>

                            <input v-model="title" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type title"/>

                            <input v-model="subtitle" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type subtitle"/>

                            <input v-model="emailField" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type email placeholder"/>

                            <input v-model="buttonField" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type button placeholder"/>

                            <input v-model="cookieText" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type cookie text"/>

                            <input v-model="errorText" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type error text"/>

                            <input v-model="successText" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type success text"/>

                            <input v-model="termsAndConditionsUrl" type="url" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type terms and conditions url"/>

                            <input v-model="cookiePolicyUrl" type="url" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type policy url"/>

                            <input v-model="intervalTime" type="number" min="0" step="1" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type interval (in minutes)"/>

                            Active <toggle-input class="mb-4" v-model="active"></toggle-input>

                            <select v-model="emailCatcherThemeId" class="cursor-pointer py-3 px-5 shadow-md rounded block" name="emailCatcherThemeId" >
                                <option selected="selected" value="default" disabled>Choose email catcher theme</option>
                                <option v-for="(index, email_catcher_theme) in email_catcher_themes" :value="email_catcher_theme.id" > {{ email_catcher_theme.name }}</option>
                            </select>

                            <div class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="add()">
                                Save
                            </div>
                        </div>

                        <div class="w-2/3 shadow-md rounded ml-16">
                            <div class="bg-snuff text-center py-2">
                                <p class="text-xs font-light">Catchers</p>
                            </div>

                            <div class="py-10 px-12">
                                <p class="flex justify-between items-center text-minsk py-1" v-for="catcher in catchers">
                                    <span>{{ catcher.name }}</span>
                                    <span class="">
                                        <i @click="remove(catcher.id)" class="cursor-pointer material-icons">
                                            close
                                        </i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>


                </content-section>
            </div>

        </div>

    </div>
</template>

<script>
    import ToolHeader from '../../../dashboard/ToolHeader.vue';
    import ContentSection from '../../../ContentSection.vue';
    import Sidebar from '../../../ui-components/Sidebar';
    import SidebarLinkGroup from '../../../ui-components/SidebarLinkGroup';
    import ToggleableInputField from '../../../ui-components/inputs/ToggleableInputFields';
    import ToggleInput from '../../../ui-components/inputs/ToggleInput';
    import AddSignButton from '../../../ui-components/buttons/AddSignButton';
    import EmailCatcherSidebar from '../EmailCatcherSidebar';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            Sidebar,
            SidebarLinkGroup,
            ToggleableInputField,
            ToggleInput,
            AddSignButton,
            EmailCatcherSidebar,
        },

        data() {
            return {
                name: null,
                label: null,
                title: null,
                subtitle: null,
                emailField: null,
                buttonField: null,
                cookieText: null,
                errorText: null,
                successText: null,
                termsAndConditionsUrl: null,
                cookiePolicyUrl: null,
                intervalTime: null,
                active: false,
                emailCatcherThemeId: null,
                catchers: null,
                email_catcher_themes: null,
            }
        },

        mounted() {
            this.all();
            this.getEmailCatcherThemes();
        },

        methods: {

            add() {
                axios.post("https://api.frontier.social/api/emailCatcher", {
                    name: this.name,
                    label: this.label,
                    title: this.title,
                    subtitle: this.subtitle,
                    email_field: this.emailField,
                    button_field: this.buttonField,
                    cookie_text: this.cookieText,
                    error_text: this.errorText,
                    success_text: this.successText,
                    terms_and_conditions_url: this.termsAndConditionsUrl,
                    cookie_policy_url: this.cookiePolicyUrl,
                    interval_time: this.intervalTime,
                    active: this.active,
                    email_catcher_theme_id: this.emailCatcherThemeId
                }).then((response) => {
                    Vue.toasted.success('Email catcher was inserted!', {
                        action : {
                            text : 'Cancel',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                        icon: 'check',
                    });
                });

                this.name = null;
                this.label = null;
                this.subtitle = null;
                this.email_field = null;
                this.button_field = null;
                this.cookie_text = null;
                this.error_text = null;
                this.success_text = null;
                this.terms_and_conditions_url = null;
                this.cookie_policy_url = null;
                this.interval_time = null;
                this.active = false;
                this.email_catcher_theme_id = null;

                this.all();
            },

            remove(id) {
                Vue.swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        axios.delete("https://api.frontier.social/api/emailCatcher/" + id).then((response) => {
                            let removeIndex = this.catchers.map(function(catcher) {
                                return catcher.id;
                            }).indexOf(id);

                            ~removeIndex && this.catchers.splice(removeIndex, 1);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                });
            },

            all() {
                axios.get("https://api.frontier.social/api/emailCatcher").then((response) => {
                    this.catchers = response.data.data;
                });
            },

            getEmailCatcherThemes() {
                axios.get("https://api.frontier.social/api/emailCatcherTheme").then((response) => {
                    this.email_catcher_themes = response.data.data;
                });
            }
        }


    }
</script>


