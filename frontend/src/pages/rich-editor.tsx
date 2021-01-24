import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const RichEditor: React.FC = () => {

  const [state, setState] = useState({ content: '' })

  // const handleChange = (content, delta, source, editor)
  const handleChange = (content: string) => {
    // console.log('--- Content ---', content)
    // console.log('--- Delta ---', delta)
    // console.log(editor.getContents())
    setState({ content })
  }

  const handleClick = () => {
    const showContent = document.getElementById('show-content')
    showContent.innerHTML = state.content;
    // const div = document.createElement('div')
    // div.style.display = 'none'
    // div.innerHTML = state.content;
    // showContent.innerHTML = div.innerHTML;
    // div.remove()
  }

  return(
    <div className="rich-editor">
      <QuillNoSSRWrapper value={state.content} onChange={handleChange} modules={modules} formats={formats} theme="snow" />
      <button onClick={handleClick}>送信</button>

      <div id="show-content">

      </div>
    </div>
  )
}

export default RichEditor
