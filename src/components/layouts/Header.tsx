import * as React from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxMoon,
  RxSun,
  RxTwitterLogo,
} from "react-icons/rx";
import { useTheme } from "next-themes";

export default function Header() {
  const [isHamburger, setHamburger] = React.useState(false);
  const { setTheme } = useTheme();

  return (
    <>
      <nav className="container flex justify-between px-4 md:px-0 py-8 z-40 sticky top-0 left-0 dark:bg-lana-dark bg-lana-light">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Lanakuge"
              width={40}
              height={40}
              className="absolute hover:bg-cyan-500 hover:bg-opacity-10 duration-500 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <Image
              src="/logo-light.svg"
              alt="Lanakuge"
              width={40}
              height={40}
              className="absolute hover:bg-cyan-700 hover:bg-opacity-10 duration-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
          </Link>
        </div>
        <div className="flex md:hidden text-cyan-700 dark:text-cyan-500">
          <Hamburger
            toggled={isHamburger}
            toggle={setHamburger}
            rounded={true}
          />
        </div>
        <div className="font-mono text-xs gap-5 items-center md:flex hidden">
          <Link
            href="/"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">01. </span>Home
          </Link>
          <Link
            href="/about"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">02. </span>About
          </Link>
          <Link
            href="/blog"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">03. </span>Blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">04. </span>
            Projects
          </Link>
          <Link
            href="/uses"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">05. </span>Uses
          </Link>
          <Link
            href="/resume"
            className="py-3 px-4 border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
            Resume
          </Link>
        </div>
      </nav>

      <div
        className={`fixed top-28 right-0 w-[60vw] max-w-[60vw] z-30 ${
          isHamburger ? "translate-x-0" : "translate-x-[60vw]"
        } duration-500`}>
        <div className="flex flex-col py-16 h-screen bg-lana-light dark:bg-lana-dark text-center gap-8">
          <Link
            href="/"
            className="mx-auto hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">01. </span>Home
          </Link>
          <Link
            href="/about"
            className="mx-auto hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">02. </span>About
          </Link>
          <Link
            href="/blog"
            className="mx-auto hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">03. </span>Blog
          </Link>
          <Link
            href="/projects"
            className="mx-auto hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">04. </span>
            Projects
          </Link>
          <Link
            href="/uses"
            className="mx-auto hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">05. </span>Uses
          </Link>
          <Link
            href="/resume"
            className="mx-auto py-3 px-4 inline-block border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
            Resume
          </Link>
          <div className="mx-auto flex gap-8">
            <Link
              href="https://github.com/lanakuge"
              target="_blank"
              className="hover:-translate-y-1 group duration-500">
              <RxGithubLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
            </Link>
            <Link
              href="https://instagram.com/maulananizhar_"
              target="_blank"
              className="hover:-translate-y-1 group duration-500">
              <RxInstagramLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
            </Link>
            <Link
              href="https://twitter.com/lanaberg_"
              target="_blank"
              className="hover:-translate-y-1 group duration-500">
              <RxTwitterLogo className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
            </Link>
            <div className="w-6 h-6 hover:-translate-y-1 hover:cursor-pointer group duration-500">
              <RxSun
                className="absolute w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
                onClick={() => setTheme("dark")}
              />
              <RxMoon
                className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
                onClick={() => setTheme("light")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
