import { defineStore } from 'pinia'
import { getUsers, getPosts } from '../services/api'
import type { User } from '../types/User'
import type { Post } from '../types/Post'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    posts: [] as Post[],
    selectedUser: null as User | null,
    searchQuery: '',
    selectedCity: '',
    isModalOpen: false
  }),

  getters: {
    cities(state) {
      return [...new Set(state.users.map(user => user.address.city))]
    },

    filteredUsers(state) {
      return state.users.filter(user => {
        const matchesName = user.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())

        const matchesCity = state.selectedCity
          ? user.address.city.toLowerCase() === state.selectedCity.toLowerCase()
          : true

        return matchesName && matchesCity
      })
    }
  },

  actions: {
    async fetchUsers() {
      this.users = await getUsers()
    },

    async fetchPosts(user: User) {
      this.selectedUser = user
      this.posts = await getPosts(user.id)
      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false
      this.selectedUser = null
      this.posts = []
    }
  }
})
