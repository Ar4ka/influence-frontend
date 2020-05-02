<template>
    <div class="home">
        <div class="container is-desktop">
            <img style="max-width: 50%;" alt="Corp logo" src="../assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
    }
</script>
