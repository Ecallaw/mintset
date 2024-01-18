"use client"
import Image from 'next/image';
import { useState } from 'react';

const OnHover = ({ sr1 = "", sr2 = "" }) => {
  console.log('zzzzzzzzzeezzzzzzzzzz')
  const [over, setOver] = useState(false);
  return <div
    onMouseEnter={() => setOver(false)}
    onMouseLeave={() => setOver(true)}
  >

    {over ? (
      <Image className="invert-0 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        alt="Next.js Logo"
        width={300}
        height={200}
        priority id="msyDiv" onMouseEnter={() => console.log('eeeeeeeee')} src={sr2} />) : (
      <Image className="invert-0 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        alt="Next.js Logo"
        width={300}
        height={200}
        priority id="myDiv" onMouseEnter={() => console.log('eeeeeeeee')} src={sr1} />

    )}


  </div>;
};

export default OnHover;