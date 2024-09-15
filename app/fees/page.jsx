"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "$130",
        title: "First Visit",
        description: "Initial consultation & Treatment",
        href: "/contact"
    },
    {
        num: "$110",
        title: "Follow-Up Treatment",
        description: "Ongoing sessions to continue your treatment plan",
        href: "/contact"
    }
]

const Fees = () => {
    return (
        <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
                >
                    <div className="md:col-span-2 w-full flex flex-col justify-center gap-4 group rounded-lg border-2 border-gray-700 p-2">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold transition-all duration-300">Business Hours</div>

                        </div>
                        <div className="flex-col">
                            <h2 className="text-[42px] font-bold leading-none text-gray-950">Open</h2>
                            <p className="text-gray-800">Monday to Friday 9:00(AM) ~ 7:00(PM)</p>
                            <p className="text-gray-800">Saturday 8:00(AM) ~ 4:00(PM)</p>
                            <p className="text-gray-800/60">Closed on Sundays</p>
                        </div>
                    </div>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group rounded-lg border-2 border-gray-700 p-2">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold transition-all duration-300">{service.num}</div>
                                    <Link href={service.href} className="p-2 rounded-full text-gray-950 bg-[#AAB396]/80 group-hover:bg-[#AAB396] transition-all duration-500 flex justify-center items-center">
                                        <p className="text-gray-700 text-md">Book an Appointment</p>
                                    </Link>
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

export default Fees