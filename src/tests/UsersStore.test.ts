import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUsersStore } from '../stores/usersStore'

describe('users store', () => {
  let store: ReturnType<typeof useUsersStore>

  beforeEach(() => {
    // Initialize Pinia
    setActivePinia(createPinia())
    store = useUsersStore()
  })

  it('sets and filters users correctly', () => {
    // Mock users
    store.users = [
      { id: 1, name: 'Leanne', email: 'leanne@test.com', address: { city: 'City1' }, company: { name: 'Comp1' } },
      { id: 2, name: 'Ervin', email: 'ervin@test.com', address: { city: 'City2' }, company: { name: 'Comp2' } }
    ]

    // Set search query
    store.setSearch('Lea')

    // Filtered users should only include Leanne
    expect(store.filteredUsers.length).toBe(1)
    expect(store.filteredUsers[0]?.name).toBe('Leanne')
  })

  it('selects a user correctly', () => {
    const user = { id: 1, name: 'Leanne', email: '', address: { city: '' }, company: { name: '' } }
    store.selectedUser = user
    expect(store.selectedUser).toEqual(user)
  })
})
