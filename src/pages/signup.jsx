import { Auth } from 'aws-amplify'
import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useStore, selectSetEmail, selectSetPassword } from 'store'

const Signup = () => {
  const router = useRouter()

  const setEmail = useStore(selectSetEmail)
  const setPassword = useStore(selectSetPassword)

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { email, password } = formState

  const onChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

  const signUp = async () => {
    try {
      await Auth.signUp({ username: email, password, attributes: { email } })
      setEmail(email)
      setPassword(password)
      router.push('/confirm')
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthWrapper>
      <p className="text-3xl font-black">Sign up for an account</p>
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
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <div className="mt-7">
        <label className="text-sm">Confirm Password</label>
        <Input name="confirmPassword" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signUp}
        className="mt-10 w-full rounded bg-pink-600 p-3 text-white hover:bg-pink-700"
      >
        Continue
      </button>
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
