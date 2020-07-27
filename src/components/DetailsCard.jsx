// https://uidesigndaily.com/posts/sketch-details-card-info-link-day-1136

import React from 'react';
// import DetailColorPicker from './DetailColorPicker';

const DetailsCard = () => (
  <div className="py-2 px-3 bg-gray-200 rounded-md">
    <div className="flex mb-4">
      <button className="w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md" type="button">Details</button>
      <button className="w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md" type="button">Tutorials</button>
      <button className="w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md" type="button">
        Code
        <br />
        snippets
      </button>
    </div>
    <div className="px-6">
      <div>
        {/* <DetailColorPicker /> */}
        <Tutorial />
      </div>
    </div>
  </div>
);

function Tutorial() {
  const tutorials = [
    {
      course: 'HTML/CSS',
      content: [
        {
          name: 'Andrew',
          link: 'http://www.youtube.com',
        },
        {
          name: 'Shanghai',
          link: 'http://www.youtube.com',
        },
      ],
    },
  ];

  return (
    <div>
      <h6 className="font-bold text-gray-800">Tutorials</h6>
      <p>Learn how to build this component</p>
      {
        tutorials.map((tutorial) => (
          <ul key={tutorial.course}>
            <h6>{tutorial.course}</h6>
            {
              tutorial.map((content) => (
                <li key={content.name}>
                  <h6>{content.name}</h6>
                  <p>{content.link}</p>
                </li>
              ))
            }
          </ul>
        ))
      }
    </div>
  );
}

export default DetailsCard;
