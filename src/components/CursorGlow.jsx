import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x - 120,
        top: position.y - 120,
      }}
    >
      <div className="w-[240px] h-[240px] rounded-full bg-purple-500/10 blur-[100px]" />
    </div>
  );
};

export default CursorGlow;