<template>
    <div class="page shadow-md">
        <tool-header tool="Social Proof" title="messages"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <social-proof-sidebar></social-proof-sidebar>

            </div>

            <!-- Content goes here -->
            <div class="w-4/5 mb-10">
                <content-section>

                    <div class="flex">

                        <div class="w-1/3">
                            <h1 class=" text-minsk font-black mb-10"> Messages </h1>

                            <p class="text-london-hue font-bold mb-6"> Add messages for social proof.</p>

                                <input v-model="message" type="text" class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                       placeholder="type name"/>

                                <!--<input v-model="icon" type="text"  class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"-->
                                       <!--placeholder="icon"/>-->

                                <select v-model="event_type_id" class="cursor-pointer py-3 px-5 shadow-md rounded block" name="type_id" >
                                    <option v-for="type in types" :value="type.id" > {{ type.name }}</option>
                                </select>

                                <div @click="add()" class="cursor-pointer bg-saffron text-white px-4 py-2 mt-4 rounded shadow-md inline-block">Save</div>
                        </div>

                        <div class="w-2/3 shadow-md rounded ml-16">
                            <div class="bg-snuff text-center py-2">
                                <p class="text-xs font-light">Messages</p>
                            </div>

                            <div class="py-10 px-12">
                                <p class="flex justify-between items-center text-minsk py-1" v-for="message in messages">
                                    <span>{{ message.message }}</span>
                                    <span class="">
                                            <i @click="remove(message.id)" class="cursor-pointer material-icons">
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
                types: [],
                messages: [],
                message: "",
                event_type_id: "default",
            }
        },

        mounted() {
            this.getTypes();
            this.all();

        },

        methods: {
            add() {
                axios.post("http://api.frontier.test/api/event", {
                    message: this.message,
                    event_type_id: this.event_type_id,
                }).then((response) => {
                    Vue.toasted.success('Message was inserted!', {
                        action : {
                            text : 'Cancel',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                        icon: 'check',
                    });
                });

                this.all();
            },

            all() {
              axios.get("http://api.frontier.test/api/event").then((response) => {
                    this.messages = response.data.data;
              });
            },

            remove(id) {
                Vue.swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if(result.value) {
                        axios.delete("http://api.frontier.test/api/event/" + id).then((response) => {
                            let removeIndex = this.messages.map(function(message) {
                                return message.id;
                            }).indexOf(id);

                            ~removeIndex && this.messages.splice(removeIndex, 1);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                });
            },

            getTypes() {
                axios.get("http://api.frontier.test/api/eventType").then((response) => {
                    this.types = response.data.data;
                });
            }
        }


    }
</script>


