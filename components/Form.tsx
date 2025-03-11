"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import StyledInput from "./StyledInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, TContactForm } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";

function Form() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ContactFormSchema) });

  const { mutate, isPending, isError, error, reset } = useMutation({
    mutationFn: async (data: TContactForm) => {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Something went wrong");
      }

      return responseData;
    },
  });

  async function sendForm(data: TContactForm) {
    try {
      console.log("Form submitted", data);
      await mutate(data, {
        onSuccess: () => reset(),
      });
    } catch (err) {
      console.error("Error submitting form", err);
    }
  }

  if (!isMounted) {
    return (
      <div className="flex  items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(sendForm)}
      className="relative flex flex-col w-full space-y-10 items-center max-w-2xl "
    >
      {isError && (
        <motion.p
          className="absolute top-0  text-red-500 font-bold"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error.message}
        </motion.p>
      )}
      <div className="w-full grid grid-cols-1 grid-rows-auto md:grid-cols-2 md:grid-rows-auto gap-8">
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
          className="md:col-span-2"
          type={"text"}
          label={"Company"}
          error={errors.company}
        />

        <textarea
          {...register("message")}
          className={`md:col-span-2 formField rounded-md`}
          cols={5}
          placeholder="Your company or website?"
        ></textarea>
      </div>

      <button className="largeBtn text-container_lighter dark:text-black bg-black dark:bg-container flex flex-row ">
        <EnvelopeIcon className="w-5 h-5 mr-2" />
        {isPending ? " Sending..." : "Email Me"}
      </button>
    </form>
  );
}

export default Form;
