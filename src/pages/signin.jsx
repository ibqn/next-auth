import { Input } from 'components/input'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { AuthWrapper } from 'components/auth-wrapper'
import { useUser } from 'hooks/use-user'
import { useRouter } from 'next/router'
import { SocialSignIn } from 'components/social-signin'

const Signin = () => {
  const { isLoading } = useUser()
  const router = useRouter()

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formState

  const signIn = async () => {
    try {
      await Auth.signIn(email, password)
      router.push('/profile')
    } catch (error) {
      console.log({ error })
    }
  }

  const onChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

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
        <label className="flex text-sm">
          Password
          <span
            onClick={() => router.push('/reset-password')}
            className="ml-auto cursor-pointer text-pink-500 hover:text-pink-700"
          >
            Forgot your password?
          </span>
        </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button
        onClick={signIn}
        className="mt-6 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
      >
        Continue
      </button>
      <SocialSignIn />
      <p className="mt-12 text-sm font-light">
        {"Don't have an account? "}
        <span
          onClick={() => router.push('/signup')}
          role="button"
          className="cursor-pointer text-pink-500 hover:text-pink-700"
        >
          Sign Up
        </span>
        .
      </p>
    </AuthWrapper>
  )
}
export default Signin
