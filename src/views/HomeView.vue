<script setup lang="ts">
import { onMounted } from 'vue'
import { useUsersStore } from '../stores/usersStore'
import UsersTable from '../components/UsersTable.vue'
import PostsTable from '../components/PostsTable.vue'
import SearchInput from '../components/SearchInput.vue'

const store = useUsersStore()

onMounted(() => {
  store.fetchUsers()
})
</script>

<template>
 <div class="header">
    <h1>Table of Users</h1>
    <h3>by: Jazel Equia</h3>
  </div>
  <div class="app-layout">
    <SearchInput />
    <UsersTable />
    <PostsTable />
  </div>
   
</template>

<style>
.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  margin-bottom: 8px;
}

.header h3 {
  font-weight: 400;
  opacity: 0.7;
}


</style>