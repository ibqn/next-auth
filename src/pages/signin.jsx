import { Input } from 'components/input'
import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { useUser } from 'hooks/use-user'
import { useRouter } from 'next/router'
import { SocialSignIn } from 'components/social-signin'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Signin = () => {
  const { isLoading } = useUser()
  const router = useRouter()

  const [signInError, setSignInError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const signIn = async (data) => {
    const { email, password } = data
    try {
      await Auth.signIn(email, password)
      router.push('/profile')
    } catch (error) {
      setSignInError(error)
      console.log({ error })
    }
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
      <form onSubmit={handleSubmit(signIn)}>
        <p className="text-3xl font-black">Sign in to your account</p>
        <div className="mt-10">
          <label className="text-sm">Email</label>
          <Input type="email" {...register('email', { required: true })} />
          {errors.email && <p className="text-pink-500">Email is required.</p>}
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
          <Input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="text-pink-500">Password is required.</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
        >
          Continue
        </button>
        {signInError && (
          <div className="mt-6 flex justify-center font-bold text-pink-600">
            Sign in failed!
          </div>
        )}{' '}
      </form>
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
