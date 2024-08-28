const About = () => {
  return (  
    <div className="container mx-auto mt-28 justify-start items-center max-w-3xl">
      <div className="flex gap-2">
        <h1 className="text-link">About</h1>
        <span className="text-type-gray text-bold">--</span>
      </div>

      <h1 className="text-2xl font-semibold">Hi! I'm Gleison👋🏻</h1>
      <p className="mb-1 mt-2 text-gray-400">I'm an aspiring Systems Analysis and Development academic, I'm 24 years old, I live in Brazil and I'm very interested in backend creations. My hardskills are PHP, Laravel, SQL. My experiences at the moment are personal open source projects. </p>
      <p className="text-gray-400">In my free time, I always seek to deepen my knowledge in the world of programming, I recommend that you pay attention to my <a href="https://github.com/Gleis0nLemos" target="_blank" className="underline text-secondary decoration-lime font-bold hover:bg-lime" >GitHub</a>. I'm dedicated to becoming a top-notch developer and building your dream project with you giving my all!</p>
    </div>
  );
}
 
export default About;