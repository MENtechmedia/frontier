<template>
    <div class="page shadow-md">
        <base-header></base-header>

        <div class="container mx-auto flex mt-24">

            <div class="w-1/5 h-12">

                <p class="uppercase font-bold text-snuff mb-4"> Tools</p>

                <router-link to="/social-proof" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                    <i class="material-icons text-saffron mr-4">local_library</i>
                    <span class="text-london-hue">
                        Social proof
                    </span>
                </router-link>

                <router-link to="/email-catcher" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                    <i class="material-icons text-saffron mr-4">mail</i>
                    <span class="text-london-hue">
                        Mail catcher
                    </span>
                </router-link>

<!--                <router-link to="/social-proof" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">-->
<!--                    <i class="material-icons text-saffron mr-4">send</i>-->
<!--                    <span class="text-london-hue">-->
<!--                        Referral-->
<!--                    </span>-->
<!--                </router-link>-->

<!--                <router-link to="/social-proof" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">-->
<!--                    <i class="material-icons text-saffron mr-4">laptop_mac</i>-->
<!--                    <span class="text-london-hue">-->
<!--                        Browser push-->
<!--                    </span>-->
<!--                </router-link>-->

                <p class="uppercase font-bold text-snuff mt-6 mb-4"> Settings</p>

                <router-link to="/social-proof" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                    <i class="material-icons text-saffron mr-4">credit_card</i>
                    <span class="text-london-hue">
                        Subscription
                    </span>
                </router-link>

                <router-link to="/settings" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                    <i class="material-icons text-saffron mr-4">settings</i>
                    <span class="text-london-hue">
                        Settings
                    </span>
                </router-link>

            </div>

            <!--Document-->
            <div class="w-4/5 ">
                <content-section>


                    <h1 class=" text-minsk font-black mb-10"> Documentation </h1>

                    <p class="text-london-hue">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices pretium eleifend. Morbi
                        vulputate massa sed lacus ultricies dignissim. Etiam vel libero placerat, congue ante eu,
                        finibus orci. Aliquam pellentesque turpis at suscipit euismod. Nulla facilisi. Phasellus
                        fringilla mi at ipsum commodo, vel sodales libero ultrices. Cras vulputate augue non orci
                        condimentum pretium. Maecenas mollis leo neque, et efficitur ligula varius eu.
                        <br> <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices pretium eleifend. Morbi
                        vulputate massa sed lacus ultricies dignissim. Etiam vel libero placerat, congue ante eu,
                        finibus orci. Aliquam pellentesque turpis at suscipit . Nulla facilisi. Phasellus fringilla mi
                        at ipsum commodo, vel sodales libero Cras vulputate augue non orci condimentum pretium. Maecenas
                        mollis leo neque, et efficitur ligula varius eu .ultrices.
                        <br> <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices pretium eleifend. Morbi
                        vulputate massa sed lacus ultricies dignissim. Etiam vel libero placerat, congue ante eu,
                        finibus orci. Aliquam pellentesque turpis at suscipit euismod. Nulla facilisi. Phasellus
                        fringilla mi at ipsum commodo, vel sodales libero ultrices. Cras vulputate augue non orci
                        condimentum pretium. Maecenas mollis leo neque, et efficitur ligula varius eu.
                    </p>

                </content-section>
            </div>

        </div>

    </div>
</template>

<script>
    import BaseHeader from './BaseHeader.vue';
    import ContentSection from '../ContentSection.vue';

    export default {
        components: {
            BaseHeader,
            ContentSection
        },

        mounted() {

        },

        methods: {

        }
    }
</script>