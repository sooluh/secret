import App from './App'
import ReactDOM from 'react-dom'
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
