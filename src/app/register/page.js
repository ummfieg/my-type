"use client";
import { useState } from "react";
import SystemCategory from "@/components/ui/systemCategory";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import Word from "@/components/register/word";
import Sentence from "@/components/register/sentence";
import Code from "@/components/register/code";
import UserCategoryModal from "@/components/register/modal/userCategoryModal";
import { usePathname } from "next/navigation";

export default function Resgister() {
  const pathName = usePathname();
  const [wordInputs, setWordInputs] = useState(Array(30).fill(""));
  const [category, setCategory] = useState("WORD");
  const [userCategory, setUserCategory] = useState(Array(10).fill(""));
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleWordChange = (index, value) => {
    const updated = [...wordInputs];
    updated[index] = value;
    setWordInputs(updated);
  };

  const handleAddCategory = (newValue) => {
    if (!newValue.trim()) return;

    const categoryUpdated = [...userCategory];
    const emptyIndex = categoryUpdated.indexOf("");

    if (emptyIndex === -1) {
      return;
    }

    categoryUpdated[emptyIndex] = newValue;
    setUserCategory(categoryUpdated);
  };

  const handleSelectCategory = (selectedCategory) => {
    if (!selectedCategory) return;
    setSelectedCategory(selectedCategory);
  };

  const saveToLocalStorage = (selectedCategory) => {
    const existingData = JSON.parse(localStorage.getItem("userData")) || {};

    if (!existingData[category]) {
      existingData[category] = {};
    }

    if (!existingData[category][selectedCategory]) {
      existingData[category][selectedCategory] = [];
    }

    const filteredWords = wordInputs.filter((word) => word.trim() !== "");

    existingData[category][selectedCategory] = [
      ...existingData[category][selectedCategory],
      ...filteredWords,
    ];

    localStorage.setItem("userData", JSON.stringify(existingData));
  };

  const handleRegisterSubmit = () => {
    if (!selectedCategory) return;

    saveToLocalStorage(selectedCategory);
    setWordInputs(Array(30).fill(""));
    setOpenModal(false);
  };

  return (
    <>
      <header>
        <NavBar pathName={pathName} />
        <div className="flex justify-between items-start my-6 mx-12">
          <SystemCategory
            onSelect={setCategory}
            category={category}
            pathName={pathName}
          />
          <PageTitle pathName={pathName} />
        </div>
      </header>

      <main className="flex justify-center my-10">
        <div className="border-l w-4/5">
          {category === "WORD" && (
            <Word
              onClickOpenModal={onClickOpenModal}
              wordInputs={wordInputs}
              onWordChange={handleWordChange}
            />
          )}
          {category === "SENTENCE" && (
            <Sentence onClickOpenModal={onClickOpenModal} />
          )}
          {category === "CODE" && <Code onClickOpenModal={onClickOpenModal} />}
        </div>
      </main>
      {openModal && (
        <UserCategoryModal
          category={category}
          userCategory={userCategory}
          onAddCategory={handleAddCategory}
          onSelectCategory={handleSelectCategory}
          onRegisterSubmit={handleRegisterSubmit}
        />
      )}
    </>
  );
}
