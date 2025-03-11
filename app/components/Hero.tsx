"use client";
import Image from "next/image";
import profilepic from "@/public/personal-picture.jpeg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="flex bg-container_lighter dark:bg-container_dark_lighter"
    >
      {/* Inner container */}
      <div className="flex flex-col w-full h-full  rounded-b-[100px] bg-container dark:bg-container_dark">
        {/* Hero content */}
        <div className="flex flex-col items-center space-y-16 py-24 ">
          {/* Main image */}
          <span className="relative w-40 h-40 border-4 border-white dark:border-container rounded-[50%]">
            <Image
              src={profilepic}
              alt="Pavol Slovak picture"
              className="w-full h-full object-cover rounded-full  grayscale shadow-lg"
              draggable="false"
              priority
            />
            {/* Label */}
            <motion.span
              className="absolute left-24 top-16 -rotate-[0.2rad] bg-container_lighter dark:bg-container text-black p-2 w-36 text-center rounded-full shadow-lg"
              animate={{ y: [0, 16, 0], rotate: [-11.5, -11.5, -11.5] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 3,
              }}
            >
              Pavol Slovak &#128075;
            </motion.span>
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
