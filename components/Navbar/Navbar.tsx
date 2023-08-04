import { NavbarItems } from "./NavbarItems";
import Link from "next/link";
//@ts-ignore
const Navbar = ({ activeIndex, onItemClick }) => {
  return (
    <div className="container mx-auto">
      <nav
        className="flex justify-center items-center space-x-2 text-boldPurple text-md md:text-xl m-8"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        {NavbarItems.map((item, index) => (
          <Link
            href={item.href}
            key={item.key}
            className={`relative px-4 py-2 rounded-lg ${
              activeIndex === index
                ? "bg-fadePurple hover:text-white shadow-sm md:shadow-md rounded-lg"
                : "hover:bg-fadePurple hover:shadow-md rounded-lg"
            } transition-all duration-500 ease-in-out`}
            target={item.target}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={(e) => {
              onItemClick(index);
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
