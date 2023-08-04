import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Description from "../components/Home/Description";
import Socials from "../components/Socials/Socials";
import Background from "../components/Background";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
          <Description />
          <div className="w-fit m-12 md:m-0 md:absolute top-0 md:top-1/2 right-2 md:right-8 translate-y-10 md:-translate-y-1/2">
            <Socials />
          </div>
        </div>
        <Background />
      </div>
    </>
  );
}
