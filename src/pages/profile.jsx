import { Auth } from 'aws-amplify'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'hooks/use-user'

const Profile = () => {
  const { user, isLoading, error } = useUser()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = async () => {
      if (!user) {
        await router.push('/signin')
      }
    }

    handleRouteChange()
  }, [user, router])

  if (isLoading || error)
    return (
      <div className="flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )

  return (
    <div>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="text-xl font-black">Welcome, {user.email}</p>
      <button
        onClick={async () => {
          Auth.signOut()
          setUser(null)
          await router.push('/signin')
        }}
        className="mt-10 w-full rounded bg-pink-600 p-3 text-white"
      >
        Sign Out
      </button>
    </div>
  )
}

export default Profile
