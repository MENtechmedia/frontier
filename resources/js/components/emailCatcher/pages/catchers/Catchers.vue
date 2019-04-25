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
    import AddSignButton from '../../../ui-components/buttons/AddSignButton';
    import EmailCatcherSidebar from '../EmailCatcherSidebar';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            Sidebar,
            SidebarLinkGroup,
            ToggleableInputField,
            AddSignButton,
            EmailCatcherSidebar,
        },

        data() {
            return {
                catchers: null,
            }
        },

        mounted() {
            console.log(' mounted');
            this.all();
        },

        methods: {

            add() {

            },

            remove(id) {

            },

            all() {
                axios.get("https://api.frontier.social/api/emailCatcher").then((response) => {
                    this.catchers = response.data.data;
                });
            },
        }


    }
</script>


