"use client";

import Loading from "@/app/loading";
import { skillsImage } from "@/utils/image-skill";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchSkills = async () => {
      const res = await fetch(
        `https://portfolio-backend02.vercel.app/api/v1/skill`
      );
      const data = await res.json();
      if (data.data) {
        setSkillsData(data.data[0].skills);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setSkillsData([]);
      }
    };
    fetchSkills();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="skills" className="py-10 lg:py-20 bg-[#ededed] dark:bg-gray-900">
      <div className="container">
        <div className="flex justify-center mb-10">
          <h3 className="text-2xl font-bold border-b-2 border-primary dark:border-primary inline-block pb-1 uppercase text-gray-900 dark:text-gray-100">
            My skills
          </h3>
        </div>

        <div className="w-full my-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-primary bg-white dark:bg-gray-800 shadow-none shadow-gray-50 dark:shadow-gray-900 group-hover:border-primary transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src || "/placeholder.svg"}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-black dark:text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
