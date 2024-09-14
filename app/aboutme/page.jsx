"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion";


const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis nunc, sagittis ac sollicitudin fermentum, molestie ultrices libero. Morbi vehicula.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tadashi Kojima"
        },
        {
            fieldName: "Phone",
            fieldValue: "01234567890"
        },
        {
            fieldName: "Experience",
            fieldValue: "30+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "kojima@gmail.com"
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
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis nunc, sagittis ac sollicitudin fermentum, molestie ultrices libero. Morbi vehicula.",
    items: [
        {
            company: "Salto Inc.",
            position: "Junior Developer",
            duration: "2023 - Present"
        },
        {
            company: "Michel Bras Toya Japon",
            position: "Chef",
            duration: "2019 - 2023"
        },
        {
            company: "Dummy Company",
            position: "Filler",
            duration: "2015 - 2019"
        },
        {
            company: "Dummy Company",
            position: "Filler",
            duration: "2015 - 2019"
        },
        {
            company: "Dummy Company",
            position: "Filler",
            duration: "2015 - 2019"
        },
    ]
}

const projects = {
    icon: "/assets/resume/cap.svg",
    title: "My projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis nunc, sagittis ac sollicitudin fermentum, molestie ultrices libero. Morbi vehicula.",
    items: [
        {
            project: "Product Management Tool for Sales",
            responsibilities: "System Design, Programming, Deployment",
            tech: "React, Next.js, Laravel, MySQL, Docker, Nginx, Jenkins",
            duration: "2023 - 2024"
        },
        {
            project: "Landing Page",
            responsibilities: "Programming, Deployment",
            tech: "Adobe XD, React, Next.js, Docker, Nginx, Jenkins",
            duration: "2023"
        },
        {
            project: "Dummy Project",
            responsibilities: "Programming, Deployment",
            tech: "Adobe XD, React, Next.js, Docker, Nginx, Jenkins",
            duration: "2023"
        },
        {
            project: "Dummy Project",
            responsibilities: "Programming, Deployment",
            tech: "Adobe XD, React, Next.js, Docker, Nginx, Jenkins",
            duration: "2023"
        },
        {
            project: "Dummy Project",
            responsibilities: "Programming, Deployment",
            tech: "Adobe XD, React, Next.js, Docker, Nginx, Jenkins",
            duration: "2023"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis nunc, sagittis ac sollicitudin fermentum, molestie ultrices libero. Morbi vehicula.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <FaLaravel />,
            name: "laravel"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
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
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-[#674636]/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
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

                        {/* projects */}
                        <TabsContent value="projects" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{projects.title}</h3>
                                <p className="max-w-[600px] text-[#674636]/60 mx-auto xl:mx-0">
                                    {projects.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {projects.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#AAB396] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.project}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-[#674636]/60">{item.responsibilities}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col hap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-[#674636]/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#AAB396] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
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