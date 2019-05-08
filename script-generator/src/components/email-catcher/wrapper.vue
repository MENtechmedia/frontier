<template>
    <div>
        <email-catcher display="true"
                       emailcatcher="1"
                       ipaddress="127.0.0.1"
                       newsletter="Test newsletter"
                       title="Test title"
                       description="Test description"
                       cookie="Cookie"
                       name="Name"
                       email="Email"
                       signup="Sign up"
                       error="Werkt niet whahahau"
                       catcher_success="Werkt wel whahahau"></email-catcher>
    </div>
</template>
<script>
    import EmailCatcher from './email-catcher.vue';

    export default {
        components: {
            'email-catcher': EmailCatcher,
        },
    }
</script>