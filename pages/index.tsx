import Image from "next/image"
import TypeScriptSVG from '@assets/icons/typescript.svg'
import ReactSVG from "@assets/icons/react.svg"
import HTML5SVG from '@assets/icons/html-5.svg'
import CSS3SVG from '@assets/icons/css3.svg'
import TailwindSVG from '@assets/icons/tailwindcss.svg'
import SASS_SVG from '@assets/icons/sass.svg'
import NodeJS_SVG from '@assets/icons/nodejs.svg'
import PostgresSVG from '@assets/icons/postgresql.svg'
import ExpressJS_SVG from '@assets/icons/express-js.svg'

export default function Home() {

  return <div className="min-h-screen flex flex-col justify-start items-center p-12 bg-[url('/assets/bg_images/bg-home.png')] " >

    <div className="flex flex-col mt-auto mb-auto text-center">

      <h1 className="text-[#303030] md:text-[6rem] text-[4rem] font-medium font-Anton drop-shadow-md">I&apos;m Kent Jordan</h1>

      {/* Desktop */}
      <div className="md:flex hidden flex-col my-2">
        <span className="text-[#767676] text-[1.35rem] font-Poppins font-light">a <span className="text-[#EA8C00] font-medium italic">Software Engineer</span> who specializes in creating web apps.</span>
        <span className="text-[#767676] text-[1.35rem] font-Poppins font-light">I can make your business on top through a website. 🚀</span>
      </div>

      {/* Mobile */}
      <div className="md:hidden block my-2">
        <span className="text-[#767676] text-[1rem] font-Poppins font-light">a <span className="text-[#EA8C00] font-medium italic">Software Engineer</span> who specializes in creating web apps. I can make your business on top through a website. 🚀</span>
      </div>

      {/* Mobile of Tech Stack's Icon */}
      <div className="md:hidden flex flex-wrap justify-center my-8">
        <Image className="mx-3 my-2" src={TypeScriptSVG} width={32} alt='TypeScript Icon' />
        <Image className="mx-3 my-2" src={ReactSVG} width={32} alt='React.js Icon' />
        <Image className="mx-3 my-2" src={HTML5SVG} width={32} alt='HTML 5 Icon' />
        <Image className="mx-3 my-2" src={CSS3SVG} width={32} alt='CSS 3 Icon' />
        <Image className="mx-3 my-2" src={SASS_SVG} width={32} alt='SASS Icon' />
        <Image className="mx-3 my-2" src={TailwindSVG} width={32} alt='Tailwind Icon' />
        <Image className="mx-3 my-2" src={NodeJS_SVG} width={32} alt='Node.js Icon' />
        <Image className="mx-3 my-2" src={PostgresSVG} width={32} alt='PostgresSQL Icon' />
        <Image className="mx-3 my-2" src={ExpressJS_SVG} width={32} alt='Express.js Icon' />
      </div>
    </div>

    {/* Desktop of Tech Stack's Icon */}
    <div className="md:flex hidden flex-wrap justify-center my-8">
      <Image className="mx-3 my-2" src={TypeScriptSVG} width={32} alt='TypeScript Icon' />
      <Image className="mx-3 my-2" src={ReactSVG} width={32} alt='React.js Icon' />
      <Image className="mx-3 my-2" src={HTML5SVG} width={32} alt='HTML 5 Icon' />
      <Image className="mx-3 my-2" src={CSS3SVG} width={32} alt='CSS 3 Icon' />
      <Image className="mx-3 my-2" src={SASS_SVG} width={32} alt='SASS Icon' />
      <Image className="mx-3 my-2" src={TailwindSVG} width={32} alt='Tailwind Icon' />
      <Image className="mx-3 my-2" src={NodeJS_SVG} width={32} alt='Node.js Icon' />
      <Image className="mx-3 my-2" src={PostgresSVG} width={32} alt='PostgresSQL Icon' />
      <Image className="mx-3 my-2" src={ExpressJS_SVG} width={32} alt='Express.js Icon' />
    </div>

  </div >
}
