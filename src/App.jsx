import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './assets/maxresdefault.jpg';
import CommonHeader from './components/CommonHeader';
import ContactHeader from './components/ContactHeader';
import DetailsCard from './components/DetailsCard';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="shadow">
          <div className="py-3">
            <div className="w-24">
              <img src={logo} alt="tailwind Logo" />
            </div>
          </div>
        </div>

        <div className="flex flex-grow">
          <nav className="w-64 border-black shadow px-6">
            <h5 className="text-gray-600 uppercase my-4">Component Example</h5>
            <div>
              <h5 className="text-sm font-bold text-gray-500 uppercase">Header</h5>
              <ul>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/commonheader">Common Header</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/contact">Contact in Header</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/detailcard">Details Card</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="w-full bg-gray-100 overflow-scroll">
            <div className="flex justify-center items-start px-6 py-4 h-full">
              <Switch>
                <Route path="/commonheader">
                  <CommonHeader />
                </Route>
                <Route path="/contact">
                  <ContactHeader />
                </Route>
                <Route path="/detailcard">
                  <DetailsCard />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
