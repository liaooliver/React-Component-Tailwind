// https://uidesigndaily.com/posts/sketch-table-dropdown-pagination-day-1142
import React from 'react';
import '../index.css';

const layout ={
    'maxWidth': '1024px',
    'minWidth': '1024px',
}

const code = {
    0: 'bg-gray-500',
    1: 'bg-green-500'
}

const TableList = () => {

    const statusCodeSwitch = (statusCode) => {
        return code[statusCode]
    }

    const dataset = [
        {
            name: {
                text: 'A',
                statusCode: statusCodeSwitch(0),
                status: 'Draft'
            },
            views: 0,
            submissions: 133,
            lastModified: 'Mar 31 2020'
        },
        {
            name: {
                text: 'B',
                statusCode: statusCodeSwitch(1),
                status: 'Published'
            },
            views: 100,
            submissions: 211,
            lastModified: 'Jan 01 2020'
        },
        {
            name: {
                text: 'C',
                statusCode: statusCodeSwitch(0),
                status: 'Draft'
            },
            views: 78,
            submissions: 0,
            lastModified: 'May 26 2020'
        },
    ]

    return (
        <div className="bg-white shadow rounded-lg p-10" style={layout}>
            <div className="mb-10">
                <span className="flex items-center">
                    <p>Show analytics for:</p>
                    <span className="relative inline-block ml-4">
                        <select className="block appearance-none w-full border-0 active:shadow-md text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </span>
                    <p className="ml-4">Type:</p>
                    <span className="relative inline-block ml-4">
                        <select className="block appearance-none w-full border-0 active:shadow-md text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </span>
                </span>
                <span></span>
            </div>
            <table className="w-full table-fixed mb-10">
                <thead>
                    <tr className="uppercase text-left bg-gray-200">
                        <th className="py-4 w-12 rounded-l-lg text-center align-middle">
                            <span className="w-4 h-4 inline-block mr-4 relative top-0 left-0">
                                <input className="absolute top-0 left-0 styled-checkbox" type="checkbox" name="" id="title"/>
                                <label className="absolute top-0 left-0" htmlFor="title"></label>
                            </span>
                        </th>
                        <th className="py-4 w-4/12">name</th>
                        <th className="py-4 w-2/12">views</th>
                        <th className="py-4 w-2/12">submissions</th>
                        <th className="py-4 w-2/12 rounded-r-lg">last Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataset.map(data => (
                            <tr key={data.name.text} className="hover:bg-gray-200">
                                <td className="py-4 text-center rounded-l-lg align-top">
                                    <span className="w-4 h-4 inline-block mr-4 relative top-0 left-0">
                                        <input className="absolute top-0 left-0 styled-checkbox" type="checkbox" name="" id={data.name.text} />
                                        <label className="absolute top-0 left-0" htmlFor={data.name.text} ></label>
                                    </span>
                                </td>
                                <td className="py-4">
                                    <div>{data.name.text}</div>
                                    <div className="flex justify-start items-center">
                                        <span className={`inline-block w-2 h-2 rounded-full ${data.name.statusCode}`} />
                                        <span className="ml-2">{data.name.status}</span>
                                    </div>
                                </td>
                                <td className="py-4 align-top">{data.views}</td>
                                <td className="py-4 align-top">{data.submissions}</td>
                                <td className="py-4 align-top">{data.lastModified}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default TableList;
