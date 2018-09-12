<template>
    <div class="w-full login-background flex flex-col items-center justify-center">
        <div class="container mx-auto flex flex-row justify-center">

            <div class="w-1/3 flex flex-col">
                <h2 class="self-start text-saffron  my-8 "> Login to your account </h2>
                <div class="login__input flex mb-6">
                    <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
                        person
                    </i>
                    <input type="text" class="w-full px-6 py-5 appearance-none rounded focus:outline-none  shadow-lg text-black text-xs " placeholder="Password" />
                </div>

                <div class="login__input flex mb-6">
                    <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
                        lock
                    </i>
                    <input type="text" class="w-full px-6 py-2 appearance-none rounded focus:outline-none  shadow-lg text-black text-xs " placeholder="Password" />
                </div>

                <div class="login__button flex flex-col mb-6">
                    <input class="bg-london-hue text-zircon px-6 py-4 mr-12 rounded shadow-lg font-bold self-end" type="submit" value="login" >
                </div>

            </div>
            <div class="seperator bg-snuff mx-10 self-center" ></div>

            <div class="w-1/3 flex flex-col">
                <h2 class="self-start text-periwinkle-gray my-8"> Register a new account </h2>
                <div class="login__input flex mb-6">
                    <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
                        person
                    </i>
                    <input type="text" class="w-full px-6 py-5 appearance-none rounded focus:outline-none  shadow-lg text-black text-xs " placeholder="Password" />
                </div>

                <div class="login__input flex mb-6">
                    <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
                        lock
                    </i>
                    <input type="text" class="w-full px-6 py-2 appearance-none rounded focus:outline-none  shadow-lg text-black text-xs " placeholder="Password" />
                </div>

                <div class="login__input flex mb-6">
                    <i class="text-saffron material-icons my-4 mx-6 shadow-lg">
                        lock
                    </i>
                    <input type="text" class="w-full px-6 py-2 appearance-none rounded focus:outline-none  shadow-lg text-black text-xs " placeholder="Password" />
                </div>

                <div class="login__button flex flex-col mb-6">
                    <input class="bg-london-hue text-zircon px-6 py-4 mr-12 rounded shadow-lg font-bold self-end" type="submit" value="register" >
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
        height: 300px;

        width: 1px;

    }

    .login__input {
        width: 350px;
    }
</style>
<script>
    export default {
        mounted() {
            console.log('mounted');
        }

    }
</script>