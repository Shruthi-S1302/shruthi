import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background";
import Work from "../components/Work/Work";

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
