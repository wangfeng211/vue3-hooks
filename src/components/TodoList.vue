<template>
  <h1>To do List</h1>
  添加一条记录: <input type="text" v-model="data.toAddData.title" />
  <button @click="onAdd">添加</button>
  <br />
  <br />
  <table>
    <thead>
      <tr>
        <td>id</td>
        <td>名称</td>
        <td>是否完成</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data.list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.isFinished }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

import TodoListHooks from './hooks/todoList'

const {data, onAdd} = TodoListHooks()

</script>
