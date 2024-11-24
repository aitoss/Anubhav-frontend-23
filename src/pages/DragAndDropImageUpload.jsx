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
      className="flex flex-col items-center justify-center gap-2 md:py-4"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex w-full items-center justify-center">
        <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full sm:h-24 sm:w-24">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <img
              className="h-[150px] w-[150px] cursor-pointer sm:h-24 sm:w-24"
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
          className="flex h-[20px] w-fit cursor-pointer items-center justify-center gap-1 border-b-2 border-white text-[#717171] transition duration-200 ease-in-out hover:border-[#777]"
          onClick={() => setFile(null)}
        >
          <span className="">Remove</span>
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
