import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background";
import Skills from "../components/Skills/Skills";

export default function SkillsPage() {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div
        style={{ position: "relative" }}
        className="selection:text-white selection:bg-lightPurple"
      >
        <Navbar activeIndex={activeIndex} onItemClick={handleItemClick} />
        <div className="description-overlay p-20">
          <p className="text-2xl text-lightPurple font-bold">WEB DEVELOPMENT</p>
          <Skills />
        </div>
        <Background />
      </div>
    </>
  );
}
