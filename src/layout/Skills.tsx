import React from "react";

interface SkillsProps {
  language: string;
}

const skills = [
  { name: "React", icon: "react" },
  { name: "NextJS", icon: "nextjs" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "HTML5", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Flutter", icon: "flutter" },
  { name: "Laravel", icon: "laravel" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "NodeJS", icon: "nodejs" },
];

const Skills: React.FC<SkillsProps> = ({ language }) => {
  return (
    <>
      <div className="py-10" />
      <h1 className="text-4xl font-bold mb-10 text-center prose-lg prose-purple">
        {language === "en" ? "SKILLS" : "KEAHLIAN"}
      </h1>
      <div className="flex flex-wrap justify-center lg:w-2/4 mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="m-4 text-center group hover:text-purple-300 transition-transform duration-300"
          >
            <div className="inline-block transform group-hover:scale-110 transition-transform duration-300">
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                width="80"
                height="80"
              />
              <br />
              <span className="block font-medium mt-2">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10" />
    </>
  );
};

export default Skills;
