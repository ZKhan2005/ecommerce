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
    image: string,
    name : string,
    about : string
}

const BrowseMenue: Bmenue[] = [
    { id: 1,  title: '“The best restaurant”', description: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.', image: '/image/comment-1.png' , name : 'Amna Shehzad' ,about : 'Gulshan, Karachi' },
    { id: 2, title: '“Simply delicious”', description: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.', image: '/image/comment-2.png'  , name : 'Uzair Malik' , about : 'Gulshan, Karachi'},
    { id: 3, title: '“One of a kind restaurant”', description: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.', image: '/image/comment-3.png' , name : 'Sara Khan' , about : 'Hayatabad, Peshawar' },
   
]
export default function Comments() {
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
                            <CarouselItem key={menue.id} className=" md:basis-1/2 lg:basis-1/3   ">
                                <div className="">
                                    <Card className="rounded-2xl shadow-lg  h-[350px]">
                                        <CardContent className="flex aspect-square items-center    w-full h-[350px] rounded-2xl   flex-col ">
                                            <h2 className="text-2xl font-bold  mt-6 mb-2 self-start  text-[#922150]">{menue.title}</h2>
                                            <p className="text-[#0d0e0b]  self-start">{menue.description}</p>
                                            <div className="mt-5 border border-t-slate-400  h-auto w-full flex gap-6  p-4">
                                               <Image src={menue.image} height={100} width={100} alt="logo" className="h-16 w-16 rounded-full"/>
                                               <div>
                                                <h5  className="font-bold">{menue.name}</h5>
                                                 <h5>{menue.about}</h5>
                                               </div>
                                            </div>
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