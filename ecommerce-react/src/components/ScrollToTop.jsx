// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="btn btn-primary btn-circle fixed bottom-6 right-6 shadow-lg z-40"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Go to top"
    >
      ↑
    </button>
  );
}
