<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import { useUsers } from '../composables/useUser'
import type { User } from '../types/User'

const { filteredUsers, fetchPosts } = useUsers()

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  {
    title: 'City',
    key: 'address',
    render(row: User) {
      return row.address.city
    }
  },
  {
    title: 'Company',
    key: 'company',
    render(row: User) {
      return row.company.name
    }
  }
]

function rowProps(row: User) {
  return {
    style: 'cursor: pointer;',
    onClick: async () => {
      await fetchPosts(row)
    }
  }
}
</script>

<template>
  <div class="table-container">
    <n-data-table
      :columns="columns"
      :data="filteredUsers"
      :row-props="rowProps"
      striped
      bordered
    />
  </div>
</template>
<style scoped src="../styles/UsersTable.css"></style>
