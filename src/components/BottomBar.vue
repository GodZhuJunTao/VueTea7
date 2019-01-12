<template>
    <footer class="bottom-bar">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item v-for="tab in tabs" :key="tab.name" :id="tab.path" @click.native="goto(tab.path)">
                <i slot="icon" :class="tab.icon" class="homeIcon"></i>
                {{tab.text}}
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            tabs:this.$store.state.tabs,
            selected:this.$store.state.selected
        }
    },
    methods:{
        goto(path){
            this.$store.commit('changeSelected',{selected:path})
            this.$router.push({path});
        }
    }
}
</script>

<style>
    .bottom-bar{
        height: 55px;
        width: 100%;
    }
</style>
