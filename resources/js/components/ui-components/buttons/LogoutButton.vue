<template>
    <div class="focus:outline-none cursor-pointer" tag="button" @click="logout">
        <div class="flex items-center">
            <div style="width: 25px; height: 25px;"
                 class=" flex items-center justify-center rounded-full inline-block bg-white">
                <i class="material-icons text-minsk-lighter">
                    keyboard_arrow_right
                </i>
            </div>
            <p class="inline-block ml-3 text-white"> logout </p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                localStorage.removeItem('jwt');
                window.router.push({ name: 'login' });
            }
        }
    }
</script>