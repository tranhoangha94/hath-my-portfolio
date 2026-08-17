"use client";

import { useEffect, useState } from "react";

const roles = ["AI Engineer", "Frontend Developer", "VibeCode Developer"];

export default function RoleBadge({ readyFor }: { readyFor: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="eyebrow">
      ● {readyFor}{" "}
      <span className="eyebrow-role" key={index}>
        {roles[index]}
      </span>
    </div>
  );
}
