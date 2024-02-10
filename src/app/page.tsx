import Image from 'next/image'
import Link from 'next/link'
import CommandPrompt from './components/CommandPrompt'
import OnHover from './components/OnHover'
import ChatBot from './components/Chatbot'
import MatrixEffect from './components/MatrixEffect'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <main className=" wrapper flex min-h-screen flex-col items-center justify-between ">
      <div className="textrr about_box">
        <svg viewBox="-10 200 1320 100">
          <text x="10%" y="60%" textAnchor="middle">
          Web
          </text>
        </svg>
        
        <svg viewBox="-80 100 1320 100">
          
          <text x="10%" y="60%" textAnchor="middle">
          Design  
          </text>
        </svg>
        <svg viewBox="-190 -20 1320 100">
          <text x="10%" y="60%" textAnchor="middle">
          Full Stack
          </text>
        </svg>
        <svg viewBox="-220 -130 1320 100">

          <text x="10%" y="60%" textAnchor="middle">
          Conception
          </text>
        </svg>
        <svg viewBox="-340 -230 1320 100">
          <text x="10%" y="60%" textAnchor="middle">
          Developpement
          </text>
        </svg>
      </div>

            <div className=" sectionTop   ">
        <Image
          className="flex align-top"
          src="/MintsetLogoMonochrommeNoir.svg"
          alt="Next.js Logo"
          width={120}
          height={100}
          priority
        />

        <a
          className=" h-10 p-4 rounded-lg font-bold   border-2 border-[#51AD32] radius  pointer-events-none flex place-items-center gap-2  lg:pointer-events-auto "
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nous contacter{' '}
        </a>
      </div>

 
      <div className=' flex flex-col items-center justify-around place-items-center'>
        <div className="relative flex place-items-center ">
<Image
            className="invert-0 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/MintsetLogoFormatCarré.svg"
            alt="Next.js Logo"
            width={450}
            height={250}
            priority
          />

        </div>
        

        <Chatbot/>


              </div>
      <div className='sloganContainer'>
        {/* <div className="flex flex-col  slogan text-center p-2">
          <a>Innovation et fiabilité </a>
          <a>pour des experience digitales uniques </a>
        </div> */}
      </div>

      <div>
        <div id="typedtext"></div>
      </div>

      <div className=" justify-between flex flex-row p-4 pb-8">

        <a
          href="/expertises"
          className="group px-4 rounded-lg  transition-colors hover:border-green-300 hover:bg-green-100 hover:green:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`font-semibold`}>
            Expertises {' '}

          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group px-4 rounded-lg  transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`font-semibold`}>
            Services {' '}

          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group px-4 rounded-lg  transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`font-semibold`}>
            L&apos;équipe {' '}

          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="px-4 group rounded-lg  transition-colors hover:border-green-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`font-semibold`}>
            A propos {' '}

          </h2>
        </a>
      </div>
    </main>
  )
}
