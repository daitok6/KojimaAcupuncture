"use client"

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "6479919919",
        href: "tel:"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "kojima@rogers.com",
        href: "mailto:"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Toronto, Ontario",
        href: "https://www.google.com/maps/dir//leaside+acupuncture+and+shiatsu+reviews/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89d4ccd48398b68f:0xbc822418dfa4501c?sa=X&ved=1t:3061&ictx=111"
    },
]

const Contact = () => {
    const form = useRef();

    emailjs.init("_fQKS4Q5xuad-XYUb");

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current && form.current.tagName === 'FORM') {
            emailjs.sendForm('service_kymn4nk', 'template_8iwbgxj', form.current)
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                });
        } else {
            console.error('Form reference is not correctly set.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#AAB396] rounded-xl">
                            <h3 className="text-4xl text-accent">Book Appointment</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="text" placeholder="Firstname" />
                                <Input name="lastname" type="text" placeholder="Lastname" />
                                <Input name="email" type="email" placeholder="Email address" />
                                <Input name="phone" type="tel" placeholder="Phone number" />
                                <Input name="appointment_date" type="date" placeholder="Select Date" />
                                <Input name="appointment_time" type="time" placeholder="Select Time" />
                            </div>
                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="First Visit">First Visit</SelectItem>
                                        <SelectItem value="Ongoing Treatment">Ongoing Treatment</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea name="message" className="h-[200px]" placeholder="Type your message here" />
                            <Button size="md" className="max-w-40" type="submit">Send message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <a href={`${item.href}${item.description}`} className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#AAB396] text-accent rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110">
                                            <div className="flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                        </a>
                                        <div className="flex-1">
                                            <p className="text-[#674636]/60">{item.title}</p>
                                            <h1 className="text-xl">{item.description}</h1>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Contact