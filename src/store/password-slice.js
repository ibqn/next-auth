export const createPasswordSlice = (set) => ({
  password: '',
  setPassword: (email) => set(() => ({ email })),
})

export const selectPassword = (state) => state.password
export const selectSetPassword = (state) => state.setPassword
