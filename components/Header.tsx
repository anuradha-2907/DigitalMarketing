"use client";

import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { btn, btnGradient } from "@/lib/styles";

const navLinks = ["Home", "About", "Services", "Work", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-[90%]">
      <div className="absolute top-0 left-0 flex h-[70px] w-full flex-col bg-light px-6 py-4 font-poppins lg:flex-row lg:px-24 xl:bg-transparent">
        <div>
          <a href="#" className="text-heading font-bold text-dark">
            Digital
          </a>
        </div>

        <div onClick={() => setOpen((prev) => !prev)}>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className={`${btn} absolute top-0 right-0 p-4 text-[2em] text-dark2 lg:hidden`}
          >
            <BsFilterRight className="inline-block align-[-0.125em]" />
          </button>
        </div>

        <div
          className={`grow overflow-y-hidden [transition:all_0.9s_ease] ${
            open ? "max-h-[50vh]" : "max-h-0 lg:max-h-none"
          }`}
        >
          <ul className="flex flex-col px-12 text-center lg:flex-row">
            {navLinks.map((label) => (
              <li key={label} className="px-6 text-[1.1em] leading-[3rem]">
                <a href="#" className="font-bold text-dark hover:text-red">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-initial">
          <ul className="flex">
            <button
              type="button"
              className={`${btn} ${btnGradient} hidden uppercase xl:inline-block`}
            >
              start a project
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
