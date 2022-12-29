import { withSSRContext, Auth } from 'aws-amplify'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Protected = ({ user }) => {
  const router = useRouter()

  console.log('client side user', user)
  return (
    <div className="flex items-center justify-center">
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-32">
        <p className="text-xl font-black">Welcome {user.email} to SSR route!</p>
        <button
          onClick={async () => {
            Auth.signOut()
            await router.push('/signin')
          }}
          className="mt-10 w-full rounded bg-pink-600 p-3 text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        authenticated: true,
        user: user.attributes,
      },
    }
  } catch (error) {
    console.log({ error })
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    }
  }
}

export default Protected
