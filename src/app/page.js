"use client";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-5">
        <div className="text-8xl text-foreground font-bold flex justify-center ">
          my type
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="inline-block"
          >
            .
          </motion.span>
        </div>

        <div className="flex justify-end">
          <button className="text-sub cursor-pointer">JOIN</button>
          <p className="m-1">|</p>
          <button className="text-sub cursor-pointer">LOGIN</button>
        </div>

        <div className="flex mb-15">
          <div className=" flex flex-2">
            <div className="flex-1"></div>
            <div className="flex-2 border-b border-t border-foreground py-2">
              <p>서로 공유해요</p>
            </div>
            <div className="flex-1"></div>
          </div>

          <nav className=" flex-col flex-2 border-b-2 border-t-2 border-foreground ">
            <div className="border-b border-sub">
              <a href="#" className="my-3 inline-block text-3xl text-sub">
                register
              </a>
            </div>
            <div className="border-b  border-sub">
              <a href="#" className="my-3 inline-block text-3xl text-sub">
                study
              </a>
            </div>
            <div className="border-b border-point ">
              <a href="#" className="my-3 inline-block text-3xl text-sub">
                my types
              </a>
            </div>
            <div>
              <a href="#" className="my-3 inline-block text-3xl text-sub">
                setting
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex flex-col gap-20">
        <section className="flex flex-col gap-5 items-center">
          <div className="flex gap-2 items-center w-full">
            <div className="flex-2"></div>
            <div className="flex-15 items-center flex">
              <span className=" font-extrabold text-4xl">01</span>
              <span className=" text-2xl">study mode</span>
            </div>
          </div>

          <div className="flex flex-col w-3/10">
            <p className="text-sub font-bold">오늘도 차곡차곡 쌓아볼까요?</p>
            <div className="bg-main rounded-full border-solid p-7 text-center shadow-xl mb-5 mt-1">
              <span className="text-3xl mr-1 ml-1">"</span>
              <span className="text-3xl font-medium">sieze the day</span>
              <span className="text-3xl mr-1 ml-1">"</span>
            </div>
            <p className="text-center mb-2 text-2xl">
              <ReactTyped
                strings={["sieze the day"]}
                typeSpeed={70}
                backSpeed={90}
                backDelay={1500}
                loop
              />
            </p>
            <div className=" h-px bg-sub"></div>
            <button className="text-end text-point cursor-pointer my-2">
              start typing →
            </button>
          </div>
        </section>
        <section className="flex flex-col gap-5 items-center">
          <div className="flex gap-2 items-center w-full">
            <div className="flex-2"></div>
            <div className="flex-15 items-center flex">
              <span className=" font-extrabold text-4xl">02</span>
              <span className=" text-2xl">write mode</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
