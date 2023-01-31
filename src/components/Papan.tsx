import { FC } from 'react'
import Gineman from './Gineman'

const Papan: FC = () => {
  const name = import.meta.env.VITE_APP_NAME
  const description = import.meta.env.VITE_APP_DESCRIPTION

  return (
    <div className="papan">
      <h1>{name}</h1>
      <p className="katrangan">{description}</p>

      <Gineman />
    </div>
  )
}

export default Papan
