"use client";

import { useForm } from "react-hook-form";
import StyledInput from "@/components/StyledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, TContactForm } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  HandRaisedIcon,
} from "@heroicons/react/16/solid";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ContactFormSchema) });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents mismatched rendering

  function sendForm(data: TContactForm) {
    console.log("form sent", data);
    fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
  }
  return (
    <div className="flex  flex-col bg-container_lighter dark:bg-container_dark_lighter">
      <div className="flex flex-col w-full items-center rounded-b-[100px] bg-container   dark:bg-container_dark py-10 space-y-10">
        <ChatBubbleLeftEllipsisIcon className="w-20 h-20 dark:text-container text-black" />
        <h1>Let's build something amazing together!</h1>
      </div>

      <form
        onSubmit={handleSubmit(sendForm)}
        className="flex flex-col items-center w-full space-y-4  bg-container_lighter dark:bg-container_dark_lighter rounded-b-[100px] p-10"
      >
        <div className="w-full md:w-2/3 grid grid-cols-1 grid-rows-auto md:grid-cols-2 md:grid-rows-auto gap-6">
          <StyledInput
            register={register("name")}
            type={"text"}
            label={"Name"}
            error={errors.name}
          />
          <StyledInput
            register={register("email")}
            type={"email"}
            label={"Email"}
            error={errors.email}
          />
          <StyledInput
            register={register("company")}
            type={"text"}
            label={"Company"}
            error={errors.company}
            className="md:col-span-2"
          />

          <textarea
            {...register("message")}
            className={`md:col-span-2 formField rounded-md`}
            cols={5}
            placeholder="Your company or website?"
          ></textarea>
        </div>
        <button className="largeBtn bg-black dark:bg-container_dark text-container_lighter dark:text-container">
          Send
        </button>
        <Link href="/">Back to portfolio page</Link>
      </form>
    </div>
  );
}

export default ContactForm;
