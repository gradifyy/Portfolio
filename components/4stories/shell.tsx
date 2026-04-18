"use client";

import { useEffect } from "react";

export default function FourStoriesShell({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("page-4stories");
    return () => {
      document.body.classList.remove("page-4stories");
    };
  }, []);

  return <div className="fs-root fs-grain">{children}</div>;
}
