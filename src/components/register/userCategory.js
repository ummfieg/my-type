export default function UserCategory() {
  return (
    <div className=" border border-sub rounded-3xl w-2/6 flex flex-col items-center p-8 bg-background z-50">
      <h3 className="text-2xl font-bold">카테고리 설정</h3>
      <p>어떤 카테고리로 설정할까요?</p>

      <p className="mt-4 text-sm ">
        카테고리 이름은 10자까지 등록할 수 있어요!
      </p>
      <div className="border-sub border-b w-full mb-4"></div>

      <form className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3 mt-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className={`border border-sub px-3 py-2 ${
                index % 3 === 0
                  ? "rounded-r-3xl rounded-l-full "
                  : "rounded-r-full rounded-l-3xl"
              }  focus:border-point focus:outline-none max-leng`}
              placeholder="빈 카테고리"
              maxLength={10}
            />
          ))}
        </div>
        <button className="cursor-pointer self-end" type="submit">
          선택완료
        </button>
        <p className="text-sub text-sm text-end">
          카테고리 관리는 'my types'에서 할 수 있어요
        </p>
      </form>
    </div>
  );
}
