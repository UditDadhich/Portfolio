import { useRef } from "react";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const button = ref.current;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="
        px-7
        py-3.5
        rounded-2xl
        bg-white
        text-black
        font-medium
        transition-all
        duration-300
      "
    >
      {children}
    </button>
  );
};

export default MagneticButton;