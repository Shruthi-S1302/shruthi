import { SkillsSet } from "./SkillsSet";
import Image from "next/image";

function Skills() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-boldPurple font-bold mt-10 text-md md:text-xl grid-templ">
      {SkillsSet.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center py-6 bg-fadePurple shadow-md hover:shadow-xl"
        >
          <Image
            src={skill.url}
            alt={skill.name}
            height={skill.height}
            width={skill.width}
            className="w-16 h-16 object-contain mb-4"
            loading="eager"
          />
          <span className="text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
