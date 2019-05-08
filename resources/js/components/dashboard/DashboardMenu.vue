<template>
    <div>
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

        <router-link to="/subscription" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
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

        <a @click="download" class="hover:pl-5 cursor-pointer transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
            <i class="material-icons text-saffron mr-4">play_arrow</i>
            <span class="text-london-hue">
                Generate script
            </span>
        </a>

    </div>
</template>
<script>
    export default {
        methods: {
            download() {
                axios.get("/api/script/download").then((response) => {
                    console.log(response);
                });
            }
        }
    }
</script>