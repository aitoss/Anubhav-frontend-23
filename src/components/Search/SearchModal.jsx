import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Search from "./Search";

const SearchModal = ({ closeSearchModal, focus, full }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeSearchModal();
    }
  };

  return (
    <>
      {/* search field */}
      <div
        onClick={(e) => {
          handleClose(e);
        }}
        className="fixed -top-[480px] inset-0 bg-white bg-opacity-70 z-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 100 }}
          transition={{ duration: 0.15 }}
        >
          <Search mode="dark" focus={focus} full={full} />
        </motion.div>
      </div>
    </>
  );
};

export default SearchModal;
