import React from 'react';
// import arrow from '../assets/arrow.svg';
import DetailContentTitle from './DetailContentTitle';
import DetailCourseCard from './DetailCourseCard';
import DetailNotice from './DetailNotice';

const DetailCodeSnippets = () => {
  const tutorials = [
    {
      course: 'HTML/CSS',
      content: [
        {
          name: 'Andrew',
          link: 'http://www.youtube.com',
        },
        {
          name: 'frederic',
          link: 'http://www.youtube.com',
        },
      ],
    },
  ];

  const title = 'Code Snippets';
  const content = 'Inspect the solutions others implemented.';

  return (
    <div className='min-w-full'>
      <DetailContentTitle title={title} content={content} />
      {
        tutorials.map((tutorial) => (
          <ul key={tutorial.course} className='mt-6'>
            {
              tutorial.content.map((content) => (
                <li key={content.name} className='mb-5 p-4 bg-white rounded-md shadow-md'>
                  <DetailCourseCard link={content.link} name={content.name} />
                </li>
              ))
            }
          </ul>
        ))
      }
      <DetailNotice />
    </div>
  );
};

export default DetailCodeSnippets;
