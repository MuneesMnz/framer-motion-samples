import { motion,AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal/Modal";

const Example = () => {
  const [modelopen, setModelopen] = useState(false);
  const close = () => setModelopen(false);
  const open = () => setModelopen(true);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modelopen ? close() : open())}
      >
        Launch Modal
      </motion.button>
     <AnimatePresence initial={false} wait={true} onExitComplete={()=>null} >
     {
        modelopen && <Modal modalOpen={modelopen} handleClose={close} />
      }
     </AnimatePresence>
    </div>
  );
};

export default Example;
