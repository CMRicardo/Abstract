import { useState } from "react";
import { Logo } from "../icons/Logo";
import { Menu } from "../icons/Menu";
import { Search } from "../icons/Search";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white p-4 md:px-16 md:py-8 text-2xl flex justify-between items-center">
        <h1 className="flex gap-2 m-0 p-0">
          <span>
            <Logo />
          </span>{" "}
          | Help Center
        </h1>

        <div className="flex gap-4 md:hidden">
          <Search height={24} width={24} />
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu height={24} width={24} />
          </button>
        </div>

        <ul className="hidden md:flex gap-4">
          <li>
            <a
              className="bg-[#191a1b] px-4 py-2 rounded border-background border"
              href="/"
            >
              Submit a request
            </a>
          </li>
          <li>
            <a className="bg-accent px-6 py-2 rounded" href="/">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && <MobileMenu />}
    </>
  );
}
