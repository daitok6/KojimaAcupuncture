"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Resume = () => {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  const about = {
    title: t("about.title"),
    info: t("about.info"),
  };

  const experience = {
    title: t("about.background"),
    items: t("about.experienceItems"),
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center py-2 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">{experience.title}</TabsTrigger>
              <TabsTrigger value="about">{about.title}</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <section className="flex flex-col gap-[30px] text-center xl:text-left" aria-labelledby="experience-heading">
                  <h2 id="experience-heading" className="text-4xl font-bold text-accent">
                    {experience.title}
                  </h2>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-sage/80 h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-soft hover:shadow-premium transition-shadow duration-300"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" aria-hidden></span>
                            <p className="text-accent/70">{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </section>
              </TabsContent>
              <TabsContent value="about" className="w-full">
                <section className="text-center xl:text-left" aria-labelledby="about-heading">
                  <div className="flex flex-col gap-[30px]">
                    <h2 id="about-heading" className="text-4xl font-bold text-accent">
                      {about.title}
                    </h2>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-accent/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </main>
  );
};

export default Resume;
