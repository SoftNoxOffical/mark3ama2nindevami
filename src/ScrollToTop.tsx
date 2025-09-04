import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" as ScrollBehavior }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // #anchor varsa zorlamayalım
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);
  return null;
}
