import { useRef } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef([]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eakfgg3", "template_npalmoc", form.current, {
        publicKey: "OZY428ci0qoSf8098",
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

  // const mergedRef = (element) => {
  //   ref.current = element;
  //   form.current = element;
  // };

  const mergedRef = (element) => {
    form.current = element;

    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Element name="contact">
      <form
        // eslint-disable-next-line react-hooks/immutability
        ref={mergedRef}
        // ref={ref}
        onSubmit={sendEmail}
        className={`transition-all duration-700 ${inView ? "animation-opacity-100" : "animation-opacity-0"} border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10`}
      >
        <label className="text-[13px] text-secondary block mb- w-fit tracking-widest uppercase font-semibold">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className="block pt-2.5 pb-2.5 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
          placeholder="E.g John Doe"
          required
        />
        <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
          Email Address
        </label>
        <input
          type="email"
          name="user_email"
          className="block pt-3 pb-3 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
          placeholder="john@company.com"
          required
        />
        <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
          Subject
        </label>
        <input
          type="subject"
          name="subject"
          className="block pt-3 pb-3 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
          placeholder="New Project Collaboration"
          required
        />
        <label className="text-[13px] text-secondary block mb- w-fit uppercase font-semibold">
          Message
        </label>
        <textarea
          name="message"
          className="block pt-3 pb-15 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
          placeholder="Tell me about your vision..."
          required
        />
        <input
          type="submit"
          value="Send Request"
          className="uppercase w-fit pl-8 pr-8 p-3.5 block m-aut bg-black text-white text-[14px] tracking-widest rounded-3xl font-semibold"
        />
      </form>
    </Element>
  );
};
