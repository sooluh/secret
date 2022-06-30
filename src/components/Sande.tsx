import { FC } from 'react'
import { Offline } from 'react-detect-offline'

const Sande: FC = () => (
  <Offline>
    <div className="pangetan sande">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart-broken"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        <path d="M12 6l-2 4l4 3l-2 4v3"></path>
      </svg>

      <h2>Mau ke NASA kak?</h2>

      <p>
        Cek dulu atuh koneksi internetnya, bisi ada kendala kan? atau kuotanya
        abis kak? mau aku isiin? 🤨
      </p>
    </div>
  </Offline>
)

export default Sande
