<template>

    <sidebar>
        <sidebar-link-group title="email catcher">

            <!--Types-->
            <router-link to="/email-catcher/catchers" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">extension</i>
                <span class="text-london-hue">
                    Email catchers
                </span>
            </router-link>

            <!--Messages-->
            <router-link to="/email-catcher/themes" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">message</i>
                <span class="text-london-hue">
                    Email catcher themes
                </span>
            </router-link>

            <!--Settings-->
            <router-link to="/email-catcher/subscriptions" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">local_library</i>
                <span class="text-london-hue">
                    Email subscriptions
                </span>
            </router-link>

        </sidebar-link-group>
    </sidebar>
</template>

<script>
    import Sidebar from '../../ui-components/Sidebar';
    import SidebarLinkGroup from '../../ui-components/SidebarLinkGroup';


    export default {
        components: {
            Sidebar,
            SidebarLinkGroup,
        }
    }
</script>