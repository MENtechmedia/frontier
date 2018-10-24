<template>

    <sidebar>
        <sidebar-link-group title="social proof">

            <!--Types-->
            <router-link to="/social-proof/types" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">extension</i>
                <span class="text-london-hue">
                    Types
                </span>
            </router-link>

            <!--Messages-->
            <router-link to="/social-proof/messages" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">message</i>
                <span class="text-london-hue">
                    Messages
                </span>
            </router-link>

            <!--Settings-->
            <router-link to="/social-proof/settings" class="hover:pl-5 transition-normal-in-out-quad no-underline font-bold flex items-center mb-2">
                <i class="material-icons text-saffron mr-4">local_library</i>
                <span class="text-london-hue">
                    Settings
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