import Pesen from './Pesen'
import fetch from '../libs/fetcher'
import { FC, useState, useEffect } from 'react'

const Pangangge: FC = () => {
  const [messages, setMessages] = useState<any[]>()

  useEffect(() => {
    fetch().then((parents: any) => {
      setMessages(parents)
    })
  }, [])

  return (
    <div className="pangangge">
      <h2>Timeline</h2>

      {messages
        ? messages.map(item => (
            <Pesen
              key={item.id}
              id={item.id}
              message={item.message}
              date={item.created}
            />
          ))
        : 'Sedang memuat ...'}
    </div>
  )
}

export default Pangangge
