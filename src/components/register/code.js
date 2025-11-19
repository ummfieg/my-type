import { HighlightButton } from "../ui/button";

export default function Code() {
  return (
    <div className="flex flex-col gap-5 py-1 px-5">
      <span>
        코드는 <span className="font-bold">줄바꿈을 유의해서</span>{" "}
        입력해주세요.
      </span>
      <form className="flex gap-3 flex-col">
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <textarea
              key={index}
              type="text"
              className="border bg-main rounded-md border-transparent focus:border-b-point focus:outline-hidden px-2 py-2 resize-none h-[400px] overflow-auto"
              placeholder="코드 입력"
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
