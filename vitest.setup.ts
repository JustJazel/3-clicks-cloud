// vitest.setup.ts
import { vi } from 'vitest'
import axios from 'axios'

// ✅ Mock axios globally so tests don’t hit the real API
vi.mock('axios')

// ✅ Optional: initialize Pinia globally so you don’t need to repeat it in every test
import { setActivePinia, createPinia } from 'pinia'
setActivePinia(createPinia())