"use client";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import SystemCategory from "@/components/ui/systemCategory";
import { useState } from "react";

export default function Study() {
  const [category, setCategory] = useState("WORD");
  const onSelect = (e) => {
    setCategory(e);
  };

  return (
    <>
      <header>
        <NavBar />
        <div className="flex justify-between items-start my-6 mx-12">
          <SystemCategory onSelect={setCategory} category={category} />
          <PageTitle />
        </div>
      </header>

      <main className="w-full flex flex-col items-center px-6 mt-3 gap-2">
        <section className="flex justify-start ml-20 w-full md:w-[1000px]">
          <div className="bg-sub/30 px-3 py-2">
            <p className="text-20px">올해안에외우자</p>
          </div>
          <div className="bg-accent-dark px-3 py-2"></div>
        </section>

        <section className="relative flex justify-start items-center md:w-[1000px] h-52 ml-20">
          <div className="absolute w-4/5 h-40 bg-sub/40 rounded-2xl -rotate-1 translate-y-1 translate-x-2 z-0 shadow-md"></div>
          <div className="relative w-4/5 h-40 bg-main rounded-2xl z-10 shadow-md p-6">
            <div className="w-full flex justify-center my-6">
              <div className="bg-white/70 rounded-3xl px-5 py-3">
                <div className="flex items-center w-72 h-12 rounded-2xl border-2 border-main bg-transparent text-center text-lg font-medium justify-center">
                  <p className="text-sub font-bold">call for 요구하다</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex justify-end items-center md:w-[1000px] h-56 mr-20">
          <div className="absolute w-4/5 h-48 bg-sub/40 -translate-y-3 -translate-x-3 z-0 shadow-md"></div>
          <div className="absolute w-4/5 h-50 bg-accent-dark rotate-1 -translate-y-1 translate-x-2 z-10 shadow-md"></div>
          <div className="relative w-4/5 h-48 bg-accent rounded-2xl rotate-0 z-20 shadow-md p-6">
            <div className="w-full flex justify-center my-6">
              <div className="bg-white/70 rounded-3xl px-5 py-3">
                <input
                  className="w-72 h-12 rounded-2xl border-2 border-main bg-transparent text-center text-lg font-medium focus:outline-none focus:border-accent-dark transition"
                  placeholder="typing.."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
