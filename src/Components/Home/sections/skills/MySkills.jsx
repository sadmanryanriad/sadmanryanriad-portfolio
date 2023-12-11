import Header from "../../../mini-components/Header";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
const MySkills = () => {
  // const frontendExperiences = [
  //     { icon: 'html.png', name: 'HTML' },
  //     { icon: 'css.png', name: 'CSS' },
  //     { icon: 'sass.png', name: 'SASS' },
  //     { icon: 'javascript.png', name: 'JavaScript' },
  //     { icon: 'typescript.png', name: 'TypeScript' },
  //     { icon: 'material-ui.png', name: 'Material UI' },
  //   ];
  return (
<div className="bg-base-200 py-5">
<div className="max-w-7xl mx-auto ">
      <Header>My Skills</Header>
      <div className="flex flex-col md:flex-row">
        {/* frontend side left */}
        <div className="p-2 w-full">
          <h2 className="text-2xl font-semibold mb-5 text-center">
            Frontend Development
          </h2>
          <FrontEnd></FrontEnd>
        </div>
        {/* backend side right */}
        <div className="p-2 w-full">
          <h2 className="text-2xl font-semibold mb-5 text-center">
            Backend Development
          </h2>
          <BackEnd></BackEnd>
        </div>
      </div>
    </div>
</div>
  );
};

export default MySkills;
