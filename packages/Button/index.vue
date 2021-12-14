<template>
    <div>
        <div>{{name}}</div>
    </div>
</template>
<script>
export default {
    name:"MyButton",
    data(){
        return {
            name:"button"
        }
    },
    mounted(){
        alert("这是一个button组件")
    }
}
</script>