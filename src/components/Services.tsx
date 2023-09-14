import Image from "next/image";

export default function Services(){

  return (
    <div className="flex h-screen px-40 text-black gap-10">
      <div className="flex flex-1 flex-col mt-56">
        <article>
          <h1 className="text-2xl">Notre phylosophie</h1>     
          <p className="text-lg">Aute eiusmod nisi dolor proident est laborum deserunt minim ut incididunt consectetur amet. Do deserunt eiusmod eiusmod dolore ad.</p>
        </article>
        <div className="flex mt-24 gap-4">
          <article>
            <h1 className="text-2xl">Title 1</h1>
            <p className="text-lg">Aute eiusmod nisi dolor proident est laborum deserunt minim ut incididunt consectetur amet. Do deserunt eiusmod eiusmod dolore ad.</p>
          </article>
          <article>
            <h1 className="text-2xl">Title 2</h1>
            <p className="text-lg">Aute eiusmod nisi dolor proident est laborum deserunt minim ut incididunt consectetur amet. Do deserunt eiusmod eiusmod dolore ad.</p>
          </article>  
        </div>

      </div>
      <div className="flex flex-1 ">
        <Image
          src="/webDev.jpg"
          alt="Next.js Logo"
          sizes="(max-width: 768px) 100vw"
          width={1200}
          height={2000}
          priority
          style={{objectFit: "contain"}}
        />
      </div>
    </div>
  )
}


