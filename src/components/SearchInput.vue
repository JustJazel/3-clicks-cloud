<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useUsers } from '../composables/useUser'

const { searchQuery, setSearch } = useUsers()
</script>

<template>
  <n-input
    v-model:value="searchQuery"
    placeholder="Search by name"
    clearable
    @update:value="setSearch"
    class="search-input"
  />
</template>

<style scoped src="../styles/SearchInput.css"></style>