import { VscGithub } from "react-icons/vsc";
import { GrShare } from "react-icons/gr";

const ProjectCard = ({ title, bgColor, gitHubLink, deployLink, languages }) => {
  return (
    <div className={`px-4 py-2 h-[243px] flex flex-col justify-between ${bgColor} text-primary`}>
      <div className="flex justify-end gap-4 mt-2">
        <a 
          href={gitHubLink}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub />
        </a>
        {deployLink && (
          <a 
            href={deployLink}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrShare />
          </a>
        )}
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-3xl font-black text-center">{title}</h2>
      </div>
      
      <div className="flex justify-center gap-2">
        {languages.map((lang, index) => (
          <span key={index} className="inline-block font-semibold px-2 py-1 text-sm">
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
