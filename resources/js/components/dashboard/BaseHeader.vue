<template>
    <div class="bg-minsk shadow mb-10">

        <div class="header container mx-auto relative">
            <div class="float-right mt-8" >
                <logout-button></logout-button>
            </div>


            <div class="absolute pin-b flex">
                <portrait-photo></portrait-photo>

                <div class="mt-20 px-20 relative">

                    <!--Website title-->
                    <h1 class="text-white mb-5 tracking-wide"> ERIC LANDHEERRR </h1>

                    <!--Website select dropdown -->
                    <div class="w-full relative portrait-photo">
                        <website-select></website-select>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>



<script>

    import LogoutButton from '../ui-components/buttons/LogoutButton';
    import PortraitPhoto from '../ui-components/PortraitPhoto';
    import WebsiteSelect from '../ui-components/WebsiteSelect';

    export default {
        props: ['classes'],
        components: {
            LogoutButton,
            PortraitPhoto,
            WebsiteSelect,
        },
    }
</script>


<style lang="scss">
    button {
        outline: 0;
    }

    .header {
        height: 300px;
        width: 100%;
        position: relative;
        z-index: 10;
    }

    /* extending the styles of the underlying class */
    .fr--portrait--photo{
        bottom: -30px;
    }

</style>