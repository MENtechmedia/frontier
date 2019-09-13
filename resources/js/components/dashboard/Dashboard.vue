<template>
    <div class="page shadow-md">
        <base-header></base-header>

        <div class="container mx-auto flex mt-24">

            <div class="w-1/5 h-12">
                <dashboard-menu></dashboard-menu>
            </div>

            <!--Document-->
            <div class="w-4/5 ">
                <content-section>


                    <h1 class=" text-minsk font-black mb-10"> Documentation </h1>


                    <h2 class="text-minsk font-black mb-10">Step 1 - Set-up social proof</h2>
                    <p class="text-london-hue">
                        In order to make use of the social proof functionality, you need to set-up your own social proof preferences.
                        In the "Tools" menu, you can select "Social proof". A menu will open in which you can set-up you social preferences, including:
                        <br/><br/>
                    </p>
                    <ul class="text-london-hue">
                        <li>Colours</li>
                        <li>Fonts</li>
                        <li>Content of message</li>
                        <li>Frequency of message</li>
                        <li>Icon of message</li>
                    </ul>

                    <h2 class="text-minsk font-black my-10">Step 2 - Set-up email catcher</h2>
                    <p class="text-london-hue">
                        In order to make use of the email catcher functionality, you need to set-up your own email catcher preferences.
                        In the "Tools" menu, you can select "Email catcher". A couple of settings are predefined, but are easily adjusted.
                        <br/><br/>

                        To set-up the email catcher in the colours your company uses, you can add a "Email catcher theme". It is advised to first create the theme
                        before creating a new email catcher.
                        <br/><br/>

                        After creating your first theme, you can set-up the email catcher to use the text you want it to use? Want people to subscribe to your newsletter?
                        We've got you covered! Want visitors to enroll for a new "for subscribers only"-discount? No problemo! Just use the text you want to use.
                    </p>
                    <div class="bg-grey-lighter text-yellow-dark px-2 py-2 text-center my-10"><span class="font-bold">Note!</span> You can only have 1 active email catcher at any given time.</div>

                    <h2 class="text-minsk font-black my-10">Step 3 - Generate script</h2>
                    <p class="text-london-hue">
                        That's it! Just run the "Generate script" from the "Tools" menu to get your preferences and settings build into a unique script.
                        <br/><br/>
                    </p>

                    <h2 class="text-minsk font-black my-10">Step 4 - Integrate on your website</h2>
                    <p class="text-london-hue">
                        Final step! You can now integrate this website on your website by adding it to your HTML by referencing the script.
                        <br/><br/>
                    </p>
                </content-section>
            </div>

        </div>

    </div>
</template>

<script>
    import BaseHeader from './BaseHeader.vue';
    import ContentSection from '../ContentSection.vue';
    import DashboardMenu from './DashboardMenu';

    export default {
        components: {
            BaseHeader,
            ContentSection,
            DashboardMenu
        },

        mounted() {

        },

        methods: {

        }
    }
</script>