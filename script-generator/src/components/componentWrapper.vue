<template>
    <div>
        <social-proof-wrapper></social-proof-wrapper>
        <email-catcher-wrapper></email-catcher-wrapper>
    </div>
</template>
<script>
    import SocialProofWrapper from  './social-proof/wrapper.vue';
    import EmailCatcherWrapper from './email-catcher/wrapper.vue';

    export default {
        components: {
            'social-proof-wrapper': SocialProofWrapper,
            'email-catcher-wrapper': EmailCatcherWrapper
        }
    }
</script>