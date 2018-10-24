<template>
    <div class="page shadow-md">
        <tool-header title="Dashboard"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <social-proof-sidebar></social-proof-sidebar>
            </div>

            <!-- Content goes here -->
            <div class="w-4/5">
                <content-section></content-section>
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
