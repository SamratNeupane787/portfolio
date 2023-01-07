import Head from "next/head";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import {
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";

import Image from "next/image";
import image from "../images/image.jpg";
import css from "../images/css.png";
import js from "../images/js.png";
import re from "../images/re.png";
import weath from "../images/weath.jpg";
import yt from "../images/yt.jpg";
import todoL from "../images/todoL.png";
import exten from "../images/exten.png";
import tailwind from "../images/tailwind.png";
import web3 from "../images/web3.png";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samrat Neupane - FrontEnd Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900">
        <section>
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" font-SpaceGrotesk lg:text-5xl md:text-4xl sm:text-3xl dark:text-white">
              Samrat Neupane
            </h1>
            <ul className=" flex items-center lg:text-6xl md:text-5xl sm:text-5xl">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setdarkMode(!darkMode)}
                  className=" cursor-pointer text-xl dark:text-white lg:text-3xl md:text-3xl sm:text-3xl "
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-cyan-500 text-white px-8 py-4 border-none rounded-md ml-10 lg:text-3xl md:text-3xl sm:text-3xl"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-35 overflow-hidden sm: rounded-full w-60 h-60 ">
            <Image src={image} />
          </div>

          <div className=" text-center pt-10">
            <h2 className="text-cyan-600 font-name text-7xl md:text-6xl sm:text-6xl">
              Samrat Neupane
            </h2>
            <h3 className=" pt-12 text-blue-500 font-infor">
              <span className=" text-7xl">
                I am a{" "}
                <div className="App text-6xl tracking-wide">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(" Developer")

                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(" Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(" Content Writer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              </span>
            </h3>
            <p className=" text-2xl pt-12  pb leading-8 tracking-normal text-amber-800 lg:text-5xl md:text-4xl sm:text-3xl dark:text-white">
              Hi there , I am{" "}
              <span className="text-green-500 font-name">Samrat Neupane. </span>{" "}
              I am a{" "}
              <span className=" text-green-500 cursor-none font-name">
                Computer Engineering !!
              </span>{" "}
              student who loves to write codes and I love travelling.
            </p>
          </div>
        </section>

        <section className=" pt-24">
          <div>
            <h3 className="  text-center text-cyan-600 font-name text-6xl md:text-5xl sm:text-4xl">
              Services I Offer
            </h3>
            <p className=" text-center tracking-normal py-20  text-xl lg:text-5xl md:text-4xl sm:text-3xl  dark:text-white ">
              Nothing till now but i can develope a{" "}
              <span className="pt-8 text-cyan-600 text-3x  dark:text-green-400 font-name">
                wordpress website{" "}
              </span>
            </p>
          </div>
        </section>
        <section>
          <div className="text-center pt-10">
            <h1 className=" text-cyan-600  font-name text-6xl md:text-5xl sm:text-4xl">
              Expertise In
            </h1>
          </div>
          <div className=" items-center py-0">
            <div className=" grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
              <div className=" text-center shadow-lg p-10 m-10 ">
                <div className=" flex justify-center pt-16 ">
                  <Image src={css} width={150} height={150} />
                </div>
                <h1 className=" text-4xl dark:text-white  pt-8">css</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={js} width={150} height={150} />
                </div>
                <h1 className=" text-4xl dark:text-white pt-8">Javascript</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={re} width={150} height={150} />
                </div>
                <h1 className=" text-4xl dark:text-white  pt-11">React</h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10">
                <div className=" flex justify-center pt-16 ">
                  <Image src={tailwind} width={150} height={150} />
                </div>
                <h1 className=" text-4xl dark:text-white pt-8">Tailwind</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h1 className=" text-center text-7xl text-cyan-600 font-name">
              Projects
            </h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <div className=" text-center shadow-lg p-10 m-10 ">
                <div className=" flex justify-center pt-16 ">
                  <Image
                    src={weath}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-4xl dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://weather.samratneupane.com.np/">
                    Weather App
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={yt}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-4xl dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://mp3downloader.samratneupane.com.np/">
                    yt to mp3 Converter
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={todoL}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-4xl dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://weather.samratneupane.com.np/">To-Do List</a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={web3}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-4xl dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  <a href="https://web3.samratneupane.com.np/">
                    Web 3 Landing Website
                  </a>
                </h1>
              </div>

              <div className=" text-center shadow-lg p-10 m-10  basis-1/2">
                <div className=" flex justify-center pt-16">
                  <Image
                    src={exten}
                    className=" lg: w-450 h-150 md:w-250 h-150 sm:w-150 h-150"
                  />
                </div>
                <h1
                  className=" text-4xl dark:text-white cursor-pointer pt-8"
                  href="#"
                >
                  IP Address Finding Chrome Extension
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div width={600} height={600} className=" border-red-600">
            <h1 className="text-center text-5xl text-cyan-600 pt-16 font-name">
              For Collaboration
            </h1>

            <p
              className=" text-center pt-12  font-name 
            lg:text-4xl md:text-4xl sm:text-4xl dark:text-green-500"
            >
              Email me :-contact@samratneupane.com.np
            </p>
          </div>
        </section>

        <section className=" pt-12 ">
          <div className="text-center text-white">
            <div className=" text-4xl text-cyan-600 font-name">
              <h1>Connect with Me</h1>
            </div>
            <div className=" text-center text-black text-4xl flex justify-center gap-10 py-10 dark:text-green-300 ">
              <a href="https://twitter.com/samratneupane6"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/samrat-neupane-36394b213/" ><AiOutlineLinkedin /></a>
              <a href="https://github.com/SamratNeupane787" ><AiOutlineGithub /></a>
             <a href="https://www.instagram.com/samratneupane_/"><AiFillInstagram  /></a>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center text-xl py-11 dark:text-white">
            <h2>Developed by Samrat Neupane</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
