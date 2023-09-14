import { MenuReferences } from "@/app/strings";
import Image from "next/image";
import { Fragment } from "react";

export default function Nav(){

  return (
    <div className='flex px-40 fixed w-screen h-28'>
      <div className="flex flex-1 items-center">
        <div className="flex-1">
          <Image
            src="/mintsetLogoBlack.svg"
            alt="Next.js Logo"
            width={150}
            height={50}
            priority
          />
        </div>
        <nav className="flex flex 1">
          <ul className="flex">
            {Object.values(MenuReferences).map((item : string) => {
              return (
                <Fragment key={item}>
                  <li className="text-white mx-8 link link-underline link-underline-with link-underline-green"><a href={"#" + item}>{item}</a></li>
                </Fragment>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}


