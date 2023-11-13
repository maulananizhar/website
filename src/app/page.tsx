"use client";

import * as React from "react";
import Aside from "@/components/layouts/Aside";
import Header from "@/components/layouts/Header";
import Introduction from "@/modules/home/Introduction";
import Posts from "@/modules/home/Posts";
import Footer from "@/components/layouts/Footer";
import Projects from "@/modules/home/Projects";

export default function Home() {
  // const newDate = new Date("11-02-2023");
  // const time = newDate.getTime();

  return (
    <div className="dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <Header />

      <Introduction />
      <Posts />
      <Projects />

      <Footer />
      <Aside />
    </div>
  );
}
