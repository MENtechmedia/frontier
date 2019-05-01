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
                        <div class="w-full">
                            <div class="w-2/3">
                                <h1 class=" text-minsk font-black mb-10"> Email Catcher Subscriptions </h1>

                                <p class="text-london-hue font-bold mb-6"> Overview of your current email catcher subscriptions. You can use the export button to generate a .csv file of your current subscriptions.</p>
                            </div>

                            <table class="text-left w-full border-collapse" v-if="subscriptions != null">
                                <tr>
                                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
                                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email address</th>
                                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email catcher</th>
                                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                        <div class="bg-minsk text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="exportEmailSubscriptions()">
                                            <span>
                                                <i class="material-icons">
                                                    cloud_download
                                                </i>
                                            </span>
                                            <span style="position: relative; bottom: 6px; left: 4px;">
                                                Export
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="hover:bg-grey-lighter" v-for="(subscription, index) in subscriptions">
                                    <td class="py-4 px-6 border-b border-grey-light">{{ index + 1 }}</td>
                                    <td class="py-4 px-6 border-b border-grey-light">{{ subscription.email_address }}</td>
                                    <td class="py-4 px-6 border-b border-grey-light">{{ subscription.email_catcher.name }}</td>
                                    <td class="py-4 px-6 border-b border-grey-light">
                                        <div class="bg-red-dark text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="remove(subscription.id)">
                                            Delete
                                        </div>
                                    </td>
                                </tr>
                            </table>
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
    import collect from 'collect.js';

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
                subscriptions: null,
                emailCatchers: null,
            }
        },

        mounted() {
            this.all();
        },

        methods: {

            remove(id) {
                Vue.swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        axios.delete("https://api.frontier.social/api/emailSubscription/" + id).then((response) => {
                            let removeIndex = this.subscriptions.map(function(subscription) {
                                return subscription.id;
                            }).indexOf(id);

                            ~removeIndex && this.subscriptions.splice(removeIndex, 1);
                        });
                    }
                });
            },

            all() {
                axios.get("https://api.frontier.social/api/emailSubscription").then((response) => {
                    this.subscriptions = response.data.data;
                });
            },

            exportEmailSubscriptions() {
                let csv = this.subscriptions.map((subscription) =>{
                    let customSubscription = {
                        'id': subscription. id,
                        'name': subscription.name,
                        'catcher_name': subscription.email_catcher.name,
                        'email_address': subscription.email_address,
                        'opt_in': subscription.opt_in == 1 ? 'true' : 'false',
                        'terminology': subscription.terminology,
                        'created_at': subscription.created_at,
                    };
                    return JSON.stringify(Object.values(customSubscription));
                }).join("\n").replace(/(^\[)|(\]$)/mg, '');

                let csvContent = "data:text/csv;charset=utf-8, ID, Name, Email Catcher Name, Email Address, Opted in, Terminology, Created at, \n";

                let download = csvContent += csv;
                let encodedUri = encodeURI(download);

                var link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "email_subscriptions.csv");
                document.body.appendChild(link); // Required for FF
                link.click();
                document.body.removeChild(link);
            }
        }


    }
</script>


