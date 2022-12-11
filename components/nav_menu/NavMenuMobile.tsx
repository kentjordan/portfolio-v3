import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import { TfiClose } from "react-icons/tfi"

const NavMenuMobile: React.FC<{ setVisibility: Dispatch<SetStateAction<boolean>> }> = ({ setVisibility }) => {

    return <div className="md:hidden absolute top-0 z-10 h-screen w-full bg-[#303030] text-white flex flex-col items-center justify-center">

        <ul className="flex flex-col items-center">
            <li className="text-xl font-Poppins"><Link href={''}>Blog</Link></li>
            <li className="my-5 bg-stone-400 h-[1px] w-full"></li>
            <li className="text-xl font-Poppins"><Link href={''}>My Works</Link></li>
            <li className="my-5 bg-stone-400 h-[1px] w-full"></li>
            <li className="text-xl font-Poppins"><Link href={''}>About Me</Link></li>
            <li className="my-5 bg-stone-400 h-[1px] w-full"></li>
            <li className="text-xl font-Poppins"><Link href={''}>Contact</Link></li>
        </ul>

        <div className="my-16 cursor-pointer" onClick={() => setVisibility(false)}>
            <TfiClose size={24} />
        </div>

    </div>
}

export default NavMenuMobile;