<script setup lang="ts">
import { ref, watch } from 'vue'
import { NModal, NCard, NDataTable } from 'naive-ui'
import { useUsers } from '../composables/useUser'

const { selectedUser, posts } = useUsers()
const showModal = ref(false)

watch(selectedUser, (newVal) => {
  if (newVal) {
    showModal.value = true
  }
})
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card
       style="width: 90vw; max-width: 900px; max-height: 80vh;"
    content-style="overflow: auto;"
      :title="selectedUser?.name + `'s Posts`"
      closable
      @close="showModal = false"
    >
      <n-data-table
        :columns="[
          { title: 'Title', key: 'title' },
          { title: 'Body', key: 'body' }
        ]"
        :data="posts"
        striped
      />
    </n-card>
  </n-modal>
</template>
