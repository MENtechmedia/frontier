<template>

    <div class="social__container">
        <transition name="slide-fade">
            <div v-if="visible" class="social__balloon">
                <div @click="visible = false" class="social__close">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAHlBMVEUAAAA6OVs6OVs6OVs6OVs6OVs6OVs6OVs6OVs6OVv0ZyY/AAAACXRSTlMACAkMDYji5OZLuyqyAAAFCUlEQVR42sXdu3LbMBAFUI4ffT4hpUt3bN2FJVvVrlInjVuPG3+A4/BvE1mW9eIu9nEvVp2HMwb3kCKBBaAdhuPP96HD50o+dPvS4wSmWTy0+fvAb//m9U0EWJYOBNOySASbZeET3Lwuy5sI0IFg2rYySwB8gi2AQPABQCeYdq3MEgCbYAewSvAJQCaY9q3MEgCXYA+wQvAFQCWYDq3MEgCT4ABwQXAEQCSYjluZJQAewTHAGcEJAI1gOm1llgBYBKcAJwRnACSC6byVWQLgEJwDHBFcAFAIpstWZgmAQXAJ8EWwAkAgmNZamSUAPMEawCfBKgCcYFpvZZYA0ATrAB8EAgCYYJJamYc76RCSQAJYlmfl2EsHgG2UE59AD7IDQSNGOkErRDpBM0IyQTtAMoEhPiqBJTwqgSk6IoEtOCKBMTYagTU0GoE5MhKBPTASgSMuCoEnLAqBKyoCgS8oAoEzJjiBNyQ4gTsiMIE/IDBBIB4oQSQcKEEomh84glgwN08wguDlhBFEryaMIHw/gwjitzOIIPGFhhBkvs8QgtQTDUCQe6ABCJKP9DRB9omeJki/05IE+VdakgDwUk8RIN7pKQJIryZBgOnUJAhA3bowAapXFyaA9WuDBLhubZAA2LEPESD79SEC6MgmQIAd2wUIwKPb0fvv0OP7ay8BPMPhJMDneJwEhCyXi4CR53MRUDKdDgJOrtdBQMp2mwlY+X4zAW3Gw0jAm/MxEhBnvUwEzHk/EwF15tNAwJ37NRCQZ7+bBOz5/yYBfQVEg4C/BqRB0GEVjErQYx2QStABQCXoshBKI+gCoBF0AdAI+gAoBH0A/AT4VbFjLYCXgLEyeqwF8BFwVsePtQAeAtYOibEWwE7A2yUz1gJYCZg7pcZaABsBd7fcWAtgIWDvmBxrAdoE/F2zYy1Ai6DHzumxFkAn6AGgEnTZPK8Q9AEYrn8Wn0D1JSi/Cau/huUPoupHcfnLqPp1XN4hqe6SlXdKq7vl5QOT6qFZ+eC0enhenqCoTtGUJ6mq03TlicrqVG15sro6XV8+YSEC/HnqQiADPI5dCGSA++seBApAYNEdFiCw6A4M0INABehA0ADgEzQA6ARNADZBE4BMYADgEhgAqAQmACaBCYBIYATgERgBaARmABaBGYBE4ADgEDgAKAQuAAaBC4BA4ATAEzgB4ARuADSBuM3n/d5/zgECeZfPr8BVCxAEAKAEIQAkQQgASBAEwBEEAWAEYQAUQRgARJAAwBAkACAEKQAEQQoAQJAEyBMkAdIEaYAsQRogSQAAyBEAAFIEEIAMAQQgQQACiBOAAMIEMIAoAQwgSAAEiBFMOIDQ7xfIm6YCAJGfcIACBAjAAH4CMICbAA7gJYADOAkIAD4CAoCLgALgIaAAOAhIAHYCEoCZgAZgJaABGAmIADYCIoCJgApgIaACGAjIAG0CMkCTgA7QIqADNAg6AOgEd3wAjeBZLqYDBFCL6UjlhN4fkCeglBOSCH4PQweCj5pSGz6AWlJqnQAMoBbVWiNAA6hlxdYI4ABqYbVLAjyAWlrukoAAoBbXOydgAKjlBc8JKABqgcVTAg6AWmLylIAEoBbZPCZgAahlRo8JaABqodUDAQ9ALTV7ICACqMV29wRMALXc8J6ACqAWXN4RcAHUktM7AjKAWnR7S8AGUMuObwnoAGrh9WHDB1BLzw+3HQD+E8zysW89TuDq5K9/jV3/yVHMyIMAAAAASUVORK5CYII="/>
                </div>
                <div class="social__aside">
                    <img :src="icons[event.icon]"/>
                </div>
                <div class="social__body">
                    <p class="social__message"> {{ event.message }} </p>

                    <div class="social__time_tag">
                        <p class="time__string">{{ event.time }}</p>
                    </div>
                </div>

            </div>
        </transition>
    </div>
</template>

<style lang="scss">
    body {
        height: 1000px;
    }

    .slide-fade-enter-active {
        transition: all 2s ease;
    }

    .slide-fade-leave-active {
        transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(-10px);
        opacity: 0;
    }

    .social__container {
        z-index: 2000;
        width: 329px;
        height: 96px;
        position: fixed;
        bottom: 20px;
        left: 20px;

        .social__balloon {
            position: relative;
            background: #EBF4FB;
            width: 329px;
            height: 96px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            display: flex;
            overflow: hidden;

            .social__aside {
                background: #07D174;
                float: left;
                max-width: 75px;
                min-width: 75px;

                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 25px;
                }
            }

            .social__body {
                padding: 0px 20px 0px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                flex-grow: 1;

                p.social__message {
                    font-size: 11px;
                    font-weight: 300;
                    line-height: 20px;
                    letter-spacing: 1px;
                    padding: 0px;
                    margin: 0px;
                    text-align: left;
                }

                .social__time_tag {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    font-size: 10px;
                    font-weight: 300;
                    min-height: 15px;
                    max-height: 15px;

                    p.time__string{
                        margin: 0;
                        padding: 0;
                    }
                }

            }


            .social__close {
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 2px;
                z-index: 200;
                img {
                    width: 7px;
                }
            }
        }

    }


</style>

<script>
    import icons from '../../icons.js';

    export default {
        props: ['event'],

        data() {
            return {
                visible: false,
                icons: icons,
            }
        },

        mounted() {
            setTimeout(() => this.visible = true, 10);
            setTimeout(() => this.visible = false, 5000);
        },

    }
</script>