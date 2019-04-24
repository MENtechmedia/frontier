<template>
    <div class="page shadow-md">
        <tool-header tool="Email Catcher" title="Dashboard"></tool-header>

        <!--Side bar-->
        <div class="container mx-auto flex mt-24">
            <div class="w-1/5 h-12">

                <!--Sidebar-->
                <email-catcher-sidebar></email-catcher-sidebar>
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
    import EmailCatcherSidebar from '../EmailCatcherSidebar.vue';

    export default {
        components: {
            ContentSection,
            ToolHeader,
            EmailCatcherSidebar
        }
    }
</script>
