import nodejs from "../../../../assets/icons/node-js.svg";
import mongodb from "../../../../assets/icons/mongodb-original.svg";
import expressjs from "../../../../assets/icons/express-original.svg";
import postman from "../../../../assets/icons/postman-icon.svg";

const BackEnd = () => {
  const skills = [
    {
      skillName: "NodeJs",
      icon: nodejs,
    },
    {
      skillName: "MongoDB",
      icon: mongodb,
    },
    {
      skillName: "ExpressJs",
      icon: expressjs,
    },
    {
      skillName: "Postman",
      icon: postman,
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

export default BackEnd;
