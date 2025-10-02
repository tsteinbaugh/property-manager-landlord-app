import { useEffect } from "react";

export default function useModalKeys({ onEscape, onEnter, enterDisabled = false }) {
  useEffect(() => {
    const handler = (e) => {
      // Escape → cancel/close
      if (e.key === "Escape") {
        onEscape?.();
        return;
      }
      // Enter → next/save (but ignore if we’re in a textarea or composing)
      if (e.key === "Enter" && !enterDisabled) {
        const tag = (e.target?.tagName || "").toLowerCase();
        const type = (e.target?.type || "").toLowerCase();
        const isTextArea = tag === "textarea";
        const isButton = tag === "button" || type === "submit";
        // Let forms handle their own submit (inputs) but still support wizard panels
        if (!isTextArea && !isButton) {
          e.preventDefault();
          onEnter?.();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onEscape, onEnter, enterDisabled]);
}
