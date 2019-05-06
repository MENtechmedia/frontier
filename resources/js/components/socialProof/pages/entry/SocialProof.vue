<template>
    <div class="page shadow-md">
        <tool-header tool="Social Proof" title="Dashboard"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <social-proof-sidebar></social-proof-sidebar>
            </div>

            <!-- Content goes here -->
            <div class="w-4/5">
                <content-section>
                    <div>
                        <div class="flex">


                            <div class="w-full">
                                <h1 class=" text-minsk font-black mb-10"> Social Proof </h1>

                                <p class="mb-4">
                                    Social Proof is a technique to let visitors of your website know what's up. In Frontier, we have implemented a text message style of
                                    of social proof. You can enter messages that will be displayed to the visitors. You can choose the interval in which these message are
                                    shown, and additionally you can select if this message should be repeated in stead of shown only once.
                                </p>

                                <p>
                                    Feel free to let other people know that a person bought the newest choose, or decided that being subscribed to your newsletter was a
                                    nice idea. You can insert dynamic message with our API integration.
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
    import SocialProofSidebar from '../SocialProofSidebar';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            SocialProofSidebar,
        }
    }
</script>
