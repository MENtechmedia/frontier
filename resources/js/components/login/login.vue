<template>
    <div class="page shadow-md">
        <div class="w-full login-background">

            <div class="px-16 py-16 flex">
                <div class="justify-start w-1/3">
                    <img src="/images/frontier.png"/>
                </div>

                <div class="w-1/5">

                </div>

                <div class="justify-end w-2/5">
                    <router-link class="cursor-pointer" to="/dashboard">
                        <a class="text-zircon px-6 font-bold self-end text-uppercase">Sign up</a>
                    </router-link>

                    <router-link class="cursor-pointer" to="/dashboard">
                        <a class="text-zircon px-6 font-bold self-end text-uppercase">Reviews</a>
                    </router-link>

                    <router-link class="cursor-pointer" to="/dashboard">
                        <a class="text-zircon px-6 font-bold self-end text-uppercase">Features</a>
                    </router-link>

                    <router-link class="cursor-pointer" to="/dashboard">
                        <a class="text-zircon px-6 font-bold self-end text-uppercase">Integrations</a>
                    </router-link>

                    <router-link class="cursor-pointer" to="/dashboard">
                        <a class="text-zircon px-6 font-bold self-end text-uppercase">Pricing</a>
                    </router-link>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center hoi">

                <div class="container mx-auto flex flex-row justify-center">

                    <!-- Login form -->
                    <div class="w-1/3 flex flex-col mr-8">

                        <!--title-->
                        <h2 class="self-start text-saffron  my-8 "> Login to your account </h2>

                        <!-- Company placeholder -->
                        <icon-input placeholder="Your company" type="text" icon="work"></icon-input>

                        <!-- E-mail address placeholder -->
                        <icon-input placeholder="Email address" type="email" icon="person"></icon-input>


                        <!-- Password placeholder -->
                        <icon-input placeholder="Password" type="password" icon="lock"></icon-input>

                        <!--Login button-->
                        <div class="login__button flex flex-col mb-6 pl-16 ml-2">
                            <div class="self-start cursor-pointer" @click="login">
                                <input class="bg-london-hue text-zircon px-6 py-4 rounded shadow-md font-bold self-end cursor-pointer" type="submit" value="login" >
                            </div>
                        </div>

                    </div>

                    <!-- seperating line -->
                    <div class="seperator  bg-snuff mx-10 self-center" ></div>

                    <!-- Register form -->
                    <div class="w-1/3 flex flex-col">

                        <!--title-->
                        <h2 class="self-start text-periwinkle-gray my-8"> Register a new account </h2>

                        <!-- Email address placeholder -->
                        <icon-input v-model="company_email" placeholder="Email address" type="email" icon="person"></icon-input>

                        <!-- Company placeholder -->
                        <icon-input v-model="company_name" placeholder="Your company" type="text" icon="work"></icon-input>

                        <div class="login__input flex mb-6" v-if="company_name != ''">
                            <i class="text-saffron material-icons my-4 mx-6 shadow-lg">

                            </i>
                            <div class="w-full text-white px-6 py-2 appearance-none rounded focus:outline-none  shadow-md text-xs ">
                                {{ company_name | strippedLowerCase }}

                                <span v-if="existing_website != ''" class="text-red">
                                    already exists!
                                </span>
                                <span v-else class="text-green">
                                    is available!
                                </span>
                            </div>
                        </div>

                        <!-- Password placeholder -->
                        <icon-input v-model="password" placeholder="Password" type="password" icon="lock"></icon-input>

                        <!-- repeat password placeholder-->
                        <icon-input v-model="password_repeat" placeholder="Repeat password" type="password" icon="lock"></icon-input>

                        <div class="login__button flex flex-col mb-6">
                            <input class="bg-london-hue text-zircon px-6 py-4 rounded shadow-md font-bold self-end cursor-pointer" type="submit" value="register" >
                        </div>

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

    .hoi {
        height: 70vh;
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
        },

        watch: {
            company_name: function (value) {
                let strippedName = this.$options.filters.strippedLowerCase(value);

                if(strippedName.length >= 5) {
                    axios.get("https://api.frontier.social/api/website/byName/" + value).then((response) => {
                        if(response.data != [])
                            this.existing_website = response.data;
                    });
                } else {
                    this.existing_website = '';
                }
            }
        },

        filters: {
            strippedLowerCase: function (value) {
                if (!value) return '';
                return value.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '').toLowerCase();
            }
        },

        data() {
            return {
                existing_website: '',
                company_email: '',
                company_name: '',
                password: '',
                password_repeat: ''
            }
        },

        methods: {
            login() {
                localStorage.setItem('jwt', 'test');

                window.router.push('dashboard');

            }
        }

    }
</script>