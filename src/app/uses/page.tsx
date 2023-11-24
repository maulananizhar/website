"use client";

import * as React from "react";
import Aside from "@/components/layouts/Aside";
import Header from "@/components/layouts/Header";
import Introduction from "@/modules/home/Introduction";
import Posts from "@/modules/home/Posts";
import Footer from "@/components/layouts/Footer";
import Projects from "@/modules/home/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans dark:bg-lana-dark dark:text-lana-light bg-lana-light text-lana-dark">
      <Header />

      <div className="container px-4 md:px-36 lg:px-48 my-16">
        <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">Uses</p>
        <div className="rounded">
          <Image
            src="/uses.jpg"
            alt="laptop"
            width={1200}
            height={900}
            className="rounded-t"
          />
          <p className="text-center font-mono font-bold rounded-b text-lana-light dark:text-lana-dark bg-lana-dark dark:bg-lana-light">
            My Setup
          </p>
        </div>

        <div className="mt-16">
          <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
            Hardware
          </p>
          <div>
            <p className="text-lg font-bold">Laptop</p>
            <ul className="list-disc mx-6">
              <li>Advan Workplus</li>
              <li>Specs :</li>
              <ul className="list-disc mx-6">
                <li>Processor : AMD Ryzen 5 6600H</li>
                <li>Graphics : AMD Radeon Graphics</li>
                <li>RAM : 4x4GB LPDDR5-6400 MHz</li>
                <li>Storage : 512GB SSD M.2 PCIe</li>
                <li>OS[0] : Windows 11 Home 64-bit</li>
                <li>OS[1] : Ubuntu 22.04 LTS</li>
              </ul>
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold">Peripherals</p>
            <ul className="list-disc mx-6">
              <li>Mouse : IBM MO28UOL</li>
              <li>Earphone : JETE Classic 2</li>
              <li>Webcam : Logitech B525</li>
              <li>Phone : Infinix Note 11 NFC</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-mono text-cyan-700 dark:text-cyan-500 mb-4">
            Software
          </p>
          <div>
            <p className="text-lg font-bold">Editor</p>
            <ul className="list-disc mx-6">
              <li>Visual Studio Code</li>
              <li>Theme : One Dark Pro</li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold">Terminal</p>
            <ul className="list-disc mx-6">
              <li>Windows Terminal</li>
              <li>GNOME</li>
              <li>oh-my-posh</li>
              <li>oh-my-zsh</li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold">Design</p>
            <ul className="list-disc mx-6">
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold">Miscellaneous</p>
            <ul className="list-disc mx-6">
              <li>Git</li>
              <li>Notion</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <Aside />
    </div>
  );
}
