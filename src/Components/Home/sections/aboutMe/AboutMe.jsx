import riadPic from "../../../../assets/riad-transparent-800.png";
import Header from "../../../mini-components/Header";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="dark:bg-gray-700  sm:p-4  pt-8 md:pt-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center text-center p-5">
        <div className="md:w-3/5 sm:p-5 text-gray-700">
          <Header>About Me</Header>
          <p id="bio" className="text-lg md:text-xl dark:text-slate-300">
          A passionate <span className="text-orange-400 font-semibold">Web Developer</span> with a love for exploring cutting-edge technologies. Currently pursuing a degree in Computer Science and Engineering, I dedicate each day to enhancing my coding skills. Transforming ideas into functional web solutions is not just my job – it is my passion.
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="overflow-hidden">
            <img className="w-full" src={riadPic} alt="Sadman ryan Riad pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
