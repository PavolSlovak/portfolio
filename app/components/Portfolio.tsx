import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Levantes from "@/public/Levantes.png";
import NotesPage from "@/public/Dribble.png";
import Loopstudios from "@/public/Loopstudios.png";
import Shortly from "@/public/Shortly.png";
import ClipboardPage from "@/public/Clipboard.png";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Levantes Pizza",
      description: "A pizza ordering app",
      image: Levantes,
      href: "https://pizza-website-lac.vercel.app/",
    },
    {
      title: "Notes Management App",
      description: "A note taking app",
      image: NotesPage,
      href: "https://dribble-mu-six.vercel.app/",
    },
    {
      title: "Loopstudios ",
      description: "A landing page",
      image: Loopstudios,
      href: "https://loopstudios-phi-three.vercel.app/",
    },
    {
      title: "Shortly",
      description: "A link shortening app",
      image: Shortly,
      href: "https://shortly-peach-eight.vercel.app/",
    },
    {
      title: "Clipboard",
      description: "A clipboard landing page",
      image: ClipboardPage,
      href: "https://clipboard-website-six.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="bg-container dark:bg-container_dark">
      {/* Inner container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
        {portfolioItems.map((_, index) => (
          <Card
            key={index}
            href={portfolioItems[index].href}
            title={portfolioItems[index].title}
            description={portfolioItems[index].description}
            image={portfolioItems[index].image}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

type CardProps = {
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
};
const Card = ({ href, title, description, image }: CardProps) => {
  return (
    <div className="relative w-full h-60 group">
      <Image
        src={image}
        alt={title}
        fill
        className=" object-cover grayscale  group-hover:grayscale-0  "
      />
      {/* label */}
      <Link
        href={href}
        className="text-left"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute left-0 bottom-0 w-full bg-container_dark_lighter text-white p-2 bg-opacity-70 z-10 group-hover:grayscale">
          {description}
        </div>
      </Link>
    </div>
  );
};
