import { useState, useRef } from "react";
import upload from "../../assets/images/upload.png"

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

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
   <section className="pt-12 pb-10 lg:mb-8 lg:p-6 mt-12  -mb-3 w-screen flex justify-center items-center">
  <div
    className="dropzone p-8 w-[82%] h-full rounded-xl flex flex-col justify-center items-center border-dotted border-[4px]"
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    <img src={upload} alt="" className="" />
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