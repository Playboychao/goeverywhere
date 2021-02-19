<template>
    <transition>
        <slot>

        </slot>
    </transition>
</template>

<script>
export default {
    name:"FadeAnimation"
}
</script>

<style lang="stylus" scoped>
    .v-entry .v-leave-to
        opacity 0
    .v-entry-active, .v-leave-active
        transition opacity .5s 
</style>