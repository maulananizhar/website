/* eslint-disable @next/next/no-img-element */
"use client";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  const [num, setNum] = React.useState(0);

  return (
    <div className="dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <nav className="container flex justify-between py-8">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo.svg"
              alt="Lanakuge"
              width={40}
              height={40}
              className="absolute hover:bg-cyan-500 hover:bg-opacity-10 duration-500 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <img
              src="/logo-light.svg"
              alt="Lanakuge"
              width={40}
              height={40}
              className="absolute hover:bg-cyan-700 hover:bg-opacity-10 duration-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
          </a>
        </div>
        <div className="flex font-mono text-xs gap-5 items-center">
          <a
            href="/"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">01. </span>Home
          </a>
          <a
            href="/about"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">02. </span>About
          </a>
          <a
            href="/blog"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">03. </span>Blog
          </a>
          <a
            href="/projects"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">04. </span>
            Projects
          </a>
          <a
            href="/uses"
            className="hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            <span className="text-cyan-700 dark:text-cyan-500">05. </span>Uses
          </a>
          <a
            href="/resume"
            className="py-3 px-4 border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
            Resume
          </a>
        </div>
      </nav>

      <div className="container h-screen max-h-screen min-h-screen px-48 py-16">
        <div>
          <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
            Hi, my name is
          </p>
          <p className="font-sans text-6xl font-bold mb-6">Nizhar Maulana</p>
          <p className="font-sans text-6xl font-bold mb-14 opacity-80 dark:opacity-70">
            I build things on web
          </p>
          <p className="font-sans w-[500px] mb-14">
            I&apos;m a software engineer based in Jakarta, Indonesia
            specializing in building (and occasionally designing) exceptional
            websites, applications, and everything in between.
          </p>
          <a
            href="mailto:maulananizhar27@gmail.com"
            target="_blank"
            className="font-mono py-5 px-6 border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="container px-48 py-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Latest posts
        </p>
        <div className="flex flex-col gap-4">
          <a href="/">
            <div className="w-full py-5 px-6 border border-cyan-700 dark:border-cyan-500 border-opacity-40 text-cyan-700 dark:text-cyan-500 rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 group hover:-translate-y-2">
              <p className="dark:text-lana-light text-lana-dark font-mono opacity-80 mb-2">
                30 October 2023
              </p>
              <p className="text-3xl font-sans dark:text-lana-light text-lana-dark group-hover:text-cyan-700 dark:group-hover:text-cyan-500 font-bold duration-500 mb-2">
                Titik terbaik sepanjang hidup
              </p>
              <p className="dark:text-lana-light text-lana-dark">
                Cerita bagaimana seorang &quot;nolep&quot; menyudahi takdirnya
                dan beranjak menjadi orang yang lebih berguna.
              </p>
            </div>
          </a>
          <a href="/">
            <div className="w-full py-5 px-6 border border-cyan-700 dark:border-cyan-500 border-opacity-40 text-cyan-700 dark:text-cyan-500 rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 group hover:-translate-y-2">
              <p className="dark:text-lana-light text-lana-dark font-mono opacity-80 mb-2">
                21 October 2023
              </p>
              <p className="text-3xl font-sans dark:text-lana-light text-lana-dark group-hover:text-cyan-700 dark:group-hover:text-cyan-500 font-bold duration-500 mb-2">
                Ngoding, ngoding, dan ngoding
              </p>
              <p className="dark:text-lana-light text-lana-dark">
                Kapan kita harus berhenti untuk melakukan sebuah kegiatan
                bernama ngoding?
              </p>
            </div>
          </a>
          <a href="/">
            <div className="w-full py-5 px-6 border border-cyan-700 dark:border-cyan-500 border-opacity-40 text-cyan-700 dark:text-cyan-500 rounded hover:bg-cyan-700 dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500 group hover:-translate-y-2">
              <p className="dark:text-lana-light text-lana-dark font-mono opacity-80 mb-2">
                4 October 2023
              </p>
              <p className="text-3xl font-sans dark:text-lana-light text-lana-dark group-hover:text-cyan-700 dark:group-hover:text-cyan-500 font-bold duration-500 mb-2">
                Cerita setelah SMA
              </p>
              <p className="dark:text-lana-light text-lana-dark">
                Ya, saya berasal dari SMA, bagaimana rasanya menjalani kehidupan
                perkuliahan yaa?
              </p>
            </div>
          </a>
        </div>
        <a
          href="/blog"
          className="inline-block font-mono text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 mt-4">
          View all posts &#10140;
        </a>
      </div>

      <div className="container px-48 py-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Some things i&apos;ve built
        </p>
        <div className="flex flex-wrap">
          <div className="w-1/3 even:px-4">
            <div className="py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40"></div>
          </div>
          <div className="w-1/3 even:px-4">
            <div className="py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40"></div>
          </div>
          <div className="w-1/3 even:px-4">
            <div className="py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40"></div>
          </div>
        </div>
        <a
          href="/blog"
          className="inline-block font-mono text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 mt-4">
          View all projects &#10140;
        </a>
      </div>

      <div className="fixed bottom-0 left-0 z-10 ml-20">
        <div className="flex flex-col gap-6">
          <Link
            href="https://github.com/lanakuge"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <GitHubLogoIcon className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <Link
            href="https://instagram.com/maulananizhar_"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <InstagramLogoIcon className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <Link
            href="https://twitter.com/lanaberg_"
            target="_blank"
            className="hover:-translate-y-1 group duration-500">
            <TwitterLogoIcon className="w-6 h-6 group-hover:text-cyan-700 dark:group-hover:text-cyan-500 duration-500" />
          </Link>
          <div className="w-6 h-6 hover:-translate-y-1 hover:cursor-pointer group duration-500">
            <SunIcon
              className="absolute w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
              onClick={() => setTheme("dark")}
            />
            <MoonIcon
              className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-500"
              onClick={() => setTheme("light")}
            />
          </div>
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-10 mr-20">
        <div className="flex flex-col gap-4">
          <Link
            href="mailto:maulananizhar27@gmail.com"
            target="_blank"
            className="font-mono text-xs hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 rotate-90 mb-[5.5rem]">
            maulananizhar27@gmail.com
          </Link>
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>
    </div>
  );
}
