import React from "react";
import Link from "next/link";
import { ClickedButton, HighlightButton } from "./button";

const navItems = [
  { label: "home", href: "/" },
  { label: "register", href: "/register" },
  { label: "study", href: "/study" },
  { label: "my types", href: "/" },
];

export default function MenuNav({ pathName }) {
  return (
    <div className="flex gap-3 justify-end items-center mx-12">
      {navItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <HighlightButton>
            <Link href={item.href} className="cursor-pointer">
              <ClickedButton isClicked={pathName === item.href}>
                {item.label}
              </ClickedButton>
            </Link>
          </HighlightButton>
          {index < navItems.length - 1 && <div>|</div>}
        </React.Fragment>
      ))}
    </div>
  );
}
