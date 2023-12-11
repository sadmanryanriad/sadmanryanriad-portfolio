
const ExperienceSection = () => {
  // Fake data for experiences
  const frontendExperiences = [
    { icon: 'html.png', name: 'HTML' },
    { icon: 'css.png', name: 'CSS' },
    { icon: 'sass.png', name: 'SASS' },
    { icon: 'javascript.png', name: 'JavaScript' },
    { icon: 'typescript.png', name: 'TypeScript' },
    { icon: 'material-ui.png', name: 'Material UI' },
  ];

  const backendExperiences = [
    { icon: 'postgresql.png', name: 'PostgreSQL' },
    { icon: 'nodejs.png', name: 'Node JS' },
    { icon: 'expressjs.png', name: 'Express JS' },
    { icon: 'git.png', name: 'Git' },
  ];

  return (
    <section id="experience" className="text-center py-16 mx-auto">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Development */}
        <div className="about-containers">
          <div className="details-container bg-white p-6 rounded-lg shadow-md">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container space-y-4">
              {frontendExperiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="about-containers">
          <div className="details-container bg-white p-6 rounded-lg shadow-md">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container space-y-4">
              {backendExperiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow cursor-pointer mt-8 mx-auto"
        onClick={() => (window.location.href = './#projects')}
      />
    </section>
  );
};

const ExperienceItem = ({ icon, name }) => {
  return (
    <article className="flex items-center">
      <img src={`./assets/${icon}`} alt={`${name} icon`} className="icon" />
      <div className="ml-2">
        <h3>{name}</h3>
      </div>
    </article>
  );
};

export default ExperienceSection;
