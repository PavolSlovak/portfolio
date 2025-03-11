"use client";

import { useEffect, useState } from "react";
import useResize from "@/store/useResize";
import ThemeButton from "@/components/ThemeButton";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function Navbar() {
  const [isCopying, setIsCopying] = useState(false);
  const { isMobile } = useResize();

  const socials = {
    linkedIn: "https://www.linkedin.com/in/pavol-slov%C3%A1k-2455331b5/",
    git: "https://github.com/PavolSlovak",
    instagram: "https://www.instagram.com/pavol.slovak1995/",
  };

  function copyAddressFn() {
    const mail = document.getElementById("mymail") as HTMLSpanElement | null;
    if (mail) {
      if (mail.textContent) {
        navigator.clipboard.writeText(mail.textContent);
        setIsCopying(true);
      }
    }
  }
  useEffect(() => {
    if (isCopying) {
      setTimeout(() => {
        setIsCopying(false);
      }, 2000);
    }
  }, [isCopying]);

  let navbar;
  if (isMobile) {
    navbar = (
      <>
        <div className="flex">
          <span id="mymail" className="absolute hidden">
            pavol.slovak1995@gmail.com
          </span>
          <button className="btn " onClick={copyAddressFn}>
            {isCopying ? "Copied!" : <EnvelopeIcon className="w-5 h-5" />}
          </button>
          <Link
            href="/CV_SLOVAK_PAVOL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ml-4 "
          >
            CV
          </Link>
        </div>
        <ThemeButton />
      </>
    );
  } else {
    navbar = (
      <>
        <div className="flex items-center flex-wrap space-x-4 ">
          <span id="mymail">pavol.slovak1995@gmail.com</span>
          <button className="btn" onClick={copyAddressFn}>
            {isCopying ? "Copied" : "Copy"}
          </button>
          <Link
            href="/CV_SLOVAK_PAVOL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            CV
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* Links */}
          {!isMobile && (
            <div className="flex">
              <Link
                href={socials.linkedIn}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
              <span className="mx-1">/</span>
              <Link
                href={socials.git}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
              <span className="mx-1">/</span>
              <Link
                href={socials.instagram}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          )}
          {/* Dark/Light Mode Button */}
          <ThemeButton />
        </div>
      </>
    );
  }

  return (
    <nav className="flex py-10 justify-between wrap-none dark:border-container_dark_lighter dark:border-b-2 mx-4 md:mx-8  bg-container dark:bg-container_dark">
      {navbar}
    </nav>
  );
}

export default Navbar;
