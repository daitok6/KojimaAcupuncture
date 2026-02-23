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
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {statsConfig.map((item, index) => {
                        const text = t(item.key);
                        return (
                            <div className="flex-1 flex gap-3 xl:gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                    aria-hidden
                                />
                                <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-accent/80`}>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats