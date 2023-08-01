import "../app/globals.css";
import { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Background from "@/Components/Background";
import Work from "@/Components/Work/Work";

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState<number>(3);

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
        <Background />
        <div className="description-overlay p-20">
          <Work />
        </div>
      </div>
    </>
  );
}
