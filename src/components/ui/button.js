export function HighlightButton({ children }) {
  return (
    <div className="group hover:bg-main hover:text-foreground transition-colors duration-500">
      {children}
    </div>
  );
}

export function SimpleButton() {
  return <div></div>;
}
