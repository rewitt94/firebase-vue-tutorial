<template>
    <div class="sign-up">
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button @click="signUp">Sign up</button>
        <p>Already have an account? <router-link to="/login">Login here</router-link>.</p>
    </div>
</template>

<script>
        import firebase from 'firebase';
    export default {
        name: 'signUp',
        data() {
            return {}
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => alert('success'))
                .catch(err => alert("Oops, " + err))
            }
        }
    }
</script>

<style scoped>
</style>