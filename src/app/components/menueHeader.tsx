'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenueHeader() {
    const activeLink = usePathname()

    return (
        <main className="w-full h-auto">
            <section className=" w-full h-auto py-6  flex  flex-col ">

                <h1 className="sm:text-6xl text-5xl font-serif text-[#080808] self-center">Our Menu </h1>
                <p className=" mt-4 px-9 text-center  text-[#040404]">We consider all the drivers of change gives you the components  you need to change to create a truly happens.</p>
            </section>

            <section className="h-auto p-4 w-full flex justify-center sm:justify-around text-[#080807]  items-center">
                <nav className="flex flex-wrap  items-center justify-center gap-y-2">
                    <Link
                        href={'/menue'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue" ? "bg-[#7c0f8f] text-white py-1 px-3 sm:py-2  sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        All
                    </Link>
                    <Link
                        href={'/menue/breakfast'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/breakfast" ? "bg-[#751094] text-white py-1 px-3 sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""}  border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Breakfast
                    </Link>
                    <Link
                        href={'/menue/dishes'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/dishes" ? "bg-[#730d8d] text-white py-1 px-3 sm:py-2  sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Main Dishes
                    </Link>
                    <Link
                        href={'/menue/drinks'}
                        className={`mr-1 sm:mr-4 ${activeLink == "/menue/drinks" ? "bg-[#79119f] text-white py-1 px-3 sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Drinks
                    </Link>
                    <Link
                        href={'/menue/desserts'}
                        className={` ${activeLink == "/menue/desserts" ? "bg-[#8613a9] text-white py-1 px-3  sm:py-2 sm:px-6 rounded-3xl text-[13px] sm:text-sm" : ""} border border-gray-300 rounded-3xl py-1 sm:py-2 sm:px-6  text-[13px] sm:text-sm px-3`}
                    >
                        Desserts
                    </Link>
                </nav>
            </section>
        </main>
    )
}