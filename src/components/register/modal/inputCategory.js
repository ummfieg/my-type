import { HighlightButton } from "@/components/ui/button";
import { useState } from "react";

export default function InputCategory({ handleChange, handleRegister }) {
  return (
    <form className="flex flex-col gap-3 px-3 w-4/5">
      <span className="text-start">
        새 카테고리 등록
        <span className="text-sm text-sub "> (10자 이내)</span>
      </span>

      <div className="bg-white/50 rounded-2xl border-transparent flex justify-center items-center p-2 mb-5 mx-auto w-70 ">
        <input
          className="border border-main rounded-2xl w-full h-10 focus:border-sub focus:outline-none p-2"
          placeholder="빈 카테고리"
          maxLength={10}
          name="유저카테고리"
          // onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
      <button
        className="cursor-pointer self-end text-sub"
        type="submit"
        onClick={handleRegister}
      >
        <HighlightButton>등록완료</HighlightButton>
      </button>
      <p className="text-sub text-sm text-end">
        카테고리 관리는 'my types'에서 할 수 있어요
      </p>
    </form>
  );
}
