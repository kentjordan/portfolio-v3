import Link from 'next/link'
import React from 'react'

const NavMenuDesktop = () => {
    return (
        <ul className="md:flex hidden">
            <li className="text-[#767676] mx-4 font-Poppins"><Link href={'blog'}>Blog</Link></li>
            <li className="text-[#767676] mx-4 font-Poppins"><Link href={'works'}>My Works</Link></li>
            <li className="text-[#767676] mx-4 font-Poppins"><Link href={'about'}>About Me</Link></li>
            <li className="text-[#767676] mx-4 font-Poppins"><Link href={'contact'}>Contact</Link></li>
        </ul>
    )
}

export default NavMenuDesktop