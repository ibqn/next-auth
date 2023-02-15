import { create } from 'zustand'
import { createEmailSlice } from './email-slice'
import { createPasswordSlice } from './password-slice'

export const useStore = create((...a) => ({
  ...createEmailSlice(...a),
  ...createPasswordSlice(...a),
}))
