import { Header } from 'components/header'
import { Wrapper } from 'components/wrapper'
import 'styles/globals.css'

import Amplify from 'aws-amplify'
import config from 'aws-exports'

Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
