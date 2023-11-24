"use client";

import * as React from "react";
import Aside from "@/components/layouts/Aside";
import Header from "@/components/layouts/Header";
import Introduction from "@/modules/home/Introduction";
import Posts from "@/modules/home/Posts";
import Footer from "@/components/layouts/Footer";
import Projects from "@/modules/projects/Projects";
import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import Project from "@/components/projects/Project";

export default function Home() {
  return (
    <div className="font-sans dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <Header />

      <Projects />

      <Footer />
      <Aside />
    </div>
  );
}
