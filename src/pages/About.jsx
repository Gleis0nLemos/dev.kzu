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
        <p className="mb-1 mt-2 text-gray-400">I'm an student of Systems Analysis and Development, I'm 24 years old, I live in Brazil and I'm very interested in programming world. My hardskills are JS, NodeJs and SQL. My experiences at the moment are personal open source projects. </p>
        <p className="text-gray-400">In my free time, I always seek to deepen my knowledge in the world of programming, I recommend that you pay attention to my <a href="https://github.com/Gleis0nLemos" target="_blank" className="underline text-secondary decoration-lime font-bold hover:bg-lime" >GitHub</a>. I'm dedicated to becoming a top-notch developer and building your dream project with you giving my all!</p>
      </div>
    </div>
  );
}

export default About;