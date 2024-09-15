"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion";

const services = [
    {
        num: "Q1",
        title: "How can I make a reservation?",
        description: "Our clinic operates by appointment only.Please schedule your appointment in advance by calling us at 416-486 -0287 or emailing kojima@rogers.com.For your first visit, we recommend arriving a little early, as it may take extra time to complete the medical record and conduct the initial interview.Please ensure you arrive at least 10 minutes before your scheduled treatment time."
    },
    {
        num: "Q2",
        title: "Is acupuncture painful?",
        description: "Many people associate acupuncture with pain, but the experience can vary widely depending on your individual constitution and sensitivity.We can adjust the thickness of the needles and the treatment approach to ensure that it is comfortable for you.In many cases, the treatment is not painful at all."
    },
    {
        num: "Q3",
        title: "How often should I visit?",
        description: "Depending on the symptom, it is more effective to continue without a gap if there is sudden disease or symptom and pain is strong.  People with intractable diseases and chronic diseases should take 1-2 times a week, and health management and disease prevention should take 1-2 times a month.  Please feel free to contact us when you come to acupuncture treatment."
    },
    {
        num: "Q3",
        title: "Are acupuncture needles disposable?",
        description: "Yes. At our clinic, 100% of the acupuncture needles are disposed after each use. There is no need to worry about infection. Please be assured."
    },
    {
        num: "Q4",
        title: "How should I dress up for my appointment ?",
        description: "When treating symptoms, sometimes only the affected area is targeted. However, Oriental medicine typically involves comprehensive treatments. For this reason, treatments such as acupuncture and moxibustion often use acupoints located on the back and feet. It's advisable to bring your own comfortable clothing, like T-shirts and shorts, although we do provide garments for changing if needed."
    },
    {
        num: "Q5",
        title: "Does acupuncture make conditions worse?",
        description: "Generally, acupuncture shouldn't worsen your condition unless you have a metal allergy. If acupuncture seems unsuitable, it could be that the treatment method wasn't compatible with your body type. There are many different acupuncture techniques available. Consider finding a practitioner who better suits your needs by trying a different clinic."
    },
    {
        num: "Q6",
        title: "Is health insurance effective for acupuncture and moxibustion treatment?",
        description: "OHIP does not cover acupuncture or moxibustion. However, if you have private health insurance, it's a good idea to contact your provider to inquire about coverage. The inclusion of acupuncture and moxibustion treatments depends on your specific insurance plan."
    },
    {
        num: "Q7",
        title: "Is it safe to use with Western medicine?",
        description: "Combining Western medicine with acupuncture generally poses no issues. Using acupuncture alongside medication may accelerate symptom relief and minimize drug side effects. Additionally, many people visit our treatment center preferring to use minimal medication. While synergistic effects have been observed in some cases when combined with Western medicine, outcomes can vary based on individual symptoms and medical conditions. Please don't hesitate to contact us to discuss your specific situation."
    },
    {
        num: "Q8",
        title: "Is there a cancellation fee?",
        description: "No cancellation fee will be applied if you cancel before the final reception time on the day prior to your scheduled appointment. Cancellations made after this time will incur a fee."
    },
    {
        num: "Q9",
        title: "How long are the acupuncture treatments?",
        description: "The duration of the treatment varies based on the symptoms and their onset, but it typically lasts about one hour. The length of the treatment does not affect the fee. If it's your first visit, please arrive 10 minutes early to allow time for filling out medical forms and for an initial consultation."
    },
    {
        num: "Q10",
        title: "How can I pay the treatment fee?",
        description: "Our clinic accepts cash, debit cards, and checks. Please note that we do not accept credit cards."
    },
    {
        num: "Q11",
        title: "Does acupuncture really work?",
        description: "Consider the opposite perspective: why would therapies be used for over 2000 years if they were ineffective? The World Health Organization (WHO) recognizes that acupuncture is effective for many diseases. Recently, acupuncture has been widely adopted not just in Asian countries like China and Japan, but globally as well. However, the effectiveness of acupuncture and moxibustion treatments can vary among individuals, and there are some conditions for which these treatments are not recommended."
    }
]

const Qa = () => {
    return (
        <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-gray-950 group-hover:text-gray-800 transition-all duration-300">{service.num}</div>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-[#674636] group-hover:text-accent transition-all duration-300">{service.title}</h2>
                                <p className="text-[#674636]/60">{service.description}</p>
                                <div className="border-b border-black/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Qa