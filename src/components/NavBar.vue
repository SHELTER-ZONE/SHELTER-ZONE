<template>
    <div id="nav" data-aos="fade-down" data-aos-duration="1000">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/docs">Docs</router-link> |
        <router-link to="/join">Join</router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style lang="scss" scoped>
    #nav {
        font-size: 20pt;
        padding: 30px;
        background: transparent;

        a {
            font-weight: bold;
            color: #2c3e50;
            transition: 1s;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

        a:hover {
            font-size: 30pt;
            transition: 0.5s;
        }
    }
</style>