import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import InputField from "./InputField";

const NewsLetter = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 ">
        <FaEnvelopeOpenText />
        Email me for jobs
      </h3>
      <p className="text-primary/75 text-base mb-4 ">
        Email all your queries and questions, & we will get back to you soon.
      </p>
      <div className="w-full space-y-4 ">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="w-full block py-2 pl-3 border focus:outline-none "
        />
        <input
          type="submit"
          value={"Subscribe"}
          className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold "
        />
      </div>

    </div>
  );
};

export default NewsLetter;
