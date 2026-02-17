import { vi } from 'vitest'
import axios from 'axios'
vi.mock('axios')
import { setActivePinia, createPinia } from 'pinia'
setActivePinia(createPinia())