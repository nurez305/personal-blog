import Image from "next/image"
import Link from "next/link"
import Logo from "../components/mylogo.jpeg"

function Header () {
  return (
    <header className=" flex items-center justify-between space-x-4 font-bold px-10 py-5 "> 
        <div className="flex items-center space-x-2">
            <Link href="/">
            <Image
            className='rounded-full object-cover'
            height={50}
            width={50}
            src={Logo}
            alt='logo' 
        />
            </Link>
            <Link href="/">
            <h1 >Code<span className="text-[#F7AB0A]">With</span>Nurez</h1>
            </Link>
        </div>

        <div>
            <Link 
            href='http://saliunurudeen.netlify.app'
            className="w-32 px-5 py-3 text-xs md:text-base md:w-48 bg-gray-800 text-[#F7AB0A] flex items-center rounded-full text-center lg:w-48"
            >
            Visit my portfolio website
            </Link>
        </div>
    </header>
  )
}

export default Header