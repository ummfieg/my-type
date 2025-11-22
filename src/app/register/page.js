"use client";
import { useState } from "react";
import SystemCategory from "@/components/ui/systemCategory";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import Word from "@/components/register/word";
import Sentence from "@/components/register/sentence";
import Code from "@/components/register/code";
import UserCategoryModal from "@/components/register/modal/userCategoryModal";
import UserCategory from "@/components/register/modal/userCategoryModal";
import { usePathname } from "next/navigation";

export default function Resgister() {
  const pathName = usePathname();
  const [category, setCategory] = useState("WORD");
  const onSelect = (e) => {
    setCategory(e);
  };

  const [openModal, setOpenModal] = useState(false);
  const onClickOpenModal = () => {
    setOpenModal(true);
  };
  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header>
        <NavBar />
        <div className="flex justify-between items-start my-6 mx-12">
          <SystemCategory
            onSelect={setCategory}
            category={category}
            pathName={pathName}
          />
          <PageTitle />
        </div>
      </header>

      <main className="flex justify-center my-10">
        <div className="border-l w-4/5">
          {category === "WORD" && <Word onClickOpenModal={onClickOpenModal} />}
          {category === "SENTENCE" && (
            <Sentence onClickOpenModal={onClickOpenModal} />
          )}
          {category === "CODE" && <Code onClickOpenModal={onClickOpenModal} />}
        </div>
      </main>
      {openModal && (
        <UserCategory
          category={category}
          onClickCloseModal={onClickCloseModal}
        />
      )}
    </>
  );
}
