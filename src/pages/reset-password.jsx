import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { useState } from 'react'
import { useStore, selectSetEmail } from 'store'

const ResetPassword = () => {
  const setEmail = useStore(selectSetEmail)

  const [formState, setFormState] = useState({
    email: '',
  })
  const { email } = formState
  const router = useRouter()

  const onChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

  const forgotPassword = async () => {
    try {
      await Auth.forgotPassword(email)
      setEmail(email)
      await router.push('/confirm-reset-password')
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Reset password</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>

      <button
        onClick={forgotPassword}
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

export default ResetPassword
