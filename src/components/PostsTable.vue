<script setup lang="ts">

import { NModal, NDataTable } from 'naive-ui'
import { useUsers } from '../composables/useUser'

const {
  selectedUser,
  posts,
  isModalOpen
} = useUsers()

const columns = [
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Body',
    key: 'body'
  }
]
</script>

<template>
  <n-modal
    v-model:show="isModalOpen"
    preset="card"
    style="width: 900px; max-width: 90vw;"
    @close="isModalOpen = false"
  >
    <template>
      {{ selectedUser?.name }}'s Posts
    </template>

    <n-data-table
      :columns="columns"
      :data="posts"
      :pagination="{ pageSize: 5 }"
      bordered
    />
  </n-modal>
</template>
