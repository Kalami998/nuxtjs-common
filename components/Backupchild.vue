<template>
  <div class="home">
    i am backup child page count is ->{{ sendCount.count }}
  </div>
</template>

<script>
export default {
  name: "backupChild",
  inject: ["sendCount"],
  components: {}
};
</script>
