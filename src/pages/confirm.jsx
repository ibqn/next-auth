import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'

const Confirm = () => {
  const router = useRouter()
  const onChange = () => {}
  const confirmSignUp = () => {}

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Confirm Sign Up</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <button
        onClick={() => confirmSignUp()}
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
