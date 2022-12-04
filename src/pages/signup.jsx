import { AuthWrapper } from 'components/auth-wrapper'
import { Input } from 'components/input'
import { useRouter } from 'next/router'

const Signup = () => {
  const router = useRouter()

  const onChange = () => {}
  const signUp = () => {}

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
          <span className="ml-auto text-pink-500">Forgot your password?</span>
        </label>
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <div className="mt-7">
        <label className="text-sm">Repeat Password</label>
        <Input name="repeat password" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signUp}
        className="mt-10 w-full rounded bg-pink-600 p-3 text-white"
      >
        Continue
      </button>
      <p className="mt-12 text-sm font-light">
        Already have an account?
        <span
          className="cursor-pointer text-pink-600"
          onClick={() => router.push('/signin')}
        >
          {' '}
          Sign In.
        </span>
      </p>
    </AuthWrapper>
  )
}

export default Signup