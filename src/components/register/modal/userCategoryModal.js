"use client";

import { useEffect, useState } from "react";
import { HighlightButton } from "../../ui/button";
import InputCategory from "./inputCategory";
import SeletCategory from "./selectCategory";
export default function UserCategory({ category, onClickCloseModal }) {
  const [userCategory, setUserCategory] = useState(Array(10).fill(""));
  const [hasRegistered, setHasRegistered] = useState(false);

  const handleChange = (index, value) => {
    const newUserCategory = [...userCategory];
    newUserCategory[index] = value;
    setUserCategory(newUserCategory);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // onClickCloseModal();
  };

  const handleRegister = () => {
    e.preventDefault();
    console.log(`${category}, ${userCategory} 저장준비`);
    localStorage.setItem(category, JSON.stringify(userCategory));
    setHasRegistered(true);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClickCloseModal}
    >
      <div
        className=" border border-sub rounded-4xl w-2/6 flex flex-col items-center p-8 bg-background max-h-[90vh] overflow-y-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold">카테고리 설정</h3>
        <p>어떤 카테고리로 설정할까요?</p>

        <div className="border-sub border-b w-full mb-4 mt-4"></div>
        <InputCategory
          handleChange={handleChange}
          handleRegister={handleRegister}
        />
        <div className="border-sub border-b w-full mb-4 mt-4"></div>
        <SeletCategory userCategory={userCategory} />
      </div>
    </div>
  );
}
