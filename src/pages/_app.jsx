import { Header } from 'components/header'
import { Wrapper } from 'components/wrapper'
import 'styles/globals.css'

import { Amplify } from 'aws-amplify'
import awsConfig from 'aws-exports'

Amplify.configure({
  ...awsConfig,
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
