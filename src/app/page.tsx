/* eslint-disable @next/next/no-img-element */
"use client";

import {
  RxExternalLink,
  RxGithubLogo,
  RxInstagramLogo,
  RxMoon,
  RxSun,
  RxTwitterLogo,
} from "react-icons/rx";
import { SiSpotify } from "react-icons/si";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";
import useSWR from "swr";
import { Sling as Hamburger } from "hamburger-react";

export default function Home() {
  const fetcher = (args: string) =>
    fetch(args, { method: "POST" }).then(res => res.json());
  const { setTheme } = useTheme();
  const [isHamburger, setHamburger] = React.useState(false);

  function useCurrentPlaying() {
    const { data, error, isLoading } = useSWR(
      `/api/spotify/current-playing`,
      fetcher
    );
    return {
      track: data,
      trackLoading: isLoading,
      isError: error,
    };
  }

  const { track, trackLoading, isError } = useCurrentPlaying();

  return (
    <div className="dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <nav className="container flex justify-between px-4 md:px-0 py-8 z-40 sticky top-0 left-0 dark:bg-lana-dark bg-lana-light">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
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

      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Hi, my name is
        </p>
        <p className="font-sans text-6xl font-bold mb-6">Nizhar Maulana</p>
        <p className="font-sans text-6xl font-bold mb-14 opacity-80 dark:opacity-70">
          I build things on web
        </p>
        <p className="font-sans max-w-[500px] mb-14">
          I&apos;m a software engineer based in Jakarta, Indonesia specializing
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <a
          href="mailto:maulananizhar27@gmail.com"
          target="_blank"
          className="font-mono py-5 px-6 border border-cyan-700 text-cyan-700 hover:bg-cyan-700 dark:border-cyan-500 dark:text-cyan-500 rounded dark:hover:bg-cyan-500 dark:hover:bg-opacity-10 hover:bg-opacity-10 duration-500">
          Get In Touch
        </a>
      </div>

      <div className="container px-4 md:px-36 lg:px-40 xl:px-48 my-16">
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

      <div className="container px-4 md:px-36 lg:px-40 xl:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
          Some things i&apos;ve built
        </p>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
            <div className="flex flex-col py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40 hover:-translate-y-2 duration-500 flex-auto h-full">
              <div className="mb-4">
                <div className="flex justify-between mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 60 60"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="w-10 h-10">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                    />
                  </svg>
                  <RxExternalLink className="w-6 h-6 text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500" />
                </div>
                <div className="flex flex-col font-sans text-lana-dark dark:text-lana-light">
                  <p className="font-bold mb-4">DanaKu</p>
                  <p className="text-sm opacity-80 mb-4">
                    Lorem ipsum dolor sit amet adipisicing elit.
                  </p>
                  <p className="text-sm opacity-80">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                    ratione labore aperiam quo quisquam. Qui, fugit corrupti
                    odit accusamus cum at odio est minima eveniet minus
                    voluptatum nihil necessitatibus eligendi!
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs mt-auto text-lana-dark dark:text-lana-light">
                <p>NodeJS</p>
                <p>React</p>
                <p>NextJS</p>
                <p>PostgreSQL</p>
                <p>HTML-CSS</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
            <div className="flex flex-col py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40 hover:-translate-y-2 duration-500 flex-auto h-full">
              <div className="mb-4">
                <div className="flex justify-between mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 60 60"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="w-10 h-10">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                    />
                  </svg>
                  <RxExternalLink className="w-6 h-6 text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500" />
                </div>
                <div className="flex flex-col font-sans text-lana-dark dark:text-lana-light">
                  <p className="font-bold mb-4">Fast Fetcher</p>
                  <p className="text-sm opacity-80 mb-4">
                    Lorem ipsum dolor sit amet adipisicing elit.
                  </p>
                  <p className="text-sm opacity-80">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore commodi ratione perspiciatis? Ducimus blanditiis
                    aperiam, ipsam corrupti dolore, eos laboriosam velit
                    possimus odit, reiciendis vel exercitationem architecto
                    rerum. Harum in autem reiciendis ipsa fugiat, tenetur earum
                    ut itaque perferendis optio.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs mt-auto text-lana-dark dark:text-lana-light">
                <p>NodeJS</p>
                <p>React</p>
                <p>NextJS</p>
                <p>PostgreSQL</p>
                <p>HTML-CSS</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 pb-4">
            <div className="flex flex-col py-5 px-6 border border-cyan-700 dark:border-cyan-500 text-cyan-700 dark:text-cyan-500 rounded border-opacity-40 hover:-translate-y-2 duration-500 flex-auto h-full">
              <div className="mb-4">
                <div className="flex justify-between mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 60 60"
                    strokeWidth={0.5}
                    stroke="currentColor"
                    className="w-10 h-10">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                    />
                  </svg>
                  <RxExternalLink className="w-6 h-6 text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500" />
                </div>
                <div className="flex flex-col font-sans text-lana-dark dark:text-lana-light">
                  <p className="font-bold mb-4">Yondu Bot</p>
                  <p className="text-sm opacity-80 mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                  <p className="text-sm opacity-80">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt suscipit at quia hic quam pariatur enim, earum quas
                    commodi labore in accusantium saepe recusandae quod dolorum
                    molestias odit minima veniam corrupti nemo provident iure?
                    Et?
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs mt-auto text-lana-dark dark:text-lana-light">
                <p>NodeJS</p>
                <p>React</p>
                <p>NextJS</p>
                <p>PostgreSQL</p>
                <p>HTML-CSS</p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/projects"
          className="inline-block font-mono text-lana-dark dark:text-lana-light hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 mt-4">
          View all projects &#10140;
        </a>
      </div>

      <div className="container flex flex-wrap items-center text-center px-4 md:px-24 pb-6">
        <div className="w-1/2 sm:w-1/4 order-1 divide-x-2 flex justify-center sm:justify-start">
          <div className="inline-flex flex-col justify-start md:justify-center font-mono text-xs max-w-[150px] md:max-w-[180px] lg:max-w-[192px]">
            <Link
              className="inline-block text-left hover:text-cyan-700 dark:hover:text-cyan-500 duration-500"
              href="https://github.com/lanakuge/website"
              target="_blank">
              /source
            </Link>
            <Link
              className="inline-block text-left hover:text-cyan-700 dark:hover:text-cyan-500 duration-500"
              href="/">
              /back
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-2/4 order-3 sm:order-2 mt-4 sm:mt-0">
          <Link
            href="https://github.com/lanakuge"
            target="_blank"
            className="font-mono text-xs font-thin hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
            Created with ♡ by Nizhar Maulana
          </Link>
          <p className="font-mono text-xs font-thin opacity-80">
            Last Updated on: 04-Nov-2023
          </p>
        </div>
        <div className="flex justify-center sm:justify-end w-1/2 sm:w-1/4 order-2 sm:order-3">
          <div className="flex justify-end md:justify-center max-w-[150px] md:max-w-[180px] lg:max-w-[192px] items-center text-lana-dark dark:text-lana-light">
            <div className="w-6 h-6 mr-4">
              <SiSpotify className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-left truncate">
              {trackLoading === true ? (
                <>
                  <Link
                    href="https://open.spotify.com"
                    target="_blank"
                    className="truncate">
                    Not playing
                  </Link>
                  <p className="truncate opacity-80">Spotify</p>
                </>
              ) : (
                <>
                  <Link
                    href={track.trackUrl}
                    target="_blank"
                    className="truncate hover:text-cyan-700 dark:hover:text-cyan-500 duration-500">
                    {track.title}
                  </Link>
                  <p className="truncate opacity-80">{track.artist}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

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

      <div className="hidden md:block fixed bottom-0 left-20 z-10">
        <div className="flex flex-col gap-6">
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
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>

      <div className="hidden md:block fixed bottom-0 right-20 z-10 w-6">
        <div className="flex flex-col gap-[11.5rem]">
          <Link
            href="mailto:maulananizhar27@gmail.com"
            target="_blank"
            className="font-mono text-xs hover:text-cyan-700 dark:hover:text-cyan-500 duration-500 rotate-90">
            maulananizhar27@gmail.com
          </Link>
          <div className="border h-32 w-0 mx-auto border-lana-dark dark:border-lana-light"></div>
        </div>
      </div>
    </div>
  );
}
