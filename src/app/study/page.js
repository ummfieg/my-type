"use client";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import SystemCategory from "@/components/ui/systemCategory";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Study() {
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  const [category, setCategory] = useState("WORD");
  const onSelect = (e) => {
    setCategory(e);
  };
  const [userCategory, setUserCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [typed, setTyped] = useState("");
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEffect, setShowEffect] = useState(false);

  const isCorrect = typed === letters.join("");

  const onChangeInput = (e) => {
    setTyped(e.target.value);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};
    setUserData(storedData);
  }, []);

  useEffect(() => {
    const categories = userData[category]
      ? Object.keys(userData[category])
      : [];

    setUserCategory(categories);
    setSelectedCategory(categories[0] || "");
    setCurrentIndex(0);
  }, [category, userData]);

  useEffect(() => {
    setCurrentIndex(0);
    setTyped("");
  }, [category, selectedCategory]);

  useEffect(() => {
    const words = userData[category]?.[selectedCategory] || [];
    const current = words[currentIndex] || "";
    setLetters(current.split(""));
    setTyped("");
  }, [category, selectedCategory, currentIndex, userData]);

  useEffect(() => {
    if (isCorrect && letters.length > 0) {
      setShowEffect(true);
      const timeout = setTimeout(() => setShowEffect(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isCorrect, letters]);

  const handleKeyDown = (e) => {
    if (!isCorrect) return;
    if (e.key === "Enter") {
      const words = userData[category]?.[selectedCategory] || [];

      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
      e.preventDefault();
    }
  };

  return (
    <>
      <header>
        <NavBar pathName={pathName} />
        <div className="flex justify-between items-start my-6 mx-12">
          <SystemCategory onSelect={setCategory} category={category} />
          <PageTitle pathName={pathName} />
        </div>
      </header>

      <main className="w-full flex flex-col items-center px-6 mt-3 gap-2">
        <section className="flex justify-start ml-20 w-full md:w-[1000px]">
          <select
            className="text-20px bg-sub/30 px-3 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              카테고리 선택
            </option>
            {userCategory.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="bg-accent-dark px-3 py-2"></div>
        </section>

        <section className="relative flex justify-start items-center md:w-[1000px] h-52 ml-20">
          <div className="absolute w-4/5 h-40 bg-sub/40 rounded-2xl -rotate-1 translate-y-1 translate-x-2 z-0 shadow-md"></div>
          <div className="relative w-4/5 h-40 bg-main rounded-2xl z-10 shadow-md p-6">
            <div className="w-full flex justify-center my-6">
              <div className="bg-white/70 rounded-3xl px-5 py-3">
                <div className="flex items-center w-72 h-12 rounded-2xl border-2 border-main bg-transparent text-center text-lg font-medium justify-center">
                  {letters && letters.length > 0 ? (
                    letters.map((char, index) => {
                      let colorClass = "text-sub font-bold";

                      if (typed && index < typed.length) {
                        colorClass =
                          typed[index] === char
                            ? "text-foreground font-bold"
                            : "text-point font-bold";
                      }
                      return (
                        <span key={index} className={colorClass}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      );
                    })
                  ) : (
                    <span className="text-sub font-bold">
                      단어를 먼저 등록해주세요
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {showEffect && (
          <div className="fixed bottom-10 flex justify-center items-center pointer-events-none z-50">
            <span className="text-4xl animate-rise">👍 👏 🎉</span>
          </div>
        )}

        <section className="relative flex justify-end items-center md:w-[1000px] h-56 mr-20">
          <div className="absolute w-4/5 h-48 bg-sub/40 -translate-y-3 -translate-x-3 z-0 shadow-md"></div>
          <div className="absolute w-4/5 h-50 bg-accent-dark rotate-1 -translate-y-1 translate-x-2 z-10 shadow-md"></div>
          <div className="relative w-4/5 h-48 bg-accent rounded-2xl rotate-0 z-20 shadow-md p-6">
            <div className="w-full flex justify-center my-6">
              <div className="bg-white/70 rounded-3xl px-5 py-3">
                <input
                  value={typed}
                  onChange={onChangeInput}
                  onKeyDown={handleKeyDown}
                  className={`w-72 h-12 rounded-2xl border-2 border-main bg-transparent text-center text-lg font-medium focus:outline-none focus:border-accent-dark transition

  `}
                  placeholder="타이핑 해보세요"
                  maxLength={20}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
