export const createPasswordSlice = (set) => ({
  password: '',
  setPassword: (password) => set(() => ({ password })),
})

export const selectPassword = (state) => state.password
export const selectSetPassword = (state) => state.setPassword
