"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        category: "Acupuncture needle",
        description: "Many people worry that acupuncture needles will be painful, similar to the needles used for injections, but they are actually much thinner. At our clinic, we use ultra-thin, flexible needles that are about the thickness of a hair, ranging from 0.10 mm to 0.20 mm. While it’s not entirely pain-free—comparable to the sensation of a mosquito bite—it’s generally minimal. Additionally, all our acupuncture needles are disposable to ensure cleanliness and safety.",
        image: "/assets/acupuncture-needle.png",
        alt: "Acupuncture Needles"
    },
    {
        category: "Moxa(moxibustion)",
        description: "Point moxibustion is a hyperthermia therapy that involves placing tiny pieces of moxa, about half the size of a grain of rice, on specific acupuncture points. To safeguard against burns, a protective Shiunko ointment is applied beforehand. This method allows for precise targeting of key areas, proving especially beneficial for symptoms associated with cold and for enhancing the treatment's effects. It is particularly effective for individuals with chronic conditions or those who have low body energy, known as 'kyo- sho'. Depending on the individual's condition, point moxibustion can also be safely practiced at home with professional guidance.",
        image: "/assets/moxa1.png",
        alt: "Moxa(moxibustion)"
    },
    {
        category: "Child Safe Acupuncture",
        description: "Child safe acupuncture involves a non-invasive method tailored for children, utilizing stroking or rubbing techniques rather than needle insertion. Various degrees of pressure are applied to stimulate the body's natural healing responses. Children have a vigorous metabolism, and even mild stimulation can significantly enhance their natural healing abilities, making this approach highly effective.",
        image: "/assets/child-safe-acupuncture.png",
        alt: "Child Safe Acupuncture"
    },
    {
        category: "Skin Needle Acupuncture",
        description: "Skin needle acupuncture involves the application of tiny needles, each about 0.06 mm in length, to crucial acupoints to prolong the therapeutic effects after treatment.These needles are affixed with tape and typically left in place for about three days.This method is especially suited for sensitive areas of the body such as the fingers, toes, and face.",
        image: "/assets/skin-needle-acupuncture.png",
        alt: "Skin Needle Acupuncture"
    },
    {
        category: "Kinesiology tape",
        description: "Kinesiology tape is commonly used for acute muscle symptoms and sports injuries, proving particularly effective for knee-related issues. Its usage has become increasingly visible among athletes, including those participating in the Olympics and various professional sports.",
        image: "/assets/kinesiology-tape.png",
        alt: "Kinesiology tape"
    },
    {
        category: "Electronic heating moxa device",
        description: "The electronic warm moxa device used in our clinic warms the acupuncture needle and its surroundings by emitting far infrared rays from special ceramics energized by electricity. This method serves the same purpose as moxa head acupuncture but offers the advantage of delivering sustained thermal energy for extended periods. This allows for deeper heat penetration into the body, making it ideal for targeting deeper tissues. Additionally, this treatment is known for its comforting and relaxing effects.",
        image: "/assets/heating-moxa-device.png",
        alt: "Electronic heating moxa device"
    },
    {
        category: "TDP Lamp",
        description: "The TDP lamp emits far-infrared radiation to warm the body, making it ideal for applying hyperthermia over a broad area. Typically used in conjunction with needle acupuncture, the lamp is positioned above the treatment area to enhance the therapeutic effects by providing deep, penetrating heat.",
        image: "/assets/tdp-lamp.png",
        alt: "TDP Lamp"
    },
]

const Treatments = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <h2 className="text-[38px] font-bold leading-none text-[#674636] group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <p className="text-[#674636]/60">{project.description}</p>
                            <div className="border border-[#674636]/20"></div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            className="xl:h-[520px] mb-4 xl:mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt={project.alt}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover;bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Treatments