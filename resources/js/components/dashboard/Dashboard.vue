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