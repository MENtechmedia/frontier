<template>
    <div class="page shadow-md">
        <tool-header title="types"></tool-header>

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
                            <h1 class=" text-minsk font-black mb-10"> Types </h1>
                            <p class="text-london-hue font-bold mb-6"> Add different types for your social proof
                                messages.</p>
                            <input type="text" v-model="name"
                                   class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type name"/>

                            <toggleable-input-field>
                                <input type="number" v-model="interval_minutes"
                                       class="outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3"
                                       placeholder="repeats every # minutes"/>
                            </toggleable-input-field>

                            <div class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="add()">
                                Save
                            </div>
                        </div>

                        <div class="w-2/3 shadow-md rounded ml-16">
                            <div class="bg-snuff text-center py-2">
                                <p class="text-xs font-light">Types</p>
                            </div>

                            <div class="py-10 px-12">
                                <p class="flex justify-between items-center text-minsk py-1" v-for="type in types">
                                    <span>{{ type.name }}</span>
                                    <span class="">
                                        <i @click="remove(type.id)" class="cursor-pointer material-icons">
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
                interval_minutes: 0,
                repeatable: false,
                user_generated: false,
                name: "",

                //
                types: [],
            }
        },

        mounted() {
            this.all();
        },

        methods: {

            add() {
                axios.post("https://api.frontier.social/api/eventType", {
                    name: this.name,
                    user_generated: this.user_generated,
                    repeatable: this.repeatable,
                    interval_minutes: this.interval_minutes
                }).then((response) => {
                    console.log(response);
                    this.types.push({
                        id: response.data.id,
                        name: this.name,
                        user_generated: this.user_generated,
                        repeatable: this.repeatable,
                        interval_minutes: this.interval_minutes
                    })

                    this.name = "";
                    this.user_generated = false;
                    this.repeatable = false;
                    this.interval_minutes = 0;
                });
            },

            remove(id) {
                axios.delete("https://api.frontier.social/api/eventType/" + id).then((response) => {
                    let removeIndex = this.types.map(function(type) {
                        return type.id;
                    }).indexOf(id);

                    ~removeIndex && this.types.splice(removeIndex, 1);
                });
            },

            all() {
                axios.get("https://api.frontier.social/api/eventType").then((response) => {
                    this.types = response.data.data;
                });
            }
        }


    }
</script>


