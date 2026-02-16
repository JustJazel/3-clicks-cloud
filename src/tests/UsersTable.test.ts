import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UsersTable from '../components/UsersTable.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useUsersStore } from '../stores/usersStore'
import axios from 'axios'

vi.mock('axios')

describe('UsersTable.vue', () => {
  let store: ReturnType<typeof useUsersStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useUsersStore()
  })

  it('clicking a row selects the user', async () => {
    // Stub axios.get for posts
    ;(axios.get as any).mockResolvedValueOnce({
      data: [{ id: 101, title: 'Test Post' }],
    })

    store.users = [
      { id: 1, name: 'Leanne', email: '', address: { city: '' }, company: { name: '' } },
    ]

    const wrapper = mount(UsersTable)

    // Click first row
    await wrapper.find('tbody tr').trigger('click')

    expect(store.selectedUser?.name).toBe('Leanne')
    expect(store.posts?.[0]?.title).toBe('Test Post')
  })
})
