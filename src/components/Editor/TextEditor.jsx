import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../Editor/Index.css"

const modules = {
    toolbar: [
        [{ header: [1,2,3,4,5,6, false]}],
        [{ font: [] }],
        [{ size: [] }],
        ["bold","italic","underline","strike","blockquote"],
        [
          { list: "ordered"},
          {list: "bullet"},
          {indent: "-1"},
          {indent: "+1"},
        ],
        ["link","image"],
    ],
}

const TextEditor = () => {
    const [value, setValue] = useState("");
  return (
    <div className="container relative h-screen text-black w-[100%] ">
    <div className="row h-[100%] w-[100%] flex lg:flex-row flex-col items-center justify-center">
    <div className="editor relative h-[100%] w-[50%] flex items-center justify-center">
    <ReactQuill
  modules={modules}
  className="input h-[100%] w-[100%]"
  theme="snow"
  value={value}
  onChange={(content) => setValue(content)}
/>
    </div>
    <div className="preview border-[2px] h-[100%] overflow-scroll w-[50%] flex text-black p-[10px]" dangerouslySetInnerHTML={{__html: value}} />

    </div>
    </div>
  )
}

export default TextEditor