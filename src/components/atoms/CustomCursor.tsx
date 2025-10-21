import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth 60fps updates
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-dot"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
      
      {/* Clean white circle border cursor */}
      <div
        className="white-circle-cursor"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: isHovering ? "scale(1.2)" : "scale(1)",
        }}
      />
    </>
  );
};

export default CustomCursor;
