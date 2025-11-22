export function HighlightButton({ children }) {
  return (
    <div className="group hover:bg-main hover:text-foreground transition-colors duration-500">
      {children}
    </div>
  );
}

export function ClickedButton({ children, isClicked, onClick }) {
  return (
    <div
      className={`cursor-pointer bg-transparent ${
        isClicked ? "text-foreground font-bold" : "text-sub"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
