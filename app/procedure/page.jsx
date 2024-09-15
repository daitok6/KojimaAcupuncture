"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "Step 1",
        title: "Make a Reservation",
        description: "Schedule your visit by phone, email, or text message.",
        hasButton: true
    },
    {
        num: "Step 2",
        title: "Visit the Clinic",
        description: "Come to our clinic on your scheduled date and time."
    },
    {
        num: "Step 3",
        title: "Set Up a Treatment Program",
        description: "Upon arrival, you will undergo a thorough assessment which includes filling out your medical chart and participating in an interview. We will conduct various diagnostic tests such as pulse, abdominal, back, and neck diagnosis to tailor a treatment program suited to your needs."
    },
    {
        num: "Step 4",
        title: "Begin Acupuncture and Moxibustion Treatment",
        description: "Our treatment approach is divided into three stages, typically lasting between 45 minutes to an hour, depending on individual conditions and needs."
    }
]

const Procedure = () => {
    return (
        <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 gap-[20px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group rounded-lg border-2 border-gray-700 p-2">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold transition-all duration-300">{service.num}</div>
                                    {service.hasButton && (
                                        <Link href="/contact" className="p-3 rounded-full text-gray-950 bg-[#AAB396]/80 group-hover:bg-[#AAB396] transition-all duration-500 flex justify-center items-center">
                                            <p className="text-gray-700 text-md">Book an Appointment</p>
                                        </Link>
                                    )}
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-gray-950">{service.title}</h2>
                                <p className="text-gray-800/60">{service.description}</p>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Procedure