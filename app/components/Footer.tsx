import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-container_lighter dark:bg-container_dark_lighter  ">
      <div className="flex justify-between mx-10 border-t-2 dark:border-t-container py-8">
        <p> &#174; Pavol Slovak</p>
        <div className="flex">
          <Link
            href="https://www.linkedin.com/in/pavol-slov%C3%A1k-2455331b5/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <span className="mx-1">/</span>
          <Link
            href="https://github.com/PavolSlovak"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <span className="mx-1">/</span>
          <Link
            href="https://www.instagram.com/pavol.slovak1995/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
