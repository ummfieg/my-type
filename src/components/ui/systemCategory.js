import React from "react";
import { HighlightButton } from "./button";
const categoryItems = ["WORD", "SENTENCE", "CODE"];

export default function SystemCategory({ onSelect, category }) {
  return (
    <div className="flex justify-center flex-col w-84 pt-2 ">
      <div className="rounded-full border-foreground h-14 border px-4 flex justify-around items-center ">
        {categoryItems.map((item, index) => (
          <React.Fragment key={(item, index)}>
            <HighlightButton>
              <span
                className="cursor-pointer text-sub "
                onClick={() => onSelect(item)}
              >
                {item}
              </span>
            </HighlightButton>
            {index < categoryItems.length - 1 && <div className="m-1">|</div>}
          </React.Fragment>
        ))}
      </div>

      {category === "WORD" && (
        <p className="my-1 px-4 text-sm">
          단어(WORD)는 한번에 30개 씩 등록할 수 있어요!
        </p>
      )}
      {category === "SENTENCE" && (
        <p className="my-1 px-4  text-sm">
          문장(SENTENCE)는 한번에 5개 씩 등록할 수 있어요!
        </p>
      )}
      {category === "CODE" && (
        <p className="my-1 px-4  text-sm">
          코드(CODE)는 한번에 2개 씩 등록할 수 있어요!
        </p>
      )}
    </div>
  );
}
