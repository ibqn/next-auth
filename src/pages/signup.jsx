import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useStore, selectSetEmail, selectSetPassword } from 'store'

const Signup = () => {
  const router = useRouter()

  const setEmail = useStore(selectSetEmail)
  const setPassword = useStore(selectSetPassword)

  const [signInError, setSignInError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'all',
  })

  const password = useRef({})
  password.current = watch('password', '')

  const signUp = async (data) => {
    const { email, password } = data

    try {
      await Auth.signUp({ username: email, password, attributes: { email } })
      setEmail(email)
      setPassword(password)
      router.push('/confirm')
    } catch (error) {
      setSignInError(error)
      console.log({ error })
    }
  }

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(signUp)}>
        <p className="text-3xl font-black">Sign up for an account</p>
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
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters.',
              },
            })}
            type="password"
          />

          {errors.password && (
            <p className="text-pink-500">{errors.password.message}</p>
          )}
        </div>
        <div className="mt-7">
          <label className="text-sm">Confirm Password</label>
          <Input
            {...register('confirmPassword', {
              required: 'Password confirmation is required.',
              validate: (value) =>
                value === password.current || 'The passwords do not match.',
            })}
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-pink-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-10 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
        >
          Continue
        </button>
        {signInError && (
          <div className="mt-6 flex justify-center font-bold text-pink-600">
            Sign up failed!
          </div>
        )}
      </form>
      <p className="mt-12 text-sm font-light">
        {'Already have an account? '}
        <span
          className="cursor-pointer text-pink-500 hover:text-pink-700"
          onClick={() => router.push('/signin')}
        >
          Sign In
        </span>
        .
      </p>
    </AuthWrapper>
  )
}

export default Signup
