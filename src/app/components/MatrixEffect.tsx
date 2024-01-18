"use client"
import { useEffect, useLayoutEffect, useState } from 'react';
const MatrixEffect = () => {

  useLayoutEffect(() => {
    // Initialising the canvas
    const canvas = document.querySelector('canvas');

    if (canvas !== null) {
      const ctx = canvas.getContext('2d');

      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2;

      // Setting up the letters
      const letters = 'MINTSET';
      const letters2 = letters.split('');

      // Setting up the columns
      let fontSize = 14,
        columns = canvas.width / fontSize;

      // Setting up the drops
      let drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      if (ctx !== null) {
        // Setting up the draw function
        function draw() {
          ctx.fillStyle = 'rgba(0, 0, 0, .1)  ';
          ctx.fillStyle = 'opacity:0.5';

          ctx.fillRect(0, 0, canvas.width, canvas.height);
          for (var i = 0; i < drops.length; i++) {
            var text = letters2[Math.floor(Math.random() * letters2.length)];
            ctx.fillStyle = '#0f0';
            // ctx.font = "3p x serif";

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
              drops[i] = 0;
            }
          }
        }

        // Loop the animation
        setInterval(draw, 100);
      }
    }

  }, [])

  return <div className=" relative flex place-items-center before:absolute  before:h-[20px] before:w-[100%]  before:bg-gradient-to-t before:from-white before:to-transparent before:blur-2xl before:content-['']  before:top-[-50%]">
    <canvas className='' />

  </div>

    ;
};

export default MatrixEffect;