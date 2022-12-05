export const createEmailSlice = (set) => ({
  email: '',
  setEmail: (email) => set(() => ({ email })),
})

export const selectEmail = (state) => state.email
export const selectSetEmail = (state) => state.setEmail
