<template>
    <div class="page shadow-md">
        <tool-header title="settings"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <social-proof-sidebar></social-proof-sidebar>

            </div>

            <!-- Content goes here -->
            <div class="w-4/5">
                <content-section>

                    <div class="flex">
                        <div class="w-1/3">
                            <h1 class=" text-minsk font-black mb-10"> Settings </h1>
                            <p class="text-london-hue font-bold mb-6"> Control the settings of social proof.</p>
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
    import AddSignButton from '../../../ui-components/buttons/AddSignButton';
    import SocialProofSidebar from '../SocialProofSidebar';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            Sidebar,
            SidebarLinkGroup,
            ToggleableInputField,
            AddSignButton,
            SocialProofSidebar,
        },

        data() {
            return {


                //
                types: [],
            }
        },

        mounted() {
            this.all();
        },

        methods: {


        }


    }
</script>


