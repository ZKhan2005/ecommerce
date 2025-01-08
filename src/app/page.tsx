import { Button } from "@/components/ui/button"
import Link from 'next/link'
import BrowseMenue from './components/browseMenue'
import Services from './components/eventServices'
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Comments from './components/comments';
export default function Home() {
  return (
    <div>
      <main className="mb-32">
       {/* hero section 550*/}
       <section className="relative w-full h-full">
  <Image 
    src="/image/bg5.jpg" 
    height={1200} 
    width={800} 
    alt="bg4" 
    className="w-full h-[100vh] object-cover" 
  />
  <div className="flex flex-col justify-center items-center absolute inset-0 font-serif px-4 bg-black/50 sm:bg-transparent sm:text-[#050504]">
    <h2 className="md:text-6xl sm:text-5xl text-4xl">Best food for</h2>
    <h2 className="md:text-6xl sm:text-5xl text-bold text-4xl">your taste</h2>
    <p className="mx-6 text-center text-extreme-bold mt-2">
      Discover delectable cuisine and unforgettable moments<br />
      in our welcoming, culinary haven.
    </p>
    <div className="flex gap-4 mt-4">
      <Button asChild className="rounded-full bg-[#590f7c] text-white hover:bg-[#fb7303]">
        <Link href="/book">Book A Table</Link>
      </Button>
      <Button asChild variant="outline" className="rounded-full border-black text-black">
        <Link href="/menue">Explore Menu</Link>
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
