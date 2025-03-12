function About() {
  return (
    <section id="about">
      <div className="relative flex flex-col items-center mt-20 bg-container dark:bg-container_dark mx-4 md:mx-8 ">
        <span className="absolute left-1/2 -translate-x-1/2 -top-5 -rotate-[0.2rad] bg-container_lighter dark:bg-container text-black p-2 w-36 text-center rounded-full shadow-lg">
          About me
        </span>
        <span className="w-4/5 h-0.5   bg-container_lighter"></span>
        <article className=" md:w-4/5 text-center text-lg py-16 ">
          <p>
            Hi, I&apos;m Pavol Slovak, a full-stack developer based in Sydney. I
            have experience in building digital products, websites and
            experiences. I have a passion for creating and designing products
            that are both functional and aesthetically pleasing. I am proficient
            in a variety of programming languages and frameworks, including
            React, Node.js, and MongoDB. I am always looking for new
            opportunities to learn and grow as a developer.
          </p>
        </article>
        <div />
      </div>
    </section>
  );
}

export default About;
