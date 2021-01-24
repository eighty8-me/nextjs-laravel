import React, { useState, SyntheticEvent } from 'react'

type User = {
  name: string,
  phone: string,
  zip: string,
  address: string,
  address2: string,
  message: string,
}

const profile: User = {
  name: '蜂谷庸正',
  phone: '08044018796',
  zip: '3510024',
  address: '埼玉県朝霞市',
  address2: '泉水3-14-80 シティ光陽朝霞泉水905',
  message: 'よろしくお願いします！',
}

const StateForm: React.FC = () => {

  const [user, setUser] = useState<User>(profile)
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('-- change name --', e.target.value)
    setUser({ ...user, name: e.target.value })
  }

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('-- change phone --', e.target.value)
    setUser({ ...user, phone: e.target.value })
  }

  const handleChangeZip = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('-- change zip --', e.target.value)
    setUser({ ...user, zip: e.target.value })
  }

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('-- change address --', e.target.value)
    setUser({ ...user, address: e.target.value })
  }

  const handleChangeAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('-- change address2 --', e.target.value)

    // console.log('--- Before ---', { ...user })
    // console.log('--- After ---', { ...user, address2: e.target.value })

    setUser({ ...user, address2: e.target.value })
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('-- change message --', e.target.value)
    setUser({ ...user, message: e.target.value })
  }

  const handleConfirm = (e: SyntheticEvent) => {
    e.preventDefault();
    const userText = `Name: ${user.name}
    Phone: ${user.phone}
    Zip: ${user.zip}
    Address: ${user.address}
    Address2: ${user.address2}
    Message: ${user.message}`

    alert(userText)
  }

  return(
    <>
      <div>
        <ul>
          <li>お名前: {user.name}</li>
          <li>携帯番号: {user.phone}</li>
          <li>郵便番号: {user.zip}</li>
          <li>住所1: {user.address}</li>
          <li>住所2: {user.address2}</li>
          <li>メッセージ: <br />
            <textarea value={user.message} disabled />
          </li>
        </ul>
      </div>
      <div>
        <label>お名前:<br />
          <input type="text" id="form-name" value={user.name} placeholder="お名前" onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>携帯番号:<br />
          <input type="text" id="form-phone" value={user.phone} placeholder="携帯番号" onChange={handleChangePhone} />
        </label>
      </div>
      <div>
        <label>郵便番号:<br />
          <input type="text" id="form-zip" value={user.zip} placeholder="郵便番号" onChange={handleChangeZip} />
        </label>
      </div>
      <div>
        <label>住所1:<br />
          <input type="text" id="form-address" value={user.address} placeholder="住所1" onChange={handleChangeAddress} />
        </label>
      </div>
      <div>
        <label>住所2:<br />
          <input type="text" id="form-address2" value={user.address2} placeholder="住所2" onChange={handleChangeAddress2} />
        </label>
      </div>
      <div>
        <label>メッセージ:<br />
          <textarea id="form-message" value={user.message} onChange={handleChangeMessage} />
        </label>
      </div>

      <button onClick={handleConfirm}>確認</button>
    </>
  )
}

export default StateForm
