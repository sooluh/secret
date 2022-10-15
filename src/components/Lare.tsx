import { FC } from 'react'
import moment from 'moment'

const Lare: FC<{ childrens?: any[] }> = ({ childrens }) => {
  const date = (date: string) => {
    return moment(date).locale('id').format('DD MMM YYYY HH:mm')
  }

  console.log(childrens)

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
