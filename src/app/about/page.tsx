import AboutOrder from "@/app/components/aboutOrderCrouser";
import Image from "next/image";
import Comments from "../components/comments";

export default function about() {
  return (
    <main className="h-full w-full mb-9 bg-[#b9dcff]">
      <section className=" h-auto  w-full  px-3 mt-11  flex  lg:flex-row flex-col ">
        <div className="lg:w-1/2 w-full px-4 flex justify-start  h-[250px] sm:h-[350px] ">
          <Image
            src={"/image/about/about1.png"}
            height={350}
            width={599}
            alt="healthy food"
            className="sm:h-[350px] h-[250px] object-cover w-full shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full  mt-4  md:pr-9 h-auto md:pl-9 p-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium text-[#2C2F24] font-serif">
            We provide healthy food for your family.
          </h1>
          <p className="mt-3 font-sans  text-[#2C2F24]">{`Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.`}</p>
          <p className="mt-3 font-sans  text-[#414536]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.{" "}
          </p>
        </div>
      </section>

      <section className="h-auto w-full px-3 mt-10 flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold font-serif mb-7  text-[#61028a]">
          Feel the authentic & original taste from us
        </h2>
        <div className="sm:h-96 h-80 w-full mx-4  rounded-lg">
          <video
            src="/image/about/resturent-video.mp4"
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>
        <AboutOrder />
      </section>

      {/* little Information */}
      <section className="mt-14 flex flex-col md:flex-row  gap-5 ">
        <div className="md:w-2/4 w-full h-auto pt-8  px-10">
          <h2 className="sm:text-3xl text-2xl font-serif font-medium sm:text-center mb-8">
            A little information
            <br /> for our valuable guest
          </h2>
          <p className="text-[#414536]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="w-full h-auto grid grid-cols-2 mt-3 sm:justify-center justify-start gap-2 sm:px-12 font-serif">
            <div className="w-full h-32 shadow-lg border border-gray-200 rounded-3xl flex flex-col items-center justify-center ">
              <h3 className="sm:text-3xl text-2xl">3</h3>
              <p className="sm:text-xl text-sm">Locations</p>
            </div>
            <div className="w-full h-32 shadow-lg border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">1995</h3>
              <p className="sm:text-xl text-sm">Founded</p>
            </div>
            <div className="w-full shadow-lg h-32 border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">
                6<sub className="sm:text-4xl text-3xl">5</sub>+
              </h3>
              <p className="sm:text-xl text-sm">Founded</p>
            </div>
            <div className="w-full shadow-lg h-32 border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">100%</h3>
              <p className="sm:text-xl text-sm text-center">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full h-auto  px-7 md:h-[500px]  sm:h-[300px]">
          <Image
            src={"/image/about/about-2.png"}
            width={555}
            height={450}
            alt="resturent"
            className="w-full md:h-[500px] object-cover  sm:h-[300px] shadow-md"
          />
        </div>
      </section>

      {/* comments */}
      <section>
        <h2 className="sm:text-3xl text-2xl font-serif font-medium text-center mt-12 my-7">
          What Our Customers Say
        </h2>
        <Comments />
      </section>
    </main>
  );
}
