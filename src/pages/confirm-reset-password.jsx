import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { AuthWrapper } from 'components/auth-wrapper'
import { useState } from 'react'
import { useStore, selectEmail } from 'store'

const ConfirmResetPassword = () => {
  const email = useStore(selectEmail)

  const router = useRouter()

  const [formState, setFormState] = useState({
    authCode: '',
    password: '',
    confirmPassword: '',
  })

  const { authCode, password } = formState

  const onChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

  const forgotPasswordSubmit = async () => {
    await Auth.forgotPasswordSubmit(email, authCode, password)
    await router.push('/signin')
  }

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Confirm reset password</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <div className="mt-6">
        <label className="text-sm">New Password</label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <div className="mt-6">
        <label className="text-sm">Confirm New Password</label>
        <Input type="password" name="confirmPassword" onChange={onChange} />
      </div>
      <button
        onClick={forgotPasswordSubmit}
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

export default ConfirmResetPassword
