"use client";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    { icon: <PencilSquareIcon className="w-10 h-10" />, text: "UI/UX" },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10" />,
      text: "Web App",
    },
    { icon: <CodeBracketIcon className="w-10 h-10" />, text: "Development" },
    {
      icon: <ComputerDesktopIcon className="w-10 h-10" />,
      text: "Design",
    },
  ];
  useEffect(() => {
    console.log(isHovered);
  });
  // Duplicate the array for seamless looping
  const items = [...techStack, ...techStack];

  return (
    <section id="services" className="bg-container dark:bg-container_dark">
      <div className="bg-container_lighter dark:bg-container_dark_lighter rounded-b-[100px] overflow-hidden">
        <motion.ul
          className="flex w-[200%]"
          animate={{ x: ["0%", "-50%"] }} // Moves fully across, preventing jumps
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {items.map(({ icon, text }, index) => (
            <motion.li
              key={`${text}-${index}`}
              style={{ width: `${100 / items.length}%` }} // Ensures even spacing
              className="flex flex-col items-center justify-center py-16 md:py-8 shrink-0 "
            >
              {icon}
              <p className="font-semibold w-20 text-center">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Services;
