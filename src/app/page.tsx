import { Button } from "@/components/ui/button"
import Link from 'next/link'
import BrowseMenue from './components/browseMenue'
import Services from './components/eventServices'
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Comments from './components/comments'


export default function Home() {
  return (
    <div>
      <main className="mb-32">
       {/* hero section 550*/}
        <section className="relative w-full h-full">
          <Image src={'data:image/jpeg;base64,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'} height={400} width={400} alt="hero" className="w-full h-[100vh]" />
          <div className="flex flex-col justify-center items-center absolute inset-0 font-serif px-4  bg-black sm:bg-transparent  sm:text-[#2C2F24] ">
            <h2 className="md:text-6xl sm:text-5xl text-4xl ">Best food for</h2>
            <h2 className="md:text-6xl sm:text-5xl text-4xl">your taste </h2>
            <p className="mx-6 text-center mt-2">Discover delectable cuisine and unforgettable moments<br/> in our welcoming, culinary haven. </p>
            <div className="flex gap-4 mt-4">
              <Button asChild className="rounded-full bg-[#590f7c] text-white hover:bg-[#5a0b64]">
                <Link href="/book">Book A Table</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full  border-black text-black">
                <Link href="/menue">Explore Menu </Link>
              </Button>
            </div>
          </div>

        </section>
        {/* Menue  */}
        <section> 
         <BrowseMenue/>
         </section>
           {/* about */}
         <section className=" h-auto  mx-4 mt-20  flex lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full h-[380px]  flex justify-center  ">
            <Image src={'/image/Image.png'}  height={556} width={599} alt="healthy food"  className="h-[380] w-full"/>
          </div>
          <div className="lg:w-1/2 w-full  mt-8 md:pr-9 h-auto md:pl-9 p-2">
           <h1 className="sm:text-4xl text-2xl  font-medium text-[#2C2F24] font-serif">We provide healthy <br/> food for your family.</h1>
           <p className="mt-3 font-sans  text-[#413e3e]">{`Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.`}</p>
           <p className="mt-3 font-sans  text-[#414536]">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event. </p>
           <Button asChild variant="outline" className="rounded-full  border-[#2C2F24] hover:bg-[#DBDFD0] text-[#182226] mt-5">
                <Link href="/about"> More About Us </Link>
              </Button>
          </div>
         </section>
           {/* services */}
         <section className="mt-5 px-5 ">
                <h2 className="sm:text-4xl text-3xl mx-5 font-serif my-10">We also offer unique<br/> services for your events </h2>
           <Services/>
         </section>

         {/* food delivery */}

         <section className="flex flex-col md:flex-row w-full px-7 mt-14 ">
          <div className="flex gap-3  w-full md:w-1/2 justify-center">
                <Image src={'/image/fastFood(1).png'} height={600} width={431} alt="food"  className="h-96 md:w-72 hidden md:block"/>
              <div className="flex md:flex-col  gap-4 mt-2 w-full">
                <Image src={'/image/fastFood(2).png'} height={333} width={290} alt="food"  className="h-44 md:w-72  w-1/2"/>
                <Image src={'/image/fastFood(3).png'} height={333} width={290} alt="food"  className="h-44 md:w-72 w-1/2"/>
              </div>
          </div>
          <div className=" md:w-1/2 pl-7  w-full">
                <h2 className="text-4xl  font-serif mt-6 font-medium mb-4  text-[#2C2F24]">Fastest Food  Delivery in City</h2>
                   <p className="text-[#414536]">Our visual designer lets you quickly and of drag a down <br/> your way to customapps for both keep desktop. </p>
                <h3 className="flex gap-4 mb-5 mt-4 text-[#2C2F24] font-bold"><span className="bg-[#540e72] text-white p-2 rounded-full w-auto h-8 "> <MdOutlineWatchLater /></span> Delivery within 30 minutes</h3>
                <h3 className="flex gap-4 mb-5 text-[#2C2F24] font-bold "><span className="bg-[#5a0e81] text-white p-2 rounded-full  w-auto h-8"> <IoPricetagsOutline /></span> Best Offer & Prices</h3>
                <h3 className="flex gap-4 mb-5 text-[#2C2F24] font-bold"> <span className="bg-[#410953] text-white p-2 rounded-full w-auto h-8"><MdOutlineShoppingCart /> </span> Online Services Available</h3>
          </div>
         </section>
         {/* comments */}
         <section>
          <h2 className="text-3xl font-serif font-medium text-center my-7">What Our Customers Say</h2>
          <Comments/>
         </section>
      </main>
    </div>
  );
}
