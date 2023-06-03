import React, { useState } from "react";
import { Bars3Icon, LanguageIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Overlay } from "../overlay/Overlay";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen && <Overlay onClick={toggleIsOpen} />}
      <header className="flex sticky top-0 z-20 mx-auto backdrop-blur-lg w-full p-2 lg:py-6 justify-between md:justify-center gap-16 bg-white/20 items-center">
        <h2 className="text-amber-950  hidden sm:inline font-merriweather text-3xl font-medium">
          Krzysztof Żurkiewicz
        </h2>
        <nav className="relative">
          <Bars3Icon onClick={toggleIsOpen} className="h-6 sm:hidden" />
          <ul
            className={`${
              isOpen ? "mt-4" : "max-sm:hidden"
            } flex gap-6 flex-col sm:flex-row max-sm:fixed z-10 max-sm:bg-yellow-200 rounded-lg p-2 `}
          >
            <li>About me</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
        <h2 className="sm:hidden">Krzysztof Ż.</h2>
        <div className="flex gap-4">
          <MoonIcon className="h-6" />
          <LanguageIcon className="h-6" />
        </div>
      </header>
    </>
  );
};
