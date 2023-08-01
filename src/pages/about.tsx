import "../app/globals.css";
import { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import About from "@/Components/About/About";
import Socials from "@/Components/Socials/Socials";
import Background from "@/Components/Background";

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

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
        <div
          className="flex-1 flex flex-col justify-center items-center background p-10 md:p-0 mt-20 md:mt-0"
          style={{
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <About />
          <div className="py-7 md:py-0 m-20 md:m-0 md:absolute top-0 md:top-1/2 right-2 md:right-8 translate-y-full md:-translate-y-1/2 ">
            <Socials />
          </div>
        </div>
        <Background />
      </div>
    </>
  );
}
