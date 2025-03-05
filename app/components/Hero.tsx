import Image from "next/image";
import profilepic from "@/public/personal-picture.jpeg";
function Hero() {
  return (
    <section
      id="hero"
      className="flex bg-container_lighter dark:bg-container_dark_lighter"
    >
      {/* Inner container */}
      <div className="flex flex-col w-full h-full  rounded-b-[100px] bg-container dark:bg-container_dark">
        {/* Hero content */}
        <div className="flex flex-col items-center space-y-8 py-10">
          {/* Main image */}
          <span className="relative w-32 h-32 border-4 border-container rounded-full  ">
            <Image
              src={profilepic}
              alt="Pavol Slovak picture"
              className="w-full h-full object-contain rounded-full grayscale shadow-lg"
              draggable="false"
              priority
            />
            {/* Label */}
            <span className="absolute left-24 top-4 -rotate-[0.2rad] bg-container_lighter dark:bg-container text-black p-2 w-36 text-center rounded-full shadow-lg">
              Pavol Slovak &#128075;
            </span>
          </span>
          {/* Heading */}
          <h1>
            Building digital
            <br /> products, websites and experience
          </h1>
          <a
            href="#portfolio"
            className="largeBtn bg-black dark:bg-container_dark_lighter text-container "
          >
            See latest projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
