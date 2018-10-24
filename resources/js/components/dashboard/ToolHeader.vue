<template>
    <div class="bg-minsk shadow mb-10">

        <div class="header container mx-auto relative">
            <div class="float-right mt-8" >
                <logout-button></logout-button>
            </div>


            <div>
                <div class="py-6">
                    <go-back></go-back>
                </div>

                <div class="relative w-2/5">
                    <p class="text-saffron font-bold mb-2">Social proof</p>

                    <!--Tool title-->
                    <h1 class="text-white mb-5 tracking-wide font-black uppercase"> {{ title }} </h1>

                    <!-- Website select dropdown -->
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
    import GoBack from '../ui-components/buttons/GoBackButton';

    export default {
        props: ['classes', 'title'],
        components: {
            LogoutButton,
            PortraitPhoto,
            WebsiteSelect,
            GoBack,
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