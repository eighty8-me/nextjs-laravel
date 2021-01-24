import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

export class Document extends NextDocument<Props> {
  render() {
    return(
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
