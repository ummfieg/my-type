export default function Category() {
  return (
    <>
      <div className="flex justify-center flex-col w-90 pt-2">
        <div className="rounded-full border-foreground h-14 border px-4 flex justify-around items-center ">
          <span className="cursor-pointer">WORD</span>
          <div className="m-1">|</div>
          <span className="cursor-pointer">SENTENCE</span>
          <div className="m-1">|</div>
          <span className="cursor-pointer">CODE</span>
        </div>
        <p className="my-1 mx-1">
          문장(SENTENCE)는 한번에 5개씩 등록할 수 있어요!
        </p>
      </div>
    </>
  );
}
