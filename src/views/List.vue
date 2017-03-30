<template>
  <ul>
    <li v-for="user in users">姓名：{{user.name}} <br> 年龄：{{user.age}}</li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      users: [{
        name: 'yecheng',
        age: 24
      }, {
        name: '歪闹',
        age: 27
      }]
    }
  }
}
</script>
