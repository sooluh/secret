import App from './App'
import ReactDOM from 'react-dom'
import './styles.scss'

if (typeof window !== 'undefined') {
  import('./pwa')
}

ReactDOM.render(<App />, document.getElementById('app'))
