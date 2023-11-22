/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import useSWR from "swr";
import Header from "@/components/layouts/Header";
import Aside from "@/components/layouts/Aside";
import Footer from "@/components/layouts/Footer";
import Introduction from "@/modules/about/Introduction";
import Skillsets from "@/modules/about/Skillsets";
import Contact from "@/modules/about/Contact";

export default function Home() {
  const fetcher = (args: string) =>
    fetch(args, { method: "POST" }).then(res => res.json());
  const { theme, setTheme } = useTheme();
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
    <div className="font-sans dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <Header />

      <Introduction />
      <Skillsets />
      <Contact />

      <Footer />
      <Aside />
    </div>
  );
}
