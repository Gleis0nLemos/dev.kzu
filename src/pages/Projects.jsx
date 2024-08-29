import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const projectList = [
    {
      title: "Project 1",
      bgColor: "bg-gradient-1",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
    {
      title: "Project 2",
      bgColor: "bg-gradient-2",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
    {
      title: "Project 3",
      bgColor: "bg-gradient-3",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
    {
      title: "Project 4",
      bgColor: "bg-gradient-4",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
    {
      title: "Project 5",
      bgColor: "bg-gradient-1",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
    {
      title: "Project 6",
      bgColor: "bg-gradient-2",
      githubLink: "https://github.com/Gleis0nLemos",
      deployLink: "https://github.com/Gleis0nLemos",
      languages: ["PHP", "Laravel", "SQL"],
    },
  ]
  return (
    <div className="pt-12">
      <div className="container mx-auto mt-12 justify-start items-center max-w-3xl">
        <div className="flex items-center gap-2">
          <h1 className="text-link">Projects</h1>
          <div>
            <hr className="w-[10px] border-t-2 border-link" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Stuff I've Worked On</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {projectList.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                bgColor={project.bgColor}
                gitHubLink={project.githubLink}
                deployLink={project.deployLink}
                languages={project.languages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;