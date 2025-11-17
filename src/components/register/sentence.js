export default function Sentence() {
  return (
    <>
      <div className="flex flex-col gap-5 py-1 px-5">
        <span>
          한 문장은 <span className="font-bold">50자~160자 까지</span> 가능해요.
        </span>
        <form className="flex flex-col gap-3 items-start">
          <div className="grid grid-rows-5 grid-cols-1 gap-3 w-4/5">
            {Array.from({ length: 5 }).map((_, index) => (
              <textarea
                key={index}
                type="text"
                className="border bg-main rounded-md border-transparent focus:border-b-point focus:outline-hidden px-2 py-2 h-24 resize-none"
                placeholder="문장 입력"
              />
            ))}
          </div>

          <button className="cursor-pointer w-4/5 text-end" type="submit">
            등록하기
          </button>
        </form>
      </div>
    </>
  );
}
