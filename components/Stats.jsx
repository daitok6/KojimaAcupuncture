"use client";

import CountUp from "react-countup/";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const statsConfig = [
    { num: 30, key: "years" },
    { num: 2000, key: "patients" },
    { num: 2, key: "styles" },
];

const Stats = () => {
    const { language } = useLanguage();
    const t = (key) => getTranslation(language, `stats.${key}`);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0" aria-label="Clinic statistics">
            <div className="container mx-auto">
                <div className="flex gap-6 xl:gap-4">
                    {statsConfig.map((item, index) => {
                        const text = t(item.key);
                        return (
                            <div className="flex-1 flex flex-col xl:flex-row gap-1 xl:gap-4 items-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-3xl xl:text-6xl font-extrabold whitespace-nowrap"
                                    aria-hidden
                                />
                                <p className="leading-snug text-accent/80 text-center xl:text-left text-sm xl:text-base [word-break:normal]">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats