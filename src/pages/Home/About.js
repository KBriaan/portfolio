import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const {loading, portfolioData} =useSelector(state => state.root);
  const {about}=portfolioData;
 const {skills, lottieURL, description1, description2,} = about;

  return (
    <div>
      <SectionTitle title={"About"} />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[50vh] sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            I am a full stack developer who thrives on building beautiful and
          {description1 || ''}
          </p>

          <p className="text-white">
            {description2 || ''}
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are few technologies I am working with currently
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary"> {skill} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
