<template>
    <div class = "page-main">
        <h2>测试</h2>
        <el-input class="input_width" type='tel' maxlength="11" v-model="usePhone" @change="testPhone2" clearable></el-input>
        <visibilitychange></visibilitychange>
        <div id="move1" class="box-style" @mouseenter="moveDistance('#move1')">1</div>
        <div id="move2" class="box-style" @mouseenter="moveDistance('#move2')">2</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { testPhone } from '../../plugins/test.js';
import visibilitychange from '../../components/visibilitychange.vue';
/*
 //声明1
import Vue from 'vue'
const appPro = Vue.extend({
    props: {
        proMessage: String
    }
})
export default class testES extends appPro {
    title: String = '哈哈哈哈'
}
*/ 
@Component ({
    
    components:{
        visibilitychange
    },

    head() {
        return {
            title: '测试ES7',
            description: '测试运行功能'
        }
    },
    
}) // 这里就算没有component也要保留"@Component"，否则报错
 //声明2
export default class testES extends Vue {
    title: String = '略略略'
    usePhone: any = ''

    mounted() {
        // console.log('引入数据',testPhone)
        this.outLog('2321')
        // const warpped = this.decoratorLog(this.consoleLog)
        // warpped('2321')
        console.log('本document',document);
        console.log('window',window);
        let boxOne:any = document.querySelector('#move1') 
        // boxOne.onmouseenter = this.moveDistance()
        console.log('对象包含元素',boxOne);
        let boxTwo:any = document.querySelector('#move2') 
        // boxTwo['onmouseenter'] = this.moveDistance()
    }

    // 方法函数可以不用在放在methods里
    testPhone2():void {
        console.log('导出数据',);
        // if (this.testPhone(this.usePhone)) {

        // }
        if (testPhone(this.usePhone)) {

        } else {
            this.$message.error('手机号格式错误');
        }
    }
    
    outLog(content:String):void {
        console.log('content:',content);
    }

    decoratorLog(obj:any) {
        let _this = this
        return function () {
            console.log('start');
            const res = obj.apply(_this,arguments)
            console.log('end')
            // return res
        }
    }

    moveDistance(targetObj:any):void{
        console.log('目标',document.querySelector(targetObj).style)
        console.log('函数调用对象',arguments)
        document.querySelector(targetObj).style.left = document.querySelector(targetObj).left + 20 + 'px'
    }
    
}
</script>

<style lang="less" scoped>
.input_width {
    width: 200px;
}
.box-style {
    width: 40px;
    height: 40px;
    background: rgb(125, 125, 231);
    color: #fff;
    margin: 12px 0;
}
</style>