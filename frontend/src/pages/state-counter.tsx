import React, { useState, SyntheticEvent } from 'react'

const StateCounter: React.FC = () => {

  const [counter, setCounter] = useState(0)

  const handleCountUp = () => {
    setCounter(prevCont => prevCont + 1)
  }

  const handleCountDown = () => {
    setCounter((prevCont) => {
      return ((prevCont - 1) > 0) ? prevCont - 1 : 0
    })
  }

  const handleReset = (e: SyntheticEvent) => {
    e.preventDefault()
    setCounter(0)
  }

  return(
    <>
      <h1>カウンター</h1>
      <p>カウント: <span>{counter}</span></p>
      <button onClick={ handleCountUp }>＋1</button>
      <button onClick={ handleCountDown }>ー1</button>
      <p><a href="#!" onClick={ handleReset }>リセット</a></p>
    </>
  )
}

export default StateCounter
