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
                            <h1 class=" text-minsk font-black mb-10"> Email Catcher Themes </h1>

                            <p class="text-london-hue font-bold mb-6"> Add an email catcher theme, you can use this to personalize the email catcher.</p>

                            <input v-model="name" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="Theme name"/>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Submit button color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="submitButtonColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Submit button background color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="submitButtonBackgroundColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Close Button Background Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="closeButtonBackgroundColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Close Button Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="closeButtonColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Header Background Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="headerBackgroundColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Content Background Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="contentBackgroundColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Title Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="titleColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Title Icon Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="titleIconColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Subtitle Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="subtitleColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Label Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="labelColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Input Label Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="inputLabelColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Input Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="inputColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Input Background Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="inputBackgroundColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Input Border Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="inputBorderColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Input Icon Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="inputIconColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Policy Text Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="policyTextColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Check Box Border Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="checkBoxBorderColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Check Mark Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="checkMarkColor"/>
                            </div>

                            <div>
                                <p class="text-periwinkle-gray-dark py-3 inline-block w-5/6">Check Box Background Color</p>
                                <chrome-picker picker="chrome" :item="colorType" v-model="checkBoxBackgroundColor"/>
                            </div>

                            <div class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="add()">
                                Save
                            </div>
                        </div>

                        <div class="w-2/3 shadow-md rounded ml-16">
                            <div class="bg-snuff text-center py-2">
                                <p class="text-xs font-light">Email Catcher Themes</p>
                            </div>

                            <div class="py-10 px-12">
                                <p class="flex justify-between items-center text-minsk py-1" v-for="theme in themes">
                                    <span>{{ theme.name }}</span>
                                    <span class="">
                                        <i @click="remove(theme.id)" class="cursor-pointer material-icons">
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
<style lang="scss">
    .color-picker-component{
        .current-color {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #000;
            cursor: pointer;
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
    import ToolHeader from '../../../dashboard/ToolHeader.vue';
    import ContentSection from '../../../ContentSection.vue';
    import Sidebar from '../../../ui-components/Sidebar';
    import SidebarLinkGroup from '../../../ui-components/SidebarLinkGroup';
    import ToggleableInputField from '../../../ui-components/inputs/ToggleableInputFields';
    import AddSignButton from '../../../ui-components/buttons/AddSignButton';
    import EmailCatcherSidebar from '../EmailCatcherSidebar';
    import ColorPicker from '../../../ui-components/inputs/ColorPicker';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            Sidebar,
            SidebarLinkGroup,
            ToggleableInputField,
            AddSignButton,
            EmailCatcherSidebar,
            'chrome-picker': ColorPicker,
        },

        data() {
            return {
                colorType: {
                    colorType: 'hex'
                },
                color: {
                    color: '#FFFFFF'
                },
                name: null,
                submitButtonColor: null,
                submitButtonBackgroundColor: null,
                closeButtonBackgroundColor: null,
                closeButtonColor: null,
                headerBackgroundColor: null,
                contentBackgroundColor: null,
                titleColor: null,
                titleIconColor: null,
                subtitleColor: null,
                labelColor: null,
                inputLabelColor: null,
                inputColor: null,
                inputBackgroundColor: null,
                inputBorderColor: null,
                inputIconColor: null,
                policyTextColor: null,
                checkBoxBorderColor: null,
                checkMarkColor: null,
                checkBoxBackgroundColor: null,
                displayPicker: false,
                themes: null,
            }
        },

        mounted() {
            this.all();
        },

        methods: {

            add() {
                axios.post("https://api.frontier.social/api/emailCatcherTheme", {
                    name: this.name,
                    submit_button_color: this.submitButtonColor,
                    submit_button_background_color: this.submitButtonBackgroundColor,
                    close_button_background_color: this.closeButtonBackgroundColor,
                    close_button_color: this.closeButtonColor,
                    header_background_color: this.headerBackgroundColor,
                    content_background_color: this.contentBackgroundColor,
                    title_color: this.titleColor,
                    title_icon_color: this.titleIconColor,
                    subtitle_color: this.subtitleColor,
                    label_color: this.labelColor,
                    input_label_color: this.inputLabelColor,
                    input_color: this.inputColor,
                    input_background_color: this.inputBackgroundColor,
                    input_border_color: this.inputBorderColor,
                    input_icon_color: this.inputIconColor,
                    policy_text_color: this.policyTextColor,
                    check_box_border_color: this.checkBoxBorderColor,
                    check_mark_color: this.checkMarkColor,
                    check_box_background_color: this.checkBoxBackgroundColor
                });

                this.name = null;
                this.submitButtonColor = null;
                this.submitButtonBackgroundColor = null;
                this.closeButtonBackgroundColor = null;
                this.closeButtonColor = null;
                this.headerBackgroundColor = null;
                this.contentBackgroundColor = null;
                this.titleColor = null;
                this.titleIconColor = null;
                this.subtitleColor = null;
                this.labelColor = null;
                this.inputLabelColor = null;
                this.inputColor = null;
                this.inputBackgroundColor = null;
                this.inputBorderColor = null;
                this.inputIconColor = null;
                this.policyTextColor = null;
                this.checkBoxBorderColor = null;
                this.checkMarkColor = null;
                this.checkBoxBackgroundColor = null;

                this.all();
            },

            remove(id) {
                axios.delete("https://api.frontier.social/api/emailCatcherTheme/" + id).then((response) => {
                    let removeIndex = this.themes.map(function(theme) {
                        return theme.id;
                    }).indexOf(id);

                    ~removeIndex && this.themes.splice(removeIndex, 1);
                }).catch((error) => {
                    console.log(error);
                });
            },

            all() {
                axios.get("https://api.frontier.social/api/emailCatcherTheme").then((response) => {
                    this.themes = response.data.data;
                });
            },

            toggleColorPicker(variable) {

            }
        }


    }
</script>


