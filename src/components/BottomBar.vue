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
            tabs:this.$store.state.tabs
        }
    },
    computed:{
        selected:{
            get(){
                return this.$store.state.selected;

            },set(){}
        }
    },
    methods:{
        goto(path){
            this.$store.commit('changeSelected',{selected:path});
            this.$router.push({path});
        },
        confirm(path){
            this.$store.commit('changeSelected',{selected:path});
        }
    },
    created(){
        let confirmPath = location.href.split('#')[1];
        this.confirm(confirmPath);
    }
}
</script>

<style>
    .bottom-bar{
        height: 55px;
        width: 100%;
    }
</style>
