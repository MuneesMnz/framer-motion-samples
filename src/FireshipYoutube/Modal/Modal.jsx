import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "../../App.css";

const Modal = ({ handleClose, text }) => {

    const dropIn={
        hidden:{
            y:"-100vh",
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:0.1,
                type:"spring",
                damping:40,
                stiffness:500
            }
        },
        exit:{
            y:"100vh",
            opacity:0
        }
    }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
      drag
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
