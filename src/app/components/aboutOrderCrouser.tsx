'use client'

import Image from "next/image"
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"





interface Bmenue {
    id: number,
    title: string,
    description: string,
    image: string,

}

const BrowseMenue: Bmenue[] = [
    { id: 1, title: 'Multi Cuisine', description: 'In the new era of technology we look in the future with certainty life.', image: '/image/about/restaurant-menu 1.png' },
    { id: 2, title: 'Easy To Order', description: 'In the new era of technology we look in the future with certainty life.', image: '/image/about/resturant-menue 2.png' },
    { id: 3, title: 'Fast Delivery', description: 'In the new era of technology we look in the future with certainty life.', image: '/image/about/restuant-menue 3.png' },

]



export default function AboutOrder(){
    return(
        <main>
            
            <section className="flex justify-center overflow-x-hidden mt-8 ">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}

                    >
                        <CarouselContent className="px-2  w-[95vw]">
                            {BrowseMenue.map((menue) => (

                                <CarouselItem key={menue.id} className=" md:basis-1/2 lg:basis-1/3 w-full flex justify-center  ">
                                    <div className="h-auto  p-5 flex gap-1 sm:gap-2 rounded-3xl  w- sm:w-full-full   ">
                                        <span  className="w-1/4"><Image src={menue.image} width={150} height={150} alt={menue.title} className="h-2/3 w-3/4 " /></span>
                                        <div className=" w-3/4"><h2 className="font-bold">{menue.title}</h2>
                                            <p>{menue.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </section>
        </main>
    )
}