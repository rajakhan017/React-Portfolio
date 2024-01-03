import React, { useState } from "react";
import PrimaryFocus from "./PrimaryFocus";
import ExploringCreativity from "./ExploringCreativity";
import ProgrammingLanguages from "./ProgrammingLanguages";
import HumanLanugages from "./HumanLanugages";
import DevelopmentSkills from "./DevelopmentSkills";
import FavoriteAct from "./FavoriteAct";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };

  // Define the full content separately
  const fullContent = (
    <>
      Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
      Full-Stack software developer, I specialize in creating visually appealing
      websites, apps and mobile games. My passion for graphic design isn't just
      a hobby, it's a key ingredient in every project I work on.
      <br />
      <br /> Growing up bilingual, I developed a love for languages and I
      currently speak four of them fluently. I believe that this skill has given
      me a unique perspective and allows me to communicate effectively with
      clients from all over the world. One of my strengths is adding a personal
      touch to my projects by adding the client's identity and message into the
      design, creating meaningful and beautiful end products that are both
      eye-catching and user-friendly.
      <br />
      <br /> In my free time, I enjoy exploring my other passions, such as
      photography and music production, which provide me with creative outlets.
      I am also very passionate about Web3 and everything related to crypto,
      NFTs and blockchain technology as I believe they have the potential to
      revolutionize business and online interactions.
      <br />
      <br /> If you have an innovative idea for a project that needs to be
      developed, I would love to hear from you. Your vision can be turned into a
      real product. Don't hesitate to reach out and let's start a conversation
      about your concept. I'm excited to collaborate and help bring your ideas
      to life.
    </>
  );
  const lessContent = (
    <>
      Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
      Full-Stack software developer, I specialize in creating visually appealing
      websites, apps and mobile games. My passion for graphic design isn't just
      a hobby, it's a key ingredient in every project I work on.
    </>
  );

  const content = readMore ? fullContent : lessContent;

  return (
    <div>
      <div className="insideS bg-[#2020221F] rounded-2xl px-[30px] pt-[25px] pb-[25px] mb-[40px]">
        <p className="text-[#D6D6D6] text-[15px] mb-[15px] overflow-hidden">
          {content}
        </p>
        <div className="text-center text-[15px] font-light text-white">
          <button
            onClick={handleReadMoreClick}
            className="duration-1000 animate-bounce"
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <PrimaryFocus />
      <ExploringCreativity />
      <ProgrammingLanguages />
      <HumanLanugages />
      <DevelopmentSkills />
      <FavoriteAct />
    </div>
  );
};

export default About;
