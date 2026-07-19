import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10"
    >
      <label className="text-[13px] text-secondary block mb- w-fit tracking-widest uppercase font-semibold">
        Name
      </label>
      <input
        type="text"
        name="user_name"
        className="block pt-2.5 pb-2.5 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
        placeholder="E.g John Doe"
      />
      <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
        Email Address
      </label>
      <input
        type="email"
        name="user_email"
        className="block pt-3 pb-3 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
        placeholder="john@company.com"
      />
      <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
        Subject
      </label>
      <input
        type="subject"
        name="subject"
        className="block pt-3 pb-3 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
        placeholder="New Project Collaboration"
      />
      <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
        Message
      </label>
      <textarea
        name="message"
        className="block pt-3 pb-15 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
        placeholder="Tell me about your vision..."
      />
      <input
        type="submit"
        value="Send Request"
        className="uppercase w-fit pl-8 pr-8 p-3.5 block m-aut bg-black text-white text-[14px] tracking-widest rounded-3xl font-semibold"
      />
    </form>
  );
};
