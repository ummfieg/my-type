const pageTitleList = {
  "/register": {
    title: "collect 🗂️",
    sub: "배우고 싶은 문장을 담아요",
  },
  "/study": {
    title: "type 💡",
    sub: "의식적으로 치고, 생각을 남겨요",
  },
  "/myTypes": {
    title: "my traces 📙",
    sub: "오늘의 흔적이 쌓여있어요",
  },
};

export default function PageTitle({ pathName }) {
  const pageTitle = pageTitleList[pathName];

  if (!pageTitle) return <p>페이지를 찾을 수 없어요</p>;
  return (
    <>
      <div className="flex items-end flex-col gap-2">
        <p className="font-bold text-4xl">{pageTitle.title}</p>
        <p>{pageTitle.sub}</p>
      </div>
    </>
  );
}
