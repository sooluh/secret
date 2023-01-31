import { FC } from 'react'
import parse from 'html-react-parser'
import Papan from './components/Papan'
import Pangangge from './components/Pangangge'

const App: FC = () => {
  const analytics = import.meta.env.VITE_APP_ANALYTICS

  return (
    <>
      <Papan />
      <Pangangge />
      {parse(analytics)}
    </>
  )
}

export default App
