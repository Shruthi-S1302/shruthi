import { SocialsList } from "./SocialsList";

function Socials() {
  return (
    <div className=" bg-fadePurple rounded-lg p-0 md:p-3">
      <div className="flex md:flex-col flex-row text-boldPurple text-2xl md:text-3xl">
        {SocialsList.map((item) => (
          <a
            key={item.key}
            href={item.url}
            className="rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-bgPurple hover:shadow-sm"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
