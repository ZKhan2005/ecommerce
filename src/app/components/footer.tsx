import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <main className="h-auto w-full  bg-[#4a0231] p-20 pb-0">
      <section className="grid  sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-0 justify-around">
        <div className="grid gap-6 justify-center items-center h-auto mb-14">
          <div className="flex gap-3 items-center">
            <Image src={"/image/footerlogo.png"} height={40} width={40} alt="logo" />{" "}
            <h4 className="font-serif font-medium  text-white  text-xl">
           
              Dine Domain
            </h4>
          </div>
          <p className="text-white">
            In the new era of technology we look a <br />
            in the future with certainty and pride to <br /> for our company
            and.
          </p>
          <div className="flex  gap-3">
            <div className="rounded-full p-2 h-8 w-8 bg-[#080808] text-white">
              {" "}
              <FaGithub />
            </div>
            
            <div className="rounded-full p-2 h-8 w-8 text-center bg-[#060606]  text-white">
              <FaTwitter />{" "}
            </div>
            <div className="rounded-full p-2 h-8 w-8 bg-[#080708]  text-white">
              {" "}
              <FaFacebookF />
            </div>
            <div className="rounded-full p-2 h-8 w-8 bg-[#080808] text-white">
              {" "}
              <FaSquareInstagram />
            </div>
          </div>
        </div>

        <div className="sm:ml-9 grid justify-center items-center ">
          <h4 className="text-white font-bold mb-2  ">Pages</h4>
          <div className="text-white  grid gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/menue"}>Menue</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/book"}>Table</Link>
          </div>
        </div>

        <div className="grid justify-center items-center  ml-6 sm:ml-0">
          <h4 className="text-white font-bold mb-3 ">Utility Pages</h4>
          <div className="text-white  grid gap-5">
            <p>Start Here</p>
            <p>Styleguide</p>
            <p>Password Protected</p>
            <p>404 Not Found</p>
            <p>Licenses</p>
            <p> Changelog</p>
            <p>View More</p>
          </div>
        </div>

        <div className="grid justify-center">
          <h4 className="text-white font-bold mb-5 ">Follow Us On Instagram</h4>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={"/image/footer/pick1.png"}
              height={170}
              width={194}
              alt="follow"
            />
            <Image
              src={"/image/footer/pick2.png"}
              height={170}
              width={194}
              alt="follw"
            />
            <Image
              src={"/image/footer/pick3.png"}
              height={170}
              width={194}
              alt="follow"
            />
            <Image
              src={"/image/footer/pick4.png"}
              height={170}
              width={194}
              alt="follow"
            />
          </div>
        </div>
      </section>
      <section >
        <p className="text-white text-center mt-16 pb-9"> Copyright © Sigma Cryto Girl 2025 ZK. All Rights Reserved</p>
      </section>
    </main>
  );
}

export default Footer;
