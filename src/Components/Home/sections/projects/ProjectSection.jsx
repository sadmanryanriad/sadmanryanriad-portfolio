import Header from "../../../mini-components/Header";
import SingleCard from "./SingleCard";

const ProjectSection = () => {
    const projects = [
        {
            CardTitle: "Your ultimate destination for a luxurious hotel experience",
            liveLink: "https://assignment-11-785f0.web.app/",
            githubLink: "https://github.com/sadmanryanriad/Assignment-11-client-ph",
            CardDescription: "",
            image: "https://i.ibb.co/ZJ1SMQ5/hotel-management-ss.png",
        },
        {
            CardTitle: "Efficiently manage your company's workforce",
            liveLink: "https://assignment-12-14f39.web.app/",
            githubLink: "https://github.com/sadmanryanriad/Assignment-12-client-ph",
            CardDescription: "",
            image: "https://i.ibb.co/k3JkMhs/employee-management-ss.png",
        },
        {
            CardTitle: "Discover Your Dream Car. Find the perfect match for your needs",
            liveLink: "https://assignment-10-automotive.web.app/",
            githubLink: "https://github.com/sadmanryanriad/Assignment-10-client-ph",
            CardDescription: "",
            image: "https://i.ibb.co/k3KQLLy/automotive-ss.png",
        },
    ]
    return (
        <>
        <Header>Projects & Experiences</Header>
                  <section className="bg-gray-2 pb-10 dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map(project=><SingleCard key={project}
              image={project?.image}
              CardTitle={project?.CardTitle}
              githubLink={project?.githubLink}
              liveLink={project?.liveLink}
              CardDescription={project?.CardDescription}
            />)}
          </div>
        </div>
      </section>
        </>
    );
};

export default ProjectSection;