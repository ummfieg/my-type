import Category from "@/components/ui/category";
import NavBar from "@/components/ui/menuNav";
import PageTitle from "@/components/ui/pageTitle";
import Word from "@/components/register/word";
import Sentence from "@/components/register/sentence";
export default function Resgister() {
  return (
    <>
      <header>
        <NavBar />
        <div className="flex justify-between items-start my-6">
          <Category />
          <PageTitle />
        </div>
      </header>

      <main className="flex justify-center my-10">
        <div className="border-l w-full">
          <Word />
          <Sentence />
        </div>
      </main>
    </>
  );
}
