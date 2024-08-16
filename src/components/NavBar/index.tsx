'use client'

import Link from "next/link"
import Image from "next/image"

const  NavBar = () => {
  return (
    <div className="flex justify-center content-center w-full pt-6 font-medium font-sans fixed">
      <div className="">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="flex flex-row h-10 border-2 bg-slate-50 border-black  space-x-20 rounded-full px-5 py-1.5  ">
        <div>
          <Link href="/">Video Collection</Link>
        </div>
        <div>
          <button>Enjoy It!</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;