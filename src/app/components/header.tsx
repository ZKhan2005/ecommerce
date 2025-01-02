'use client'
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaCartArrowDown } from "react-icons/fa";



function Header() {
  const activeLink = usePathname()

  return (
    <main className="flex flex-col overflow-x-hidden" >
      {/* header1 */}
      <section className="h-11 w-full bg-[#080808] gap-1 text-white flex justify-between px-8 items-center">
        <div className="mr-1 flex flex-col md:flex-row md:gap-2  text-[12px] md:text-sm lg:text-sm">
          <p>03155511155</p>
          <p>zk7057023@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full p-1 bg-[#02459c] hover:bg-cyan-400 "><FaLinkedin/></div>
          <div className="rounded-full p-1 bg-[black] hover:bg-gray-400 https://github.com/ZKhan2005"> <FaGithub /></div>
          <div className="rounded-full p-1 bg-[#f80303]  hover:bg-rose-400" > <FaYoutube/></div>
          <div className="rounded-full p-1 bg-[blue]  hover:bg-sky-500"> < FaFacebookF/></div>
        </div>
      </section>
      {/* header 2 */}
      <section className="h-14 w-full flex justify-between text-[#510180]  items-center px-5 sm:px-10" >
        <div className="flex items-center gap-2">
       <Image src={'/logo.png'} width={32} height={32} alt="logo" className="h-8 w-10" /><p className='text-2xl font-serif font-semibold mt-2'><i> Dine Domain </i></p>
        </div>

        <nav className="sm:hidden hidden lg:block md:block">
          <Link href={'/'} className={`mr-4 ${activeLink == "/" ? "bg-[#DBDFD0] py-1 px-3 rounded-full text-sm" : ""}`}>Home</Link>
          <Link href={'/about'} className={`mr-4 ${activeLink == "/about" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} > About</Link>
          <Link href={'/menue'} className={`mr-4 ${activeLink == "/menue" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Menue</Link>

          <Link href={'/contact'} className={`mr-4 ${activeLink == "/contact" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Contact</Link>
        </nav>
        <div className="flex items-center gap-3  "> 
        <Button asChild variant="outline" className="rounded-full  hidden sm:hidden   md:block hover:bg-[#e83364] h-10">
          <Link href="/book">Book a Table</Link>
        </Button> 
        <Link href={'/cart'}><FaCartArrowDown className="text-[#f90202]  hidden sm:hidden   md:block text-3xl"/> </Link>
        </div>    
        <Sheet   >
        < SheetTrigger asChild  >
        <Button
      variant="outline"
      className="sm:block  font-bold border-none text-5xl md:hidden lg:hidden text-center flex items-center justify-center"
    >
      <IoMdMenu className="text-4xl" /> {/* Increase icon size here */}
    </Button>
            {/* <Button variant="outline" className='sm:block h-8 w-8 font-bold border-none text-7xl md:hidden lg:hidden text-center' ><IoMdMenu /></Button> */}
          </SheetTrigger> 
          <SheetContent className="bg-[#33036e] opacity-90 text-white">
            <SheetHeader >
              <SheetTitle className="flex justify-center gap-2 mt-8" >  <Image src={'/image/footerlogo.png'} width={32} height={32} alt="logo" className="h-8 w-10 " /> <p className="text-3xl  text-white"> Dine Domain </p></SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-5 text-2xl mt-16 ">
              <Link href={'/'} className={`mr-4 self-center`}>Home</Link>
              <Link href={'/about'} className={`mr-4 self-center`} >About</Link>
              <Link href={'/menue'} className={`mr-4  self-center`} >Menu</Link>
          
              <Link href={'/contact'} className={`mr-4  self-center`} >Contact</Link>
              <Link href={'/book'} className={`mr-4  self-center`} >Book Table</Link>
              <Link href={'/cart'} className={`mr-4  self-center`} >Cart</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  );
}

export default Header;
