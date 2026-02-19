<script setup lang="ts">
import { NDataTable, NInput, NSelect } from 'naive-ui'
import { useUsersStore } from '../stores/usersStore'
import type { User } from '../types/User'

const store = useUsersStore()

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  {
    title: 'City',
    key: 'city',
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
      await store.fetchPosts(row)
    }
  }
}
</script>

<template>
    <n-select
      v-model:value="store.selectedCity"
      :options="store.cities.map(city => ({
        label: city,
        value: city
      }))"
      placeholder="Filter by city"
      clearable
      class="city-select"
    />


  <n-data-table
    :columns="columns"
    :data="store.filteredUsers"
    :row-props="rowProps"
    striped
    bordered
  />
</template>

<style scoped>
.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.search-input,
.city-select {
  width: 250px;
}
</style>
