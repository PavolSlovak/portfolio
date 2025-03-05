import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact-form" className="bg-container dark:bg-container_dark">
      {/* Inner container */}
      <div className="flex flex-col items-center bg-container_lighter dark:bg-container_dark_lighter rounded-t-[100px] p-10 space-y-10 ">
        <h1>Tell me about your project!</h1>

        <div className="flex space-x-5 ">
          <Link
            href="/Contact"
            className="largeBtn text-container_lighter dark:text-black bg-black dark:bg-container flex flex-row items-center cursor-pointer"
          >
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            Email Me
          </Link>
          <Link
            href={"https://wa.me/+61491652332"}
            className="largeBtn bg-container_lighter dark:bg-container_dark_lighter largeBtn border-2 border-black dark:border-container"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
