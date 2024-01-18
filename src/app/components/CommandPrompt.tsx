"use client"
import { ReactMatrixAnimation } from 'react-matrix-animation';
import './CommandPrompt.css'
import { useEffect, useState } from 'react';
const CommandPrompt = ({ message = 'kkkkkkkkkk', speed = 100 }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < message.length) {
        setText(message.substring(0, text.length + 1));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed, text]);


  return <>
    <div className="itemPrompt command-prompt">{text}</div>
  </>
    ;
};

export default CommandPrompt;