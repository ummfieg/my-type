"use client";
import { useState } from "react";
import Category from "@/components/ui/systemCategory";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import Word from "@/components/register/word";
import Sentence from "@/components/register/sentence";
import Code from "@/components/register/code";
import UserCategoryModal from "@/components/register/userCategory";

export default function Resgister() {
  const [category, setCategory] = useState("WORD");
  const onSelect = (e) => {
    setCategory(e);
  };

  return (
    <>
      <header>
        <NavBar />
        <div className="flex justify-between items-start my-6 mx-12">
          <Category onSelect={setCategory} category={category} />
          <PageTitle />
        </div>
      </header>

      <main className="flex justify-center my-10">
        <div className="border-l w-4/5">
          {category === "WORD" && <Word />}
          {category === "SENTENCE" && <Sentence />}
          {category === "CODE" && <Code />}
        </div>
      </main>
      {/* <UserCategoryModal /> */}
    </>
  );
}
