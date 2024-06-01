import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!name) {
      toast.error("Please Provide your name");
      setIsLoading(false);
      return;
    }

    if (!email) {
      toast.error("Please Provide your email address");
      setIsLoading(false);
      return;
    }

    if (!message) {
      toast.error("Please Provide the message");
      setIsLoading(false);
      return;
    }

    const MailParams = {
      my_name: "GK",
      subject: subject ? subject : "Connection request",
      from_name: name,
      from_email: email,
      message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        MailParams,
        process.env.NEXT_PUBLIC_USER_ID
      );

      if (response.status == 200) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsLoading(false);

        toast.success("Email sent successfully!");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error in sending email: ", error);
      toast.error("Something went wrong, please try again later.");
    }
  };

  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center bg-transparent gap-4 mx-auto px-8 relative">
      <div
        className="h-full z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="container mx-auto py-32 text-center flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hide"
              className="h2 text-center mb-12"
            >
              Lets <span className="text-accent"> Connect. </span>
            </motion.h2>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hide"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full text-white">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  class="input input-bordered bg-transparent input-accent placeholder:text-white"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  class="input input-bordered bg-transparent input-accent placeholder:text-white"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label class="input input-bordered bg-transparent input-accent flex items-center gap-2">
                <input
                  type="text"
                  class="grow placeholder:text-white"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span class="badge badge-info">Optional</span>
              </label>

              <textarea
                placeholder="Message"
                value={message}
                class="textarea textarea-accent bg-transparent placeholder:text-white"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="btn btn-accent rounded-full border max-w-[170px]
               px-8 transition-all duration-300 flex items-center justify-center
               overflow-hidden hover:btn-accent hover:bg-transparent group bg-transparent"
                onClick={handleSendEmail}
              >
                {isLoading ? (
                  <span className="loading loading-spinner text-success"></span>
                ) : (
                  <>
                    <span
                      className="group-hover:-translate-y-[120%] group-hover:opacity-0
                 transition-all duration-500 text-white"
                    >
                      Lets talk
                    </span>

                    <BsArrowRight
                      className="-translate-y-[120%] opacity-0 group-hover:flex text-white
                 group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                 duration-300 absolute text-[22px]"
                    />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
