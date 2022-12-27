import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

export const SocialSignIn = () => {
  return (
    <div className="flex flex-col">
      <button
        className="mt-10 focus:outline-none"
        onClick={async () =>
          await Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
      >
        <div className="flex items-center justify-center rounded-full border border-gray-300 p-2 hover:border-pink-700">
          <FaGoogle size="38" className="h-8 text-red-600" />
          <p className="ml-3">Sign in with Google</p>
        </div>
      </button>
      <button
        className="mt-4 focus:outline-none"
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook,
          })
        }
      >
        <div className="flex items-center justify-center rounded-full border border-gray-300 p-2 hover:border-pink-700">
          <FaFacebook size="38" className="h-8 text-blue-600" />
          <p className="ml-3">Sign in with Facebook</p>
        </div>
      </button>
    </div>
  )
}
