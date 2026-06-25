import { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
}

export default function SearchOverlay({ onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-popup" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          id="search-input"
          placeholder="Search conversations..."
          autoComplete="off"
        />
        <div className="search-results" />
      </div>
    </div>
  );
}
