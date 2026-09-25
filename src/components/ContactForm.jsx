import { useRef } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef([]);
  const inputs = useRef([]);

  const topRight = () => {
    toast.success("Form sent successfully!", {
      position: "top-right",
    });
  };

  const topRightError = () => {
    toast.success("", {
      position: "top-right",
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eakfgg3", "template_npalmoc", form.current, {
        publicKey: "OZY428ci0qoSf8098",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          topRight();
        },
        (error) => {
          console.log("FAILED...", error.text);
          topRightError();
        },
      );
  };

  const pushRef = (el) => inputs.current.push(el);

  function clearInputs() {
    inputs.current.forEach((el) => {
      if (el) el.value = "";
    });
  }

  // useEffect(function () {
  //   if (inputs.current) console.log(inputs.current);
  //   // console.log(inputs.current);
  // }, []);
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
    <>
      <ToastContainer />
      <Element name="contact">
        <form
          // eslint-disable-next-line react-hooks/immutability
          ref={mergedRef}
          onSubmit={(e) => {
            clearInputs();
            sendEmail(e);
          }}
          className={`transition-all duration-700 ${inView ? "animation-opacity-100" : "animation-opacity-0"} border-t border-[#EEEEEE] pt-10 pl-5 pr-5 mb-10`}
        >
          <div className="md:w-[80%] md:m-auto">
            <label className="text-[13px] text-secondary block mb- w-fit tracking-widest uppercase font-semibold">
              Name
            </label>
            <input
              ref={pushRef}
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
              ref={(el) => pushRef(el)}
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
              ref={(el) => pushRef(el)}
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
              ref={(el) => pushRef(el)}
              name="message"
              className="block pt-3 pb-15 w-full border-b mb-8 outline-none border-[#cfcfcf] placeholder:text-[#cfcfcf]"
              placeholder="Tell me about your vision..."
              required
            />
            <input
              type="submit"
              value="Send Request"
              className="uppercase w-fit pl-8 pr-8 p-3.5 block m-aut bg-black text-white text-[14px] tracking-widest rounded-3xl font-semibold cursor-pointer"
            />
          </div>
        </form>
      </Element>
    </>
  );
};
