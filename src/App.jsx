import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './assets/icon/maxresdefault.jpg';
import CommonHeader from './components/CommonHeader';
import ContactHeader from './components/ContactHeader';
import DetailsCard from './components/DetailsCard';
import TableList from './components/TableList';
import LoginPage from './components/LoginPage';
import Timeline from './components/Timeline.jsx';
import Upload from './components/Upload.jsx';
import Waterfall from './components/Waterfall';
import ColorPicker from './components/ColorPicker';
import Oraniztional from './components/Organizational';
import HOC from './components/Hoc';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="shadow z-10">
          <div className="p-3">
            <div className="w-24">
              <img src={logo} alt="tailwind Logo" />
            </div>
          </div>
        </div>

        <div className="flex flex-grow">
          <nav className="w-64 flex-none border-black px-6 shadow-xs">
            <h5 className="text-gray-600 uppercase my-4">Component Example</h5>
            <div>
              <h5 className="text-sm font-bold text-gray-500 uppercase">Header</h5>
              <ul className="Links">
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/commonheader">Common Header</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/contact">Contact in Header</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/detailcard">Details Card</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/tablelist">Table List</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/login">Login Page</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/timeline">Time Line</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/upload">Upload Page</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/waterfall">Water Fall Layout</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/colorpicker">Color Picker</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/oraniztional">Oraniztional</Link>
                </li>
                <li className="my-2 p-2 hover:bg-gray-300 hover:text-gray-700 rounded-md">
                  <Link to="/hoc">HOC</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex-1 bg-gray-100">
            <div className="flex justify-start items-start px-6 py-4 h-full">
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
                <Route path="/tablelist">
                  <TableList />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/timeline">
                  <Timeline />
                </Route>
                <Route path="/upload">
                  <Upload />
                </Route>
                <Route path="/waterfall">
                  <Waterfall />
                </Route>
                <Route path="/colorpicker">
                  <ColorPicker />
                </Route>
                <Route path="/oraniztional">
                  <Oraniztional />
                </Route>
                <Route path="/hoc">
                  <HOC />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
