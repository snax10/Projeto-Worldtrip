import { ChakraProvider } from '@chakra-ui/react'
import { AppProps} from 'next/app'
import { theme } from '../styles/theme'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
