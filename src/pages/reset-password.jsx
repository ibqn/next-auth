import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { AuthWrapper } from 'components/auth-wrapper'

const ResetPassword = () => {
  const router = useRouter()

  const onChange = () => {}

  const forgotPasswordSubmit = () => {}

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Reset password</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <div className="mt-6">
        <label className="text-sm">New Password</label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button
        onClick={() => forgotPasswordSubmit()}
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
