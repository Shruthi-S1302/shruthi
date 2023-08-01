import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-justify text-boldPurple bg-fadePurple rounded-lg p-10 md: max-w-xl md:max-w-3xl shadow-lg translate-y-20 md:translate-y-10">
        <h3 className="font-bold text-xl pb-3">
          Hello, wonderful people of the internet!👋{" "}
        </h3>
        <p>
          I'm Shruthi, a passionate computer science student at Vellore
          Institute of Technology. Back in my school days, I was a dedicated
          nerd, always striving for top grades and academic excellence. However,
          as I delved deeper into the world of technology and software, my
          perspective shifted. Now, I aspire to make a genuine impact with my
          work and create solutions that truly matter, rather than simply
          seeking praise. My current journey involves exploring a diverse range
          of exciting fields, including Web Development, Software Engineering,
          Blockchain, Artificial Intelligence, and Natural Language Processing.
          But that's not all, I also have a flair for the artistic side and
          dream of venturing into the realms of UI and UX design. Music is my
          constant source of serenity, especially when debugging becomes a
          challenge. As an avid reader (a proud Potterhead 🪄), I find joy in
          getting lost in the world of fiction. Above all, my goal is to
          leverage my talents and contribute meaningfully to the world. <br />
        </p>
        <h4 className="pt-2 font-semibold">
          Thanks for your patience in getting to know me better!
        </h4>
      </div>
    </div>
  );
}

export default About;
