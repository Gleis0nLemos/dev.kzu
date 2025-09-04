import { FaDochub } from "react-icons/fa";
import ContactCard from "../components/ContactCard";

const About = () => {
  return (
    <div className="pt-12">
      <div className="container mx-auto mt-20 md:mt-36 justify-start items-center max-w-3xl">
        <div className="flex items-center gap-2">
          <h1 className="text-link">About</h1>
          <div>
            <hr className="w-[10px] border-t-2 border-link" />
          </div>
        </div>

        <div className="flex text-2xl items-center font-semibold">
          <h1>Hi! I'm Gleison</h1>
          <span className="animate-wiggle-more animate-thrice">👋🏻</span>
        </div>

        <p className="mb-3 mt-4 text-gray-400">
          💻 I am a <strong>Systems Analysis and Development</strong> student, 25 years old, based in Brazil, and passionate about the world of programming.
        </p>

        <p className="mb-3 text-gray-400">
          I have experience with <strong>JavaScript (Node.js, Next.js, React.js)</strong> and <strong>PHP (Laravel)</strong>, as well as hands-on practice in building APIs with <strong>Express.js</strong> using <strong>MVC, TDD, SOLID, DDD, and Clean Architecture</strong>. I work with version control via Git/GitHub, code standards, security, and testing. I also have knowledge of <strong>MySQL, SQL Server, and PostgreSQL</strong>, along with proficiency in <strong>HTML, CSS, Tailwind, and Vite</strong>. I also have notions of <strong>deployment and cloud computing</strong>.
        </p>

        <p className="mb-3 text-gray-400">
          🚀 Some of my experiences include participation in <strong>Alura</strong> (2021), where I deepened my knowledge in development (JavaScript, Node.js, React, and Python), as well as soft skills, agile methodologies, and version control. I’ve also built academic projects such as a <strong>responsive e-commerce</strong> with login, search, and advanced filters, and <strong>Agendio</strong>, an online scheduling platform with authentication, modern UI, and user management. Additionally, I’ve developed backend projects like <strong>CRUDs with JWT authentication</strong> in Node.js.
        </p>

        <p className="mb-3 text-gray-400">
          🛠 Technologies I use the most: JavaScript, TypeScript, Node.js, React, Next.js, PHP, Laravel, SQL, PostgreSQL, MySQL, Tailwind, Git, and Figma.
        </p>

        <p className="mb-3 text-gray-400">
          In my free time, I am always studying and looking to deepen my knowledge in new technologies and best practices. I am committed to becoming a <strong>high-level developer</strong> and helping build impactful projects, always giving my best. If you’d like to know more about my work, check out my{" "}
          <a
            href="https://github.com/Gleis0nLemos"
            target="_blank"
            className="underline text-secondary decoration-lime font-bold hover:bg-lime"
          >
            GitHub
          </a>{" "}
          🚀
        </p>


        <div className="flex justify-end mt-6">


            <a
              href="https://drive.google.com/file/d/1LY5jd_GY1eKXw2Bv0qwYI8xQHjZxhOkI/view?usp=sharing"
              target="_blank"
              className="inline-block px-4 py-2 lg:px-12 lg:py-3 rounded-sm bg-white text-black font-medium hover:bg-gray-200 transition delay-100"
            >
              Curriculum Vitae
            </a>
          
        </div>

      </div>
    </div>
  );
};

export default About;
