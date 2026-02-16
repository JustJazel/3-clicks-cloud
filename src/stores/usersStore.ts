// userStore.ts
import { defineStore } from 'pinia'
import { getUsers, getPosts } from '../services/api'
import type { User } from '../types/User'
import type { Post } from '../types/Post'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    posts: [] as Post[],
    selectedUser: null as User | null,
    searchQuery: ''
  }),

  getters: {
    filteredUsers(state) {
      return state.users.filter(user =>
        user.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
      )
    }
  },

  actions: {
    async fetchUsers() {
      this.users = await getUsers()
    },

    async fetchPosts(user: User) {
      this.selectedUser = user
      this.posts = await getPosts(user.id)
    },

    setSearch(query: string) {
      this.searchQuery = query
    }
  }
})
