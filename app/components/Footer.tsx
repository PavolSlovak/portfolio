"use client";
import { socialsStack } from "@/components/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const [isMounted, setIsMounted] = useState<boolean | null>(false);

  useEffect(() => {
    setIsMounted(true);
  });
  return (
    <footer className=" bg-container_lighter dark:bg-container_dark_lighter  ">
      <div className="flex justify-between items-center mx-10 border-t-2 dark:border-t-container py-8">
        <p> &#174; Pavol Slovak</p>
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
                className="btn-socials bg-black hover:border-black "
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMounted && (
                  <Image
                    src={social.iconWhite}
                    width={24}
                    height={24}
                    alt={social.text}
                  />
                )}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
