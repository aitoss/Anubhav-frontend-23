import { useState, useRef } from "react";
import upload from "../../assets/images/upload.png"

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  console.log(files);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
   <section className="pb-10 lg:mb-8 lg:p-2  -mb-3 w-[70%] flex md:w-[90%] bg-white">
  <div
    className="dropzone p-8 w-full h-full rounded-xl flex flex-col justify-center items-center border-dotted border-[4px] hover:shadow-xl"
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    {files ? <img src={URL.createObjectURL.file} />: <img src={upload} />}
    <h1 className="text-gray-400 pb-2 text-base">Drag or Drop here</h1>
    <h1 className="text-gray-400 pb-2 text-base">Or</h1>
    <input
      type="file"
      multiple
      onChange={(event) => setFiles(event.target.files)}
      hidden
      accept="image/png, image/jpeg"
      ref={inputRef}
    />
    <button className="" onClick={() => inputRef.current.click()}>
      Select Files
    </button>
  </div>
</section>


    </>
  );
};

export default DragDropFiles;