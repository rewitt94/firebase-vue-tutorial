<template>
    <div class="login">
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button @click="authenticate">Login</button>
        <p>Not registered? <router-link to="/sign-up">Create an account</router-link>.</p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return {}
        },
        methods: {
            authenticate: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user => alert('success'))
                .catch(err => alert("Oops, " + err))
            }
        }
    }
</script>

<style scoped>
</style>