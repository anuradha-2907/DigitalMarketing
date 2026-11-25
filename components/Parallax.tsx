"use client";

import { useEffect } from "react";

/** Applies the Rellax parallax effect to every `.rellax` element on the page. */
export default function Parallax() {
  useEffect(() => {
    let cancelled = false;
    let instance: { destroy: () => void } | undefined;

    import("rellax").then(({ default: Rellax }) => {
      if (cancelled || !document.querySelector(".rellax")) return;
      instance = new Rellax(".rellax", { center: true });
    });

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, []);

  return null;
}
