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
        description: "Clinic Building",
        image: "/assets/building.png",
        alt: "Clinic Building"
    },
    {
        description: "Building Entrance",
        image: "/assets/building-entrance.png",
        alt: "Building Entrance"
    },
    {
        description: "Parking",
        image: "/assets/parking.png",
        alt: "Parking"
    },
    {
        description: "Clinic Entrance",
        image: "/assets/clinic.png",
        alt: "Clinic Entrance"
    },
    {
        description: "Treatment Room",
        image: "/assets/treatment-room.png",
        alt: "Treatment Room"
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
                    className="h-[80vh] xl:h-[85vh] mb-12"
                    onSlideChange={handleSlideChange}
                    loop={true}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="w-full">
                            <div className="relative flex justify-center items-center">
                                <div className="absolute inset-0 bg-black/10 z-10"></div>
                                <div className="relative w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        width={4000}// Use actual image dimensions if available
                                        height={3024} // Use actual image dimensions if available
                                        layout="intrinsic" // Important: Adjust height based on image dimensions
                                        className="object-contain sm:object-cover w-full"
                                    />
                                </div>
                                <p className="text-md xl:text-2xl font-bold text-white absolute bottom-4 xl:bottom-10 left-14 xl:left-10">
                                    {project.description}
                                </p>
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