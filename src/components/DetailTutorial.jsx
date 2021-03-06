import React from 'react';
import DetailContentTitle from './DetailContentTitle';
import DetailCourseCard from './DetailCourseCard';
import DetailNotice from './DetailNotice';

const DetailTutorial = () => {
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
    {
      course: 'React Native',
      content: [
        {
          name: 'Jason',
          link: 'http://www.youtube.com',
        },
      ],
    },
  ];

  const title = 'Tutorials';
  const content = 'Learn how to build this component';

  return (
    <div className='min-w-full'>
      <DetailContentTitle title={title} content={content} />
      {
        tutorials.map((tutorial) => (
          <ul key={tutorial.course} className='mt-6'>
            <h6 className='font-bold text-gray-600 mb-2'>{tutorial.course}</h6>
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

export default DetailTutorial;
