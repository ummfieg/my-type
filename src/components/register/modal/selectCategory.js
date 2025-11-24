import { HighlightButton } from "@/components/ui/button";

export default function SeletCategory({
  userCategory,
  category,
  onSelectCategory,
  onRegisterSubmit,
}) {
  return (
    <div className="flex flex-col gap-3 px-3 w-4/5">
      <span className="text-start">카테고리 선택</span>
      <span className="text-foreground font-bold text-center">{category}</span>
      <div className="grid grid-cols-2 gap-3 mx-4 ">
        {userCategory.map((value, index) => (
          <button
            key={index}
            type="button"
            className={`border border-sub px-3 py-2 h-11 cursor-pointer text-center overflow-auto ${
              index % 3 === 0
                ? "rounded-r-3xl rounded-l-full "
                : "rounded-r-full rounded-l-3xl"
            }  focus:border-point focus:outline-none max-leng`}
            onClick={() => onSelectCategory(value)}
          >
            <HighlightButton>{value}</HighlightButton>
          </button>
        ))}
      </div>
      <button
        className="cursor-pointer self-end text-sub"
        type="submit"
        onClick={onRegisterSubmit}
      >
        <HighlightButton>선택완료</HighlightButton>
      </button>
    </div>
  );
}
