<template>
    <div>
        <social-popup :event="event" v-for="event in events" :key="event.id"></social-popup>
    </div>
</template>

<script>
    import socialPopup from './popup.vue';
    import axios from 'axios';
    import api from '../../api.js';

    export default {
        components:{
            "social-popup": socialPopup,
        },
        data() {
            return {
                events: null,
            }
        },
        mounted() {
            setInterval(() => {
                axios.get(api.base + 'events/client/unseen').then((response) => {
                    this.events = response.data;
                });
            }, 6000);
        }
    }
</script>