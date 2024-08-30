import { VscGithub } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import ContactCard from "../components/ContactCard";


const Contact = () => {

  const contactList = [
    {
      title: "GitHub",
      icon: <VscGithub />,
      socialLink: "https://github.com/Gleis0nLemos",
    },
    {
      title: "Instagram",
      icon: <RiInstagramLine />,
      socialLink: "https://www.instagram.com/__gleisonlemos/",
    },
    {
      title: "Linkedin",
      icon: <RiLinkedinFill />,
      socialLink: "https://www.linkedin.com/in/gleison-lemos-3b3929239/",
    },
    {
      title: "Gmail",
      icon: <BiLogoGmail />,
      socialLink: "mailto:gleison04lemos@gmail.com",
    },
  ]
  return (
    <div className="container mx-auto mt-24 justify-start items-center max-w-3xl">
      <div className="flex items-center gap-2">
        <h1 className="text-link">On The Web</h1>
        <div>
          <hr className="w-[10px] border-t-2 border-link" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">More of my work</h1>
        <div className="grid grid-cols-3 gap-4">
          {contactList.map((contact, index) => (
              <ContactCard 
                key={index}
                title={contact.title}
                icon={contact.icon}
                socialLink={contact.socialLink}
              />
            ))}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-24">
        <h1 className="text-link">Contact</h1>
        <div>
          <hr className="w-[10px] border-t-2 border-link" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Look Who's Here</h1>
        <p className="mb-1 mt-2 text-gray-400">The fastest way to get in touch with me is to send me a message on <a href="https://www.linkedin.com/in/gleison-lemos-3b3929239/" target="_blank" className="text-lime hover:underline">LinkedIn</a> or a DM on <a href="https://www.instagram.com/__gleisonlemos/" target="_blank"className="text-lime hover:underline">Instagram</a>.</p>
        <p className="mb-1 mt-2 text-gray-400">Whether you have a question or just want to say "Hi," I'll try my best to get back to you.</p>
      </div>
    </div>
  );
}
 
export default Contact;