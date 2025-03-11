import Link from "next/link";
import Form from "@/components/Form";

function Contact() {
  return (
    <section id="contact-form">
      {/* Inner container */}

      <div className="flex flex-col items-center text-center bg-container_lighter dark:bg-container_dark_lighter rounded-t-[100px] py-24 space-y-16 px-4 md:px-8">
        <h1>Let&apos;s build something amazing together!</h1>
        <Link
          href={"https://wa.me/+61491652332"}
          className="largeBtn bg-container_lighter dark:bg-container_dark_lighter border-2 border-black dark:border-container"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </Link>
        <p className=" text-lg  dark:text-gray-300 md:w-2/3">
          We would love to hear from you! Whether you have a question or want to
          discuss a potential project, feel free to reach out using the form
          below, and we will get back to you as soon as possible.
        </p>

        <Form />
      </div>
    </section>
  );
}

export default Contact;
