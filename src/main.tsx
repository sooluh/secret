import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

if (typeof window !== 'undefined') {
  import('./pwa')
}

ReactDOM.render(
  <ChakraProvider resetCSS>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
