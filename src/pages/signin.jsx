import { Input } from 'components/input'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { AuthWrapper } from 'components/auth-wrapper'
import { useUser } from 'hooks/use-user'
import { useRouter } from 'next/router'

const Login = () => {
  const { isLoading } = useUser()
  const router = useRouter()

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formState

  async function signIn() {
    try {
      await Auth.signIn(email, password)
      router.push('/profile')
    } catch (error) {
      console.log({ error })
    }
  }

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  if (isLoading) {
    return (
      <AuthWrapper>
        <div className="flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </AuthWrapper>
    )
  }

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Sign in to your account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <label className="text-sm">
          Password
          <span
            onClick={() => router.push('/forgotPassword')}
            className="ml-8 cursor-pointer text-pink-500 sm:ml-48"
          >
            Forgot your password?
          </span>
        </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button
        onClick={signIn}
        className="mt-6 w-full rounded bg-pink-600 p-3 text-white"
      >
        Continue
      </button>
      {/* <SocialSignIn /> */}
      <p className="mt-12 text-sm font-light">
        {"Don't have an account?"}
        <span
          onClick={() => router.push('/signup')}
          role="button"
          className="cursor-pointer text-pink-600"
        >
          {' '}
          Sign Up.
        </span>
      </p>
    </AuthWrapper>
  )
}
export default Login
