"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion";


const about = {
    title: "About me",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tadashi Kojima"
        },
        {
            fieldName: "Phone",
            fieldValue: "(416) 586 0287"
        },
        {
            fieldName: "Experience",
            fieldValue: "30+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "tadashikojima89@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Japanese"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Japanese"
        },
    ]
}

const experience = {
    title: "Background",
    items: [
        {
            company: "Kanto Acupuncture College",
            position: "Graduated",
            duration: "1992"
        },
        {
            company: "Japan",
            position: "Acquired acupuncture qualification",
            duration: "1992"
        },
        {
            company: "Shanghai Medical Academy",
            position: "International Acupuncture Training Course",
            duration: "1992~1993"
        },
        {
            company: "Ishige clinic(Japan)",
            position: "Practitioner at a back pain clinic",
            duration: "1992 - 1994"
        },
        {
            company: "Tokyo shiatsu clinic(Toronto)",
            position: "Practitioner at a acupuncture clinic",
            duration: "1994 - 1999"
        },
        {
            company: "Leaside Acupuncture Clinic(Toronto)",
            position: "Started a acupuncture clinic",
            duration: "1999 - now"
        }
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-gray-800">{experience.title}</h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#AAB396] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-[#674636]/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold text-gray-800">{about.title}</h3>
                                <p className="max-w-[600px] text-[#674636]/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-[#674636]/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume