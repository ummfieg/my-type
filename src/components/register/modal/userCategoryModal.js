import { useEffect, useState } from "react";
import { HighlightButton } from "../../ui/button";
import InputCategory from "./inputCategory";
import SeletCategory from "./selectCategory";
export default function UserCategory({
  category,
  onRegisterSubmit,
  userCategory,
  onAddCategory,
  onSelectCategory,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div
        className="border border-sub rounded-4xl w-2/6 flex flex-col items-center p-8 bg-background max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold">카테고리 설정</h3>
        <p>어떤 카테고리로 설정할까요?</p>

        <div className="border-sub border-b w-full my-4"></div>

        <div className="w-full max-h-[60vh] overflow-y-auto flex flex-col items-center">
          <InputCategory onAddCategory={onAddCategory} />
          <div className="border-sub border-b w-full my-4"></div>
          <SeletCategory
            userCategory={userCategory}
            category={category}
            onSelectCategory={onSelectCategory}
            onRegisterSubmit={onRegisterSubmit}
          />
        </div>
      </div>
    </div>
  );
}
