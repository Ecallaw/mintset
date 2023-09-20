import Image from "next/image";

export default function Expertises() {
  return (<main className=" flex min-h-screen flex-col items-center justify-between p-24">

    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">L&apos;expertise <a className=" text-[#AECB45]">mintset</a></h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Nos savoir-faire au plus proche de vos besoins</p>

    <div className="grid grid-cols-2 gap-2 justify-center">

      <div className=' content-center   text-center'>
        <Image
          className="mx-auto grayscale hover:grayscale-0"
          src="/assets/img/icons/iconRobot.png"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
        <h2 className='service-title'><b>Applications mobiles</b></h2>
        <h4 className='text-service'><p>Quelque soit la plateforme, soyez toujours dans la poche de vos utilisateurs</p></h4>
      </div>
      <div className='content-center   text-center'>
        <Image
          className="mx-auto grayscale hover:grayscale-0"
          src="/assets/img/icons/icon1.png"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
        <h2 className='service-title'><b>UX</b></h2>
        <h4 className='text-service'><p>Maximiser l&lsquo;engagement de vos utilisateurs en offrant la meilleure des expériences</p></h4>
      </div>
      <div className='content-center   text-center'>
        <Image
          className="mx-auto grayscale hover:grayscale-0"
          src="/assets/img/icons/iconSatelite.png"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
        <h2 className='service-title'><b>UX</b></h2>
        <h4 className='text-service'><p>Maximiser l&lsquo;engagement de vos utilisateurs en offrant la meilleure des expériences</p></h4>
      </div>
      <div className='content-center   text-center'>
        <Image
          className="mx-auto grayscale hover:grayscale-0"
          src="/assets/img/icons/iconGalaxy.png"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
        <h2 className='service-title'><b>Conseils/Prestations</b></h2>
        <h4 className='text-service'><p>Force de proposition et expertise technique pour être en adéquation avec vos contraintes</p></h4>
      </div>
    </div>
  </main>)
}