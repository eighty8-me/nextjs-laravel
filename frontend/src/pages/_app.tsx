import { AppProps } from 'next/app'
import 'react-image-crop/lib/ReactCrop.scss'
import 'react-quill/dist/quill.snow.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
