import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { selectEmail, useStore, selectPassword, selectSetPassword } from 'store'

const Confirm = () => {
  const email = useStore(selectEmail)
  const password = useStore(selectPassword)
  const setPassword = useStore(selectSetPassword)

  const [signInError, setSignInError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const router = useRouter()

  const confirmSignUp = async (data) => {
    const { authCode } = data

    try {
      await Auth.confirmSignUp(email, authCode)
      await Auth.signIn(email, password)
      setPassword(null)
      await router.push('/profile')
    } catch (error) {
      setSignInError(error)
      console.log({ error })
    }
  }

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(confirmSignUp)}>
        <p className="text-3xl font-black">Confirm Sign Up</p>
        <div className="mt-10">
          <label className="text-sm">Confirmation Code</label>
          <Input {...register('authCode', { required: true })} />
          {errors.authCode && (
            <p className="text-pink-500">Confirmation code is required.</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
        >
          Continue
        </button>
        {signInError && (
          <div className="mt-6 flex justify-center font-bold text-pink-600">
            Confirmation failed!
          </div>
        )}
      </form>
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
