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
      socialLink: "https://github.com/Gleis0nLemos",
    },
    {
      title: "Linkedin",
      icon: <RiLinkedinFill />,
      socialLink: "https://github.com/Gleis0nLemos",
    },
    {
      title: "Gmail",
      icon: <BiLogoGmail />,
      socialLink: "https://github.com/Gleis0nLemos",
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
        <div className="grid grid-cols-3 gap-4 mt-4">
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
    </div>
  );
}
 
export default Contact;