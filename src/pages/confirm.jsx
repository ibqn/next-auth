import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { selectEmail, useStore, selectPassword, selectSetPassword } from 'store'

const Confirm = () => {
  const email = useStore(selectEmail)
  const password = useStore(selectPassword)
  const setPassword = useStore(selectSetPassword)

  const [formState, setFormState] = useState({
    authCode: '',
  })

  const { authCode } = formState

  const router = useRouter()

  const onChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, authCode)
      await Auth.signIn(email, password)
      setPassword(null)
      await router.push('/profile')
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Confirm Sign Up</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <button
        onClick={confirmSignUp}
        className="mt-4 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
      >
        Continue
      </button>
      <button
        onClick={() => router.push('/signin')}
        className="mt-6 text-sm text-pink-500 hover:text-pink-700"
      >
        Cancel
      </button>
    </AuthWrapper>
  )
}

export default Confirm
