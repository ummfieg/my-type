import { HighlightButton } from "@/components/ui/button";

export default function SeletCategory({ userCategory }) {
  return (
    <div className="flex flex-col gap-3 px-3 w-4/5">
      <span className="text-start">카테고리 선택</span>
      <span className="text-foreground font-bold text-2xl text-center">
        word
      </span>
      <div className="grid grid-cols-2 gap-3 mx-4">
        {userCategory.map((value, index) => (
          <div
            key={index}
            type="text"
            className={`border border-sub px-3 py-2 h-11 ${
              index % 3 === 0
                ? "rounded-r-3xl rounded-l-full "
                : "rounded-r-full rounded-l-3xl"
            }  focus:border-point focus:outline-none max-leng`}
            // onChange={(e) => handleChange(e.target.value)}
          />
        ))}
      </div>
      <button className="cursor-pointer self-end text-sub" type="submit">
        <HighlightButton>선택완료</HighlightButton>
      </button>
    </div>
  );
}
