'use client'
import Image from "next/image"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
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
    image: string
}

const BrowseMenue: Bmenue[] = [
    { id: 1, title: 'Caterings', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/kebab-set-table 1.png' },
    { id: 2, title: 'Birthdays', description: 'In the new era of technology we look in the future with certainty for life.', image: 'data:image/jpeg;base64,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' },
    { id: 3, title: 'Weddings', description: 'In the new era of technology we look in the future with certainty for life.', image: 'data:image/jpeg;base64,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' },
    { id: 4, title: 'Events', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/Mask group.png' },]


export default function Services() {
    return (
        <main className="w-full">
            <section className="flex justify-center overflow-x-hidden  ">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}

                    className=" w-[100vw]   "    >
                    <CarouselContent className="px-3">
                        {BrowseMenue.map((menue) => (
                            <CarouselItem key={menue.id} className=" md:basis-1/2 lg:basis-1/4   ">
                                <div className="">
                                    <Card className="rounded-2xl shadow-lg  ">
                                        <CardContent className="flex aspect-square items-center    w-full h-[450] rounded-2xl   flex-col ">
                                          <div className="h-72 w-full">   <Image src={menue.image} height={443} width={306} alt={`${menue.title} `} className="  h-72  w-full mt-2" /></div>
                                            <h2 className="text-2xl font-bold text-[#090a08] mt-6 mb-2 self-start">{menue.title}</h2>
                                            <p className="text-[#0a0c03]  self-start">{menue.description}</p>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>

        </main>
    )
}