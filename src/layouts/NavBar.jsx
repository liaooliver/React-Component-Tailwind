import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/dist/v1';

const NavBar = () => {

    const Links = [
        { title: 'Common Header', link: '/commonheader' },
        { title: 'Contact in Header', link: '/contact' },
        { title: 'Details Card', link: '/contact' },
        { title: 'Table List', link: '/tablelist' },
        { title: 'Login Page', link: '/login' },
        { title: 'Time Line', link: '/timeline' },
        { title: 'Upload Page', link: '/upload' },
        { title: 'Water Fall Layout', link: '/waterfall' },
        { title: 'Color Picker', link: '/colorpicker' },
        { title: 'HOC Example', link: '/hoc' },
        { title: 'Hook Example', link: '/hook_example' },
        { title: 'Book', link: '/book' }
    ]
    

    return (
        <nav className="w-64 flex-none border-black px-6 shadow-xs">
            <h5 className="text-gray-600 uppercase my-4">Component Example</h5>
            <div>
              <h5 className="text-sm font-bold text-gray-500 uppercase">Header</h5>
              <ul className="Links">
                {
                    Links.map(link => (
                        <li key={uuid()} className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                            <Link to={link.link}>{ link.title }</Link>
                        </li>
                    ))
                }
              </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;