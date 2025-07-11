"use client"
import React from 'react';

const reseachCollection = [
  {
    id: 1,
    title: "Applications of Artificial Intelligence in Modern Education",
    imgLink: "https://i.ibb.co/PsdPR1yP/aideal-hwa-OYzbqk2y26c-unsplash.jpg",
    researchLink: "https://example.com/research/artificial-intelligence-education"
  },
  {
    id: 2,
    title: "Innovative Techniques in Sustainable Agriculture",
    imgLink: "https://i.ibb.co/xSjdzc8y/claudio-guglieri-K2-RH1-QZd-LF4-unsplash.jpg",
    researchLink: "https://example.com/research/sustainable-agriculture"
  },
  {
    id: 3,
    title: "Advances in Aquaculture and Fishery Management",
    imgLink: "https://i.ibb.co/gZnSXntY/steven-weeks-DUPFowq-I6o-I-unsplash.jpg",
    researchLink: "https://example.com/research/aquaculture-fishery"
  },
  {
    id: 4,
    title: "The Role of Robotics in Industrial Automation",
    imgLink: "https://i.ibb.co/pB76ZSh3/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg",
    researchLink: "https://example.com/research/robotics-industrial-automation"
  }
];

const ResearchPaper = () => {
  return (
    <div className="w-full common_padding my-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-4 mb-8 text-center">
        Research Papers by Our College Students
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reseachCollection.map(({ id, title, imgLink, researchLink }) => (
          <div 
            key={id} 
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <img
                src={imgLink}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-4 flex-grow">{title}</h3>
              <a
                href={researchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block primary_bg_color text-white text-center py-2 rounded transition"
              >
                Read Research
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
