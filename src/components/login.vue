<template>
    <div>
        <form>
             <p><label>账号</label><input type="text"></p>
             <p><label>密码</label><input type="password"></p>
             <p><button type="button" @click="locals">登录</button></p>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        locals(){
            window.sessionStorage.setItem('token','123')
            this.$router.push('/index')
           
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
form{
    width:300px;
    height: 300px;
    border: 1px solid #ccc;
}
</style>

