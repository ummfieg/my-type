import React from "react";
import { ClickedButton, HighlightButton } from "./button";

const categoryItems = ["WORD", "SENTENCE", "CODE"];

const subTextList = {
  WORD: "단어(WORD)는 한번에 30개 씩 등록할 수 있어요!",
  SENTENCE: "문장(SENTENCE)는 한번에 5개 씩 등록할 수 있어요!",
  CODE: "코드(CODE)는 한번에 2개 씩 등록할 수 있어요!",
};

export default function SystemCategory({ onSelect, category, pathName }) {
  const showSubText = pathName === "/register";
  return (
    <div className="flex justify-center flex-col w-84 pt-2 ">
      <div className="rounded-full border-foreground h-14 border px-4 flex justify-around items-center ">
        {categoryItems.map((item, index) => (
          <React.Fragment key={item}>
            <HighlightButton>
              <ClickedButton
                isClicked={category === item}
                onClick={() => onSelect(item)}
              >
                {item}
              </ClickedButton>
            </HighlightButton>
            {index < categoryItems.length - 1 && <div className="m-1">|</div>}
          </React.Fragment>
        ))}
      </div>

      {showSubText && subTextList[category] && (
        <p className="my-1 px-4 text-sm">{subTextList[category]}</p>
      )}
    </div>
  );
}
