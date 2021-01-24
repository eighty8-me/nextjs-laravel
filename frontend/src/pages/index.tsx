import React from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'
import Link from 'next/link'

const App: React.FC = () => {

  return(
    <>
      <h1>Hello next.js!</h1>
      <ul>
        <li>useState
          <ul>
            <li><Link href="/state-counter"><a>カウンター</a></Link></li>
            <li><Link href="/state-form"><a>フォーム</a></Link></li>
            <li><Link href="/search-address"><a>住所検索</a></Link></li>
            <li><Link href="/image-crop"><a>画像切り抜き</a></Link></li>
            <li><Link href="/rich-editor"><a>リッチエディタ</a></Link></li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default App
