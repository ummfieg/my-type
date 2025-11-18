import Link from "next/link";

export default function MenuNav() {
  return (
    <>
      <div className="flex gap-3 justify-end items-center text-sub">
        <Link href="/" className="cursor-pointer">
          home
        </Link>
        <div>|</div>
        <Link href="/register" className="cursor-pointer">
          register
        </Link>
        <div>|</div>
        <Link href="/" className="cursor-pointer">
          study
        </Link>
        <div>|</div>
        <Link href="/" className="cursor-pointer">
          my types
        </Link>
      </div>
    </>
  );
}
