const ContactCard = ({ title, icon, socialLink }) => {
  return (
    <div className={`px-3 py-4 flex flex-col font-semibold justify-between text-gray-400 border border-type-gray border-b-2 border-b-lime`}>
      <div className="flex justify-between items-center mx-1 my-1">
        <h2 className="text-2xl">{icon}</h2>
        <a 
          href={socialLink}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
