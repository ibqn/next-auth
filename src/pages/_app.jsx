import { Header } from 'components/header'
import { Wrapper } from 'components/wrapper'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
