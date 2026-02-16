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
  <div>
    <h1>Table of Users</h1>
    <h3>by: Jazel Equia</h3>
    <SearchInput />
    <UsersTable />
    <PostsTable />
  </div>
</template>
