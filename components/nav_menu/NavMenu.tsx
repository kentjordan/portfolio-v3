import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import NavMenuDesktop from './NavMenuDesktop'
import NavMenuMobile from './NavMenuMobile'

const NavMenu = () => {

    const [isVisible, setVisibility] = useState(false);

    return (
        <div className='w-full h-[64px] absolute flex flex-col justify-end items-center'>

            <div className="md:hidden cursor-pointer" onClick={() => setVisibility(true)}>
                <HiOutlineMenuAlt4 size={28} />
            </div>

            {isVisible && <NavMenuMobile setVisibility={setVisibility} />}
            <NavMenuDesktop />

        </div>
    )
}

export default NavMenu