"use client";

import { useEffect, useState } from "react";
import ThemeButton from "@/components/ThemeButton";
import Link from "next/link";

import { useTheme } from "next-themes";
import Image from "next/image";
import { socialsStack } from "./constants";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

function Navbar() {
  const [isCopying, setIsCopying] = useState(false);
  const [isMounted, setIsMounted] = useState<boolean | null>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  });

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

  const navbar = (
    <>
      <div className="flex items-center flex-wrap space-x-4 ">
        <span id="mymail" className="hidden md:flex">
          pavol.slovak1995@gmail.com
        </span>
        <button className="btn" onClick={copyAddressFn}>
          <EnvelopeIcon className="w-3 h-3 mr-1 " />
          {isCopying ? "Copied!" : "Copy"}
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
        <div className="flex">
          {socialsStack.map((social, index) => (
            <span key={social.text} className="flex items-center">
              {/* Desktop links */}
              <Link
                href={social.src}
                className="hover:underline hidden md:block "
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.text}
              </Link>
              {index !== socialsStack.length - 1 && (
                <span className="mx-1 hidden md:block">/</span>
              )}
              {/* Mobile links */}
              <Link
                href={social.src}
                className=" btn-socials bg-white dark:bg-container_dark_lighter hover:border-black dark:hover:border-container "
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMounted && (
                  <Image
                    className=" "
                    src={
                      resolvedTheme === "light"
                        ? social.iconBlack
                        : social.iconWhite
                    }
                    width={24}
                    height={24}
                    alt={social.text}
                  />
                )}
              </Link>
            </span>
          ))}
        </div>

        {/* Dark/Light Mode Button */}
        <ThemeButton />
      </div>
    </>
  );

  return (
    <nav className="flex py-10 justify-between wrap-none dark:border-container_dark_lighter dark:border-b-2 mx-4 md:mx-8  bg-container dark:bg-container_dark">
      {navbar}
    </nav>
  );
}

export default Navbar;
