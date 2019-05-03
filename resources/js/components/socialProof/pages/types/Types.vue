<template>
    <div class="page shadow-md">
        <tool-header tool="Social Proof" title="types"></tool-header>

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

                            <div class="mb-6">
                                <custom-input type="text"
                                              v-model="name"
                                              @validated="value => errors.nameError = value"
                                              :input-error="errors.nameError"
                                              placeholder="type name"
                                              validation-rules="required|min:3|max:3"></custom-input>
                            </div>

<!--                            <input type="text" v-model="name"-->
<!--                                   class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"-->
<!--                                   placeholder="type name"/>-->

                            <input type="text" v-model="icon"
                                   class="w-full mb-6 outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 block"
                                   placeholder="type icon"/>

                            <toggleable-input-field>
                                <input type="number" v-model="interval_minutes"
                                       class="outline-none text-periwinkle-gray-dark font-light bg-white shadow-md rounded px-4 py-3 mb-4"
                                       placeholder="repeats every # minutes"/>
                            </toggleable-input-field>

                            <select v-model="social_proof_theme_id" class="cursor-pointer py-3 px-5 shadow-md rounded block" name="type_id" >
                                <option selected="selected" value="default" disabled>Choose theme</option>
                                <option v-for="social_proof_theme in social_proof_themes" :value="social_proof_theme.id" > {{ social_proof_theme.name }}</option>
                            </select>

                            <div v-if="noErrors" class="bg-saffron text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4" @click="add()">
                                Save
                            </div>
                            <div v-else class="bg-grey-dark text-white px-4 py-3 rounded shadow-md inline-block cursor-pointer mt-4 cursor-not-allowed">
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
    import CustomInput from '../../../validation/CustomInput';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            Sidebar,
            SidebarLinkGroup,
            ToggleableInputField,
            AddSignButton,
            SocialProofSidebar,
            CustomInput,
        },

        watch: {
          errors: {
              handler: function(newErrors, oldErrors) {
                  if (!newErrors.nameError) {
                      this.noErrors = true;
                      return;
                  }

                  this.noErrors = false;
              },
              deep: true
          }
        },

        data() {
            return {
                noErrors: false,
                errors: {
                    nameError: true,
                },

                social_proof_themes: [],
                interval_minutes: 0,
                repeatable: false,
                user_generated: false,
                name: "",
                icon: "",

                //
                types: [],
                social_proof_theme_id: "default",
            }
        },

        mounted() {
            this.all();
            this.getSocialProofThemes();
        },

        methods: {

            add() {


                axios.post("https://api.frontier.social/api/eventType", {
                    name: this.name,
                    icon: this.icon,
                    user_generated: this.user_generated,
                    repeatable: this.repeatable,
                    interval_minutes: this.interval_minutes,
                    social_proof_theme_id: this.social_proof_theme_id
                }).then((response) => {
                    Vue.toasted.success('Type was inserted!', {
                        action : {
                            text : 'Cancel',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                        icon: 'check',
                    });
                });

                this.name = "";
                this.icon = "";
                this.user_generated = false;
                this.repeatable = false;
                this.interval_minutes = 0;

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
                        axios.delete("https://api.frontier.social/api/eventType/" + id).then((response) => {
                            let removeIndex = this.types.map(function(type) {
                                return type.id;
                            }).indexOf(id);

                            ~removeIndex && this.types.splice(removeIndex, 1);
                        });
                    }
                });
            },

            all() {
                axios.get("https://api.frontier.social/api/eventType").then((response) => {
                    this.types = response.data.data;
                });
            },

            getSocialProofThemes() {
                axios.get("https://api.frontier.social/api/socialProofTheme").then((response) => {
                    this.social_proof_themes = response.data.data;
                });
            },
        }


    }
</script>


