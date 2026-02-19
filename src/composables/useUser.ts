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
    isModalOpen,
    selectedCity
  } = storeToRefs(store)

  return {
    users,
    posts,
    selectedUser,
    filteredUsers,
    searchQuery,
    isModalOpen,
    selectedCity,
    fetchUsers: store.fetchUsers,
    fetchPosts: store.fetchPosts
  }
}
