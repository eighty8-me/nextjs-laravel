import React, { useState } from 'react'
import KenAll from 'ken-all'; // 郵便番号 → 住所 検索モジュール

const SearchAddress: React.FC = () => {
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');

  const handleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setPostCode(val)

    if (val === '') {
      setAddress('')
    }

    if (val.length === 7) {
      KenAll(val).then((res) => {
        if (res.length === 0) {
          setAddress('該当する住所はありません')
        } else {
          console.log(res[0])
          setAddress(res[0].join(''))
        }
      })
    }
  }

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  return(
    <>
      <div>
        <label>郵便番号:&nbsp;
          <input type="text" value={postCode} onChange={handleChangePostCode} maxLength={7} />
        </label>
      </div>
      <div>
        <label>住所:&nbsp;
          <input type="text" value={address} onChange={handleChangeAddress} />
        </label>
      </div>
    </>
  )
}

export default SearchAddress
