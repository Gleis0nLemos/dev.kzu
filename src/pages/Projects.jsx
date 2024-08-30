import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const projectList = [
    {
      title: "Digital Store",
      bgColor: "bg-gradient-5",
      githubLink: "https://github.com/Gleis0nLemos/digital_store",
      deployLink: "https://digital-store-eta.vercel.app/",
      languages: ["JS", "React", "Tailwind"],
      description: "Frontend challenger by Geração Tech. This project serves as the foundational frontend for a fully responsive and comprehensive ecommerce platform. 🛒",
    },
    {
      title: "Todo List",
      bgColor: "bg-gradient-6",
      githubLink: "https://github.com/Gleis0nLemos/To_do",
      languages: ["Python", "JS", "HTML", "CSS"],
      description: "Daily to-do list project for personal organization, It's straightforward and simple to use. 📝",
    },
    {
      title: "Backend Challenge",
      bgColor: "bg-gradient-7",
      githubLink: "https://github.com/Gleis0nLemos/project-backend-gt",
      languages: ["JS", "NodeJS", "SQL"],
      description: "Complete CRUD implementation using Node.js and MySQL. It includes user creation ]]with JWT authentication and additional endpoints with basic security for now. 🚀",
    },
    {
      title: "Super Gestão",
      bgColor: "bg-gradient-8",
      githubLink: "https://github.com/Gleis0nLemos/super_gestao",
      languages: ["PHP", "Laravel", "SQL", "Docker"],
      description: "Complete CRUD implementation in PHP following the best practices. Apologies for the missing README.md. 🦈",
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
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;