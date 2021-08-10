<template>
  <div class="home">
    cout now is -> {{ count }}
    <button @click="++count">加一</button>
    <button @click="--count">减一</button>
    <BackupChild></BackupChild>
  </div>
</template>
<script type="ts">
import Vue from "vue";
import BackupChild from "~/components/Backupchild";
// import { Component, Vue, Watch } from 'nuxt-property-decorator';
export default  Vue.extend ({
  components: {
    BackupChild,
  },
  data() {
    return {
      count: 10
    }
  },
  provide() {
    let sendCount = {}
    Object.defineProperty(sendCount,'count',{
      get: ()=> this.count
    })
    return {
      sendCount
    }
  },
  mounted() {
    console.log(this.$storeCommit,'3123')
  },
  methods:{

  },

});
</script>

<style></style>
