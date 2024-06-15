import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const {loading, portfolioData} =useSelector(state => state.root);
  const {intro}=portfolioData;
 const {firstName, lastName, welcomeText, description, caption} = intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start gap-10">
      <h1 className="text-white mt-20">{welcomeText || ''} </h1>
      <h1 className="text-5xl  text-secondary font-semibold sm:text-2xl">{firstName || ''}  {lastName || ''}</h1>
      <h1 className="text-5xl sm:text-2xl text-white font-semibold">
       
      {caption || ''}
      </h1>
      <p className="text-white w-2/3">
       
      {description || ''}
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
  );
}

export default Intro;
