import { FC, useState, useEffect } from 'react'
import Pesen from './Pesen'
import results from '../libs/fetcher'

const Pangangge: FC = () => {
  const [messages, setMessages] = useState<any[]>()

  const reload = () => {
    results().then((messages: any) => {
      const childrens = messages.filter((item: any) => {
        return item.parent != null
      })

      const parents = messages
        .filter((item: any) => {
          return item.parent == null
        })
        .map((parent: any) => {
          parent.childrens = childrens.filter((child: any) => {
            return child.parent == parent.id
          })

          return parent
        })

      setMessages(parents)
    })
  }

  useEffect(() => {
    reload()
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
              childrens={item.childrens}
            />
          ))
        : 'Memuat ...'}
    </div>
  )
}

export default Pangangge
