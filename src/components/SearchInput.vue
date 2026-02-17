<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useUsers } from '../composables/useUser'

const { searchQuery, setSearch } = useUsers()
</script>

<template>
    <div class="search-wrapper">
  <n-input
    v-model:value="searchQuery"
    placeholder="Search by name"
    clearable
    @update:value="setSearch"
    class="search-input"
  />
  </div>
</template>

<style scoped src="../styles/SearchInput.css"></style>