import moment from 'moment'
import fetch from '../libs/fetcher'
import { FC, useState, useEffect } from 'react'

const Lare: FC<{ id: number }> = ({ id }) => {
  const [childrens, setChildrens] = useState<any[]>()

  useEffect(() => {
    fetch(id).then((childrens: any) => {
      setChildrens(childrens)
    })
  }, [])

  const date = (date: string) => {
    return moment(date).locale('id').format('DD MMM YYYY HH:mm')
  }

  return childrens && childrens.length > 0 ? (
    <ul className="lare">
      {childrens.reverse().map(child => (
        <li key={child.id} className={child.owner ? 'gadhah' : ''}>
          {child.message}

          <small>{date(child.created)}</small>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  )
}

export default Lare
