import { FC, useState } from 'react'
import { send } from '../libs/fetcher'

const Wangsuli: FC<{ parent: number }> = ({ parent }) => {
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<number>(1)

  const submit = async (evt: any) => {
    evt.preventDefault()

    const value = String(message).trim()
    if (value.length === 0) return

    setStatus(2)
    const response = await send(value, parent)

    setStatus(3)

    setTimeout(() => {
      setStatus(1)
    }, 20_000)

    return response !== null ? setMessage('') : ''
  }

  const update = (evt: any) => {
    setMessage(evt.target.value)
  }

  return (
    <>
      <form className="wangsuli" onSubmit={submit}>
        <input
          value={message}
          onChange={update}
          type="text"
          name="wangsuli"
          placeholder="tafadhol ditanggapi"
          disabled={status === 2}
        />

        <button className="kintun" onClick={submit}>
          {status === 2 ? '...' : 'Balas'}
        </button>
      </form>

      {status === 3 && (
        <div className="pangetan sukses wangsulan">
          <p>
            Tanggapan anta/anti ana cek dulu ya, InsyaAllah kalo perlu
            ditampilkan ana tampilkan, Jazakumullah.
          </p>
        </div>
      )}
    </>
  )
}

export default Wangsuli
