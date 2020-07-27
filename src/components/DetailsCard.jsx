// https://uidesigndaily.com/posts/sketch-details-card-info-link-day-1136

import React from 'react';

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
        <Color />
      </div>
    </div>
  </div>
);

function Color() {
  const color = [{
    code: 'bg-gray-400',
    name: '#cbd5e0',
  },
  {
    code: 'bg-red-200',
    name: '#fed7d7',
  },
  {
    code: 'bg-red-900',
    name: '#742a2a',
  },
  {
    code: 'bg-orange-600',
    name: '#dd6b20',
  },
  {
    code: 'bg-green-400',
    name: '#68d391',
  },
  {
    code: 'bg-blue-300',
    name: '#90cdf4',
  }];

  const copyCode = (e) => {
    console.dir(e.target);
  };

  return (
    <div>
      <h6 className="font-bold text-gray-800">Color Palette</h6>
      <p>Click on the color to copy code</p>
      <ul className="w-full flex flex-wrap mt-6">
        {
          color.map((item) => (
            <li key={item.name}>
              <button type="button" onClick={(e) => { copyCode(e); }} className="p-3 py-1 mr-2 rounded-full bg-white flex items-center mb-6 cursor-pointer focus:outline-none active:bg-gray-300">
                <span className={`w-6 h-6 rounded-full inline-block mr-1 ${item.code}`} />
                <span className="w-20 text-lg ml-1">{ item.name }</span>
              </button>
            </li>
          ))
        }
      </ul>
      <h6 className="font-bold text-gray-800">Fonts</h6>
      <p className="my-3 text-sm text-gray-700">Muli Regular</p>
      <p className="my-3 text-sm text-gray-700">Muli Bold</p>
    </div>
  );
}

export default DetailsCard;
