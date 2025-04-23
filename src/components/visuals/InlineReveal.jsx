import { useState } from "react";
import "./InlineReveal.css";

export default function InlineReveal({ label, content }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="inline-reveal-wrapper">
      <button
        className="inline-reveal-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
      </button>
      {open && (
        <span className="inline-reveal-panel">
          {typeof content === "string" ? <p>{content}</p> : content}
        </span>
      )}
    </span>
  );
}
