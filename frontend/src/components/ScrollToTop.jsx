import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function resetNodeScroll(node) {
  if (!node) return;
  try {
    if (typeof node.scrollTo === "function") node.scrollTo(0, 0);
    node.scrollTop = 0; // fallback
    node.scrollLeft = 0;
  } catch (_) {}
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return; // let #anchors work normally

    const candidates = [
      document.getElementById("scroll-root"),
      document.querySelector(".app-scroll"),
      document.querySelector("main"),
      document.querySelector("[data-scroll]"),
      document.scrollingElement,
      document.documentElement,
      document.body,
    ].filter(Boolean);

    // pass 1: immediately (pre-paint for most cases)
    candidates.forEach(resetNodeScroll);
    window.scrollTo(0, 0);

    // pass 2: next frame (handles late layout/focus-induced jumps)
    const raf1 = requestAnimationFrame(() => {
      candidates.forEach(resetNodeScroll);
      window.scrollTo(0, 0);
    });

    // pass 3: one more frame for stubborn UIs
    const raf2 = requestAnimationFrame(() => {
      candidates.forEach(resetNodeScroll);
      window.scrollTo(0, 0);
    });

    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
  }, [pathname, search, hash]);

  return null;
}
