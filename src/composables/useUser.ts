import { useUsersStore } from '../stores/usersStore'
import { storeToRefs } from 'pinia'

export function useUsers() {
  const store = useUsersStore()

  const {
    users,
    posts,
    selectedUser,
    filteredUsers,
    searchQuery,
    isModalOpen
  } = storeToRefs(store)

  return {
    users,
    posts,
    selectedUser,
    filteredUsers,
    searchQuery,
    isModalOpen,
    fetchUsers: store.fetchUsers,
    fetchPosts: store.fetchPosts,
    setSearch: store.setSearch
  }
}
