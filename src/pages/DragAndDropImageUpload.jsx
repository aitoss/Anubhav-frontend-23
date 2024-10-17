import React, { useState } from "react";
import Upload from "../../src/assets/images/upload.svg";

const DragAndDropImageUpload = ({ file, setFile, setbannerImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = React.useRef();

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setbannerImage(reader.result); // Set the image preview using base64
      };
      reader.readAsDataURL(droppedFile);
    } else {
      alert("Please drop an image file.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setbannerImage(reader.result); 
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select an image file.");
    }
  };

  return (
    <div
      className={` ${
        isDragging ? "border-blue-400" : "border-gray-300"
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex w-full justify-center">
        <div className="flex h-[150px] w-[150px] justify-center rounded-full sm:h-24 sm:w-24">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <img
              className="cursor-pointer"
              src={Upload}
              onClick={(e) => {
                inputRef.current.click();
                e.preventDefault();
              }}
              alt="Upload"
            />
          )}
        </div>
      </div>
      <p className="text-gray-300">
        {file ? null : (
          <>
            <h1 className="text-center text-xs font-[300] text-[#C3C3C3]">
              JPG, JPEG, PNG file size no more than 10MB
            </h1>
            <h1 className="text-center text-xs font-[400] text-[#322e2e]">
              Keep the image ratio to 280x180 px
            </h1>
          </>
        )}
      </p>
      {file && (
        <div
          className="flex py-5 px-0 h-[20px] cursor-pointer items-center justify-center gap-1 text-[#717171]"
          onClick={() => setFile(null)}
        >
          <span
            className="px-2 py-1 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-200 ease-in-out"
          >
            Remove
          </span>
          <span className="text-[24px]">×</span>
        </div>
      )}


      <input
        type="file"
        ref={inputRef}
        name="upload"
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

export default DragAndDropImageUpload;
