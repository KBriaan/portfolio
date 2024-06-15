import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {portfolioData} =useSelector(state => state.root);
  const {projects}=portfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-5 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-1 border-teal-600 w-1/3 sm:flex-row sm:overflow-scroll-X sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-white border-tertiary border-l-4 -ml-[1px] bg-teal-800 py-3 sm:w-full "
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex gap-20 items-center justify-center sm:flex-col">
        <img src= {projects[selectedItemIndex].image} alt="Img" className="h-90 w-72"/>
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>

            <p className="text-white text-xl">
              {projects[selectedItemIndex].description}
            </p>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
