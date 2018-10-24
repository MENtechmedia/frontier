<template>
    <div class="page shadow-md">

        <div class="w-full login-background flex flex-col items-center justify-center">
            <div class="container mx-auto flex flex-row justify-center">

                <!-- Login form -->
                <div class="w-1/3 flex flex-col mr-8">

                    <!--title-->
                    <h2 class="self-start text-saffron  my-8 "> Login to your account </h2>

                    <!-- Company placeholder -->
                    <icon-input placeholder="your company" type="text" icon="work"></icon-input>

                    <!-- E-mail address placeholder -->
                    <icon-input placeholder="Email address" type="email" icon="person"></icon-input>


                    <!-- Password placeholder -->
                    <icon-input placeholder="Password" type="password" icon="lock"></icon-input>

                    <!--Login button-->
                    <div class="login__button flex flex-col mb-6">
                        <router-link class="self-end cursor-pointer" to="/dashboard">
                            <input class="bg-london-hue text-zircon px-6 py-4 rounded shadow-md font-bold self-end" type="submit" value="login" >
                        </router-link>

                    </div>

                </div>

                <!-- seperating line -->
                <div class="seperator  bg-snuff mx-10 self-center" ></div>

                <!-- Register form -->
                <div class="w-1/3 flex flex-col">

                    <!--title-->
                    <h2 class="self-start text-periwinkle-gray my-8"> Register a new account </h2>

                    <!-- Email address placeholder -->
                    <icon-input placeholder="Email address" type="email" icon="person"></icon-input>

                    <!-- Company placeholder -->
                    <icon-input placeholder="your company" type="text" icon="work"></icon-input>

                    <!-- Password placeholder -->
                    <icon-input placeholder="Password" type="password" icon="lock"></icon-input>

                    <!-- repeat password placeholder-->
                    <icon-input placeholder="Repeat password" type="password" icon="lock"></icon-input>

                    <div class="login__button flex flex-col mb-6">
                        <input class="bg-london-hue text-zircon px-6 py-4 rounded shadow-md font-bold self-end" type="submit" value="register" >
                    </div>

                </div>


            </div>


        </div>

    </div>

</template>

<style>
    .login-background {
        background: linear-gradient(to bottom right, #3F337A, #97A0FB);
        height: 100vh;
    }

    .seperator {
        height: 100px;
        width: 1px;
    }


</style>
<script>
    import IconInput from './IconInput.vue';

    export default {
        components: {
            'icon-input': IconInput
        }

    }
</script>