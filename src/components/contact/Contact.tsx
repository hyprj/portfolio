import React from "react";

export const Contact = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl sm:text-5xl text-center font-merriweather">
        Contact me
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-grow  mt-8">
          <div className="bg-[url('/businesscardbg.jpg')] p-3 pt-6 font-merriweather aspect-[22/10] max-w-xl shadow-xl flex flex-col rounded-xl flex-grow">
            <div className="basis-1/3 flex gap-5 ml-2">
              <a className="underline">GitHub</a>
              <a className="underline">LinkedIn</a>
            </div>
            <div className="basis-1/3 w-full text-center">
              <p>Krzysztof ŻURKIEWICZ</p>
              <p className="uppercase">
                <span className="text-xl">F</span>ront-end{" "}
                <span className="text-xl">d</span>eveloper
              </p>
            </div>
            <div className="basis-1/3 w-full flex items-end justify-between px-2">
              <p>Poznań, Poland</p>
              <p>
                <span>Email: </span>
                <a className="underline" href="mailto:krzysztofzur21@gmail.com">
                  krzysztofzur21@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Check my resume</p>
        </div>
      </div>
      <div className="text-center mt-24">
        <button className="bg-blue-300 rounded-full py-2 px-6">
          Go back to top
        </button>
      </div>
    </section>
  );
};
