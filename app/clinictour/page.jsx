"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        description: "Clinic Entrance",
        image: "/assets/clinic-entrance.png",
        alt: "Clinic Entrance"
    },
    {
        description: "Parking",
        image: "/assets/parking.png",
        alt: "Parking"
    },
    {
        description: "Waiting Area",
        image: "/assets/waiting-area.png",
        alt: "Waiting Area"
    },
    {
        description: "Treatment Room 1",
        image: "/assets/treatment-room1.png",
        alt: "Treatment Room 1"
    },
    {
        description: "Treatment Room 2",
        image: "/assets/treatment-room2.png",
        alt: "Treatment Room 2"
    },
]

const ClinicTour = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center">
            <div className="container mx-auto">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="h-[80vh] xl:h-[1500px] mb-12"
                    onSlideChange={handleSlideChange}
                    loop={true}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="w-full h-full xl:h-[1500px]">
                            <div className="h-full xl:h-[1500px] relative flex justify-center items-center">
                                <div className="absolute inset-0 bg-black/10 z-10"></div>
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <p className="text-2xl font-bold text-white absolute bottom-10 left-10">{project.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                </Swiper>
            </div>
        </motion.div>
    )
}

export default ClinicTour