import html from "../../../../assets/icons/html-5.png";
import css from "../../../../assets/icons/css.png";
import tailwind from "../../../../assets/icons/tailwind-css.svg";
import javascript from "../../../../assets/icons/javascript-js.svg";
import react from "../../../../assets/icons/react.svg";

const FrontEnd = () => {
  const skills = [
    {
      skillName: "Git",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" ,
    },
    {
      skillName: "HTML",
      icon: html ,
    },
    {
      skillName: "CSS",
      icon: css ,
    },
    {
      skillName: "Tailwind",
      icon: tailwind ,
    },
    {
      skillName: "JavaScript",
      icon: javascript ,
    },
    {
      skillName: "React",
      icon: react ,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 border-[2px] border-black p-5 rounded-3xl max-w-xl">
        {skills.map((skill) => (
          <div
            key={skill}
            id="card"
            className=" max-w-[100px] mx-auto p-2"
          >
            <img className="h-16 w-16 mx-auto" src={skill?.icon} alt="icon" />
            <h3 className="font-semibold text-center mt-2">{skill.skillName}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default FrontEnd;
