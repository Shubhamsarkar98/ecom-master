import React, { useState } from "react";
import OffCanvas from 'react-aria-offcanvas'
import { Link } from "react-router-dom";

export const OffCanvasMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open =()=>{
        setIsOpen(true)
    }
    const close =()=>{
        setIsOpen(false)


    }
  return (
    <>
    <button
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={isOpen}
          onClick={open}
        >
          Click here
        </button>
        <OffCanvas isOpen={isOpen}
          onClose={close}
          labelledby="menu-button">
        <button onClick={close}>Close</button>
        <ul>
            <h1>Hi</h1>
            <h1>Hello</h1>
            <h1>I am</h1>
            <h1>Offcanvas</h1>
            <h1>Menu</h1>
            <h1>Hi</h1>
            
        </ul>
        </OffCanvas>
    </>
  );
};
