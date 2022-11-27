import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'

export const useUser = () => {
  const [state, setState] = useState({
    user: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const checkUser = async () => {
      try {
        setState((state) => ({ ...state, isLoading: true }))
        const user = await Auth.currentAuthenticatedUser()
        setState((state) => ({
          ...state,
          user: user.attributes,
          isLoading: false,
        }))
      } catch (error) {
        setState({ user: null, error, isLoading: false })
      }
    }

    checkUser()
  }, [])

  return state
}
