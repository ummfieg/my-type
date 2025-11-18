import { HighlightButton } from "../ui/button";

export default function Word() {
  return (
    <div className="flex flex-col gap-5 py-1 px-5">
      <span>
        단어는 <span className="font-bold">공백 최대 3개까지</span> 허용해요.
        <span className="text-sub ml-2">예: my type 타이핑</span>
      </span>
      <form className="flex flex-col gap-3">
        <div className="grid grid-cols-5 grid-rows-6 gap-3">
          {Array.from({ length: 30 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="border bg-main rounded-md border-transparent focus:border-b-point focus:outline-hidden px-2 py-2"
              placeholder="단어입력"
            />
          ))}
        </div>
        <button className="cursor-pointer self-end text-sub" type="submit">
          <HighlightButton>등록하기</HighlightButton>
        </button>
      </form>
    </div>
  );
}
