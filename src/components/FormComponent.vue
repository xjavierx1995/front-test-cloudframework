<template>
    <v-container>
        form
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            user_id: null
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        let params = {
            id: this.$route.params.id
        }
        this.$axios.get('users', { params }).then(response => {
            this.user = response.data.data;
            console.log(this.user);
        })
    },
}
</script>