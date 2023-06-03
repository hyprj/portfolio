import React, { useEffect } from "react";

export const Overlay = ({ onClick }: { onClick: () => void }) => {
  useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClick();
    };
    window.addEventListener("keydown", handleEscapePress);

    return () => window.removeEventListener("keydown", handleEscapePress);
  }, []);

  return <div className="absolute inset-0" onClick={onClick}></div>;
};
